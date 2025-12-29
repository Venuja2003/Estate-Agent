/**
 * Filter properties based on search criteria
 * Supports filtering by type, price range, bedrooms, date added, and postcode
 */
export const filterProperties = (properties, criteria) => {
    return properties.filter(property => {
        // Filter by property type
        if (criteria.type && property.type !== criteria.type) {
            return false;
        }

        // Filter by minimum price
        if (criteria.minPrice && property.price < parseInt(criteria.minPrice)) {
            return false;
        }

        // Filter by maximum price
        if (criteria.maxPrice && property.price > parseInt(criteria.maxPrice)) {
            return false;
        }

        // Filter by minimum bedrooms
        if (criteria.minBedrooms && property.bedrooms < parseInt(criteria.minBedrooms)) {
            return false;
        }

        // Filter by maximum bedrooms
        if (criteria.maxBedrooms && property.bedrooms > parseInt(criteria.maxBedrooms)) {
            return false;
        }

        // Filter by date added (after specified date)
        if (criteria.dateAfter) {
            const propertyDate = new Date(
                property.added.year,
                getMonthNumber(property.added.month) - 1,
                property.added.day
            );
            if (propertyDate < criteria.dateAfter) {
                return false;
            }
        }

        // Filter by date added (before specified date)
        if (criteria.dateBefore) {
            const propertyDate = new Date(
                property.added.year,
                getMonthNumber(property.added.month) - 1,
                property.added.day
            );
            if (propertyDate > criteria.dateBefore) {
                return false;
            }
        }

        // Filter by postcode area
        if (criteria.postcode) {
            const postcodeArea = extractPostcodeArea(property.location);
            if (!postcodeArea.includes(criteria.postcode)) {
                return false;
            }
        }

        return true;
    });
};

/**
 * Convert month name to number (1-12)
 */
const getMonthNumber = (monthName) => {
    const months = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4,
        'May': 5, 'June': 6, 'July': 7, 'August': 8,
        'September': 9, 'October': 10, 'November': 11, 'December': 12
    };
    return months[monthName] || 1;
};

/**
 * Extract postcode area from location string
 * e.g., "Petts Wood Road, Petts Wood, Orpington BR5" -> "BR5"
 */
const extractPostcodeArea = (location) => {
    const postcodeMatch = location.match(/\b([A-Z]{1,2}\d{1,2}[A-Z]?)\b/);
    return postcodeMatch ? postcodeMatch[1] : '';
};

/**
 * Format property date for display
 */
export const formatPropertyDate = (added) => {
    return `${added.month} ${added.day}, ${added.year}`;
};

/**
 * Calculate days since property was added
 */
export const getDaysSinceAdded = (added) => {
    const propertyDate = new Date(
        added.year,
        getMonthNumber(added.month) - 1,
        added.day
    );
    const today = new Date();
    const diffTime = Math.abs(today - propertyDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};