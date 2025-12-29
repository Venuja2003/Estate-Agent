import { useDrag } from 'react-dnd';
import './PropertyCard.css';

const PropertyCard = ({ property, onPropertyClick, addToFavourites, isFavourite }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'PROPERTY',
        item: { property },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0
        }).format(price);
    };

    const handleFavouriteClick = (e) => {
        e.stopPropagation();
        if (!isFavourite) {
            addToFavourites(property);
        }
    };

    return (
        <div
            ref={drag}
            className={`property-card ${isDragging ? 'dragging' : ''}`}
            onClick={() => onPropertyClick(property)}
        >
            <div className="property-image-container">
                <img
                    src={property.picture}
                    alt={property.location}
                    className="property-image"
                />
                <button
                    className={`favourite-btn ${isFavourite ? 'active' : ''}`}
                    onClick={handleFavouriteClick}
                    aria-label="Add to favourites"
                >
                    {isFavourite ? '❤️' : '🤍'}
                </button>
                <div className="property-type-badge">{property.type}</div>
            </div>

            <div className="property-details">
                <div className="property-price">{formatPrice(property.price)}</div>
                <div className="property-location">{property.location}</div>
                <div className="property-features">
          <span className="feature">
            <span className="feature-icon">🛏️</span>
              {property.bedrooms} bed
          </span>
                    <span className="feature">
            <span className="feature-icon">🏷️</span>
                        {property.tenure}
          </span>
                </div>
                <p className="property-description">{property.description}</p>
                <div className="property-added">
                    Added: {property.added.month} {property.added.day}, {property.added.year}
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;