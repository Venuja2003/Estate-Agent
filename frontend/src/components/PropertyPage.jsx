import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ImageGallery from 'react-image-gallery';
import 'react-tabs/style/react-tabs.css';
import Footer from './Footer';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PropertyPage.css';

const PropertyPage = ({ property, onBack, addToFavourites, isFavourite }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0
        }).format(price);
    };

    // Format images for react-image-gallery
    const galleryImages = property.images.map(img => ({
        original: img,
        thumbnail: img
    }));

    const handleFavouriteClick = () => {
        if (!isFavourite) {
            addToFavourites(property);
        }
    };

    // Google Maps embed URL
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${property.latitude},${property.longitude}&zoom=15`;

    return (
        <div className="property-page">
            <header className="property-header">
                <button onClick={onBack} className="back-btn">
                    ← Back to Search
                </button>
                <button
                    onClick={handleFavouriteClick}
                    className={`favourite-btn-large ${isFavourite ? 'active' : ''}`}
                >
                    {isFavourite ? '❤️ Saved' : '🤍 Save to Favourites'}
                </button>
            </header>

            <div className="property-content">
                <div className="property-gallery-section">
                    <ImageGallery
                        items={galleryImages}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        showNav={true}
                        slideInterval={3000}
                    />
                </div>

                <div className="property-info-section">
                    <div className="property-main-info">
                        <h1 className="property-title">{property.location}</h1>
                        <div className="property-price-large">{formatPrice(property.price)}</div>

                        <div className="property-key-features">
                            <div className="key-feature">
                                <span className="feature-label">Type</span>
                                <span className="feature-value">{property.type}</span>
                            </div>
                            <div className="key-feature">
                                <span className="feature-label">Bedrooms</span>
                                <span className="feature-value">{property.bedrooms}</span>
                            </div>
                            <div className="key-feature">
                                <span className="feature-label">Tenure</span>
                                <span className="feature-value">{property.tenure}</span>
                            </div>
                            <div className="key-feature">
                                <span className="feature-label">Added</span>
                                <span className="feature-value">
                  {property.added.month} {property.added.day}, {property.added.year}
                </span>
                            </div>
                        </div>

                        <div className="property-short-description">
                            {property.description}
                        </div>
                    </div>

                    <Tabs className="property-tabs">
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab>Floor Plan</Tab>
                            <Tab>Map</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="tab-content">
                                <h3>Full Description</h3>
                                <p className="property-long-description">
                                    {property.longDescription}
                                </p>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="tab-content">
                                <h3>Floor Plan</h3>
                                <div className="floor-plan-container">
                                    <img
                                        src={property.floorPlan}
                                        alt="Floor plan"
                                        className="floor-plan-image"
                                    />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="tab-content">
                                <h3>Location</h3>
                                <div className="map-container">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={mapUrl}
                                        allowFullScreen
                                        title="Property location map"
                                    />
                                </div>
                                <p className="map-address">{property.location}</p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PropertyPage;