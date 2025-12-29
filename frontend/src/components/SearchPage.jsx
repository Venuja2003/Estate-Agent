import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import propertiesData from '../data/properties.json';
import PropertyCard from './PropertyCard';
import FavouritesList from './FavouritesList';
import Footer from './Footer';
import { filterProperties } from '../utils/searchUtils';
import './SearchPage.css'

const SearchPage = ({
                        onPropertyClick,
                        favourites,
                        addToFavourites,
                        removeFromFavourites,
                        clearFavourites
                    }) => {
    // Search criteria state
    const [propertyType, setPropertyType] = useState(null);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minBedrooms, setMinBedrooms] = useState('');
    const [maxBedrooms, setMaxBedrooms] = useState('');
    const [dateAfter, setDateAfter] = useState(null);
    const [dateBefore, setDateBefore] = useState(null);
    const [postcode, setPostcode] = useState('');

    // Results state
    const [searchResults, setSearchResults] = useState(propertiesData.properties);
    const [hasSearched, setHasSearched] = useState(false);

    // Options for Select components
    const propertyTypeOptions = [
        { value: '', label: 'Any' },
        { value: 'House', label: 'House' },
        { value: 'Flat', label: 'Flat' }
    ];

    const priceOptions = [
        { value: '', label: 'No min' },
        { value: '200000', label: '£200,000' },
        { value: '300000', label: '£300,000' },
        { value: '400000', label: '£400,000' },
        { value: '500000', label: '£500,000' },
        { value: '750000', label: '£750,000' },
        { value: '1000000', label: '£1,000,000' }
    ];

    const maxPriceOptions = [
        { value: '', label: 'No max' },
        { value: '300000', label: '£300,000' },
        { value: '400000', label: '£400,000' },
        { value: '500000', label: '£500,000' },
        { value: '750000', label: '£750,000' },
        { value: '1000000', label: '£1,000,000' },
        { value: '1500000', label: '£1,500,000' }
    ];

    const bedroomOptions = [
        { value: '', label: 'No min' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' }
    ];

    const maxBedroomOptions = [
        { value: '', label: 'No max' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5+' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();

        const criteria = {
            type: propertyType?.value || '',
            minPrice: minPrice?.value || '',
            maxPrice: maxPrice?.value || '',
            minBedrooms: minBedrooms?.value || '',
            maxBedrooms: maxBedrooms?.value || '',
            dateAfter,
            dateBefore,
            postcode: postcode.trim().toUpperCase()
        };

        const results = filterProperties(propertiesData.properties, criteria);
        setSearchResults(results);
        setHasSearched(true);
    };

    const handleReset = () => {
        setPropertyType(null);
        setMinPrice('');
        setMaxPrice('');
        setMinBedrooms('');
        setMaxBedrooms('');
        setDateAfter(null);
        setDateBefore(null);
        setPostcode('');
        setSearchResults(propertiesData.properties);
        setHasSearched(false);
    };

    // Custom styles for react-select
    const selectStyles = {
        control: (base) => ({
            ...base,
            borderColor: '#2d2d2d',
            '&:hover': { borderColor: '#8b5cf6' },
            minHeight: '48px',
            fontSize: '15px'
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#8b5cf6' : state.isFocused ? '#f3f4f6' : 'white',
            color: state.isSelected ? 'white' : '#1f2937',
        })
    };

    return (
        <div className="search-page">
            <header className="header">
                <div className="header-content">
                    <h1 className="site-title">Property<span>Finder</span></h1>
                    <p className="site-tagline">Discover your dream home</p>
                </div>
            </header>

            <div className="main-content">
                <div className="search-section">
                    <div className="search-container">
                        <h2 className="search-title">Search Properties</h2>

                        <form onSubmit={handleSearch} className="search-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="property-type">Property Type</label>
                                    <Select
                                        id="property-type"
                                        options={propertyTypeOptions}
                                        value={propertyType}
                                        onChange={setPropertyType}
                                        styles={selectStyles}
                                        placeholder="Select type..."
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="min-price">Minimum Price</label>
                                    <Select
                                        id="min-price"
                                        options={priceOptions}
                                        value={minPrice}
                                        onChange={setMinPrice}
                                        styles={selectStyles}
                                        placeholder="No minimum"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="max-price">Maximum Price</label>
                                    <Select
                                        id="max-price"
                                        options={maxPriceOptions}
                                        value={maxPrice}
                                        onChange={setMaxPrice}
                                        styles={selectStyles}
                                        placeholder="No maximum"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="min-bedrooms">Min Bedrooms</label>
                                    <Select
                                        id="min-bedrooms"
                                        options={bedroomOptions}
                                        value={minBedrooms}
                                        onChange={setMinBedrooms}
                                        styles={selectStyles}
                                        placeholder="No minimum"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="max-bedrooms">Max Bedrooms</label>
                                    <Select
                                        id="max-bedrooms"
                                        options={maxBedroomOptions}
                                        value={maxBedrooms}
                                        onChange={setMaxBedrooms}
                                        styles={selectStyles}
                                        placeholder="No maximum"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date-after">Added After</label>
                                    <DatePicker
                                        id="date-after"
                                        selected={dateAfter}
                                        onChange={setDateAfter}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="Select date..."
                                        className="date-input"
                                        maxDate={new Date()}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date-before">Added Before</label>
                                    <DatePicker
                                        id="date-before"
                                        selected={dateBefore}
                                        onChange={setDateBefore}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="Select date..."
                                        className="date-input"
                                        maxDate={new Date()}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="postcode">Postcode Area</label>
                                    <input
                                        id="postcode"
                                        type="text"
                                        value={postcode}
                                        onChange={(e) => setPostcode(e.target.value)}
                                        placeholder="e.g., BR1, BR2, BR5"
                                        className="text-input"
                                        maxLength="10"
                                    />
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary">
                                    <span className="btn-icon">🔍</span>
                                    Search Properties
                                </button>
                                <button type="button" onClick={handleReset} className="btn btn-secondary">
                                    Reset Filters
                                </button>
                            </div>
                        </form>
                    </div>

                    <FavouritesList
                        favourites={favourites}
                        onPropertyClick={onPropertyClick}
                        removeFromFavourites={removeFromFavourites}
                        clearFavourites={clearFavourites}
                        addToFavourites={addToFavourites}
                    />
                </div>

                <div className="results-section">
                    <div className="results-header">
                        <h2 className="results-title">
                            {hasSearched ? `Found ${searchResults.length} Properties` : 'All Properties'}
                        </h2>
                        <p className="results-count">{searchResults.length} results</p>
                    </div>

                    {searchResults.length > 0 ? (
                        <div className="results-grid">
                            {searchResults.map(property => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    onPropertyClick={onPropertyClick}
                                    addToFavourites={addToFavourites}
                                    isFavourite={favourites.some(fav => fav.id === property.id)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">🏠</div>
                            <h3>No properties found</h3>
                            <p>Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;