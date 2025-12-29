import { useDrop } from 'react-dnd';
import './FavouritesList.css';

const FavouritesList = ({
                            favourites,
                            onPropertyClick,
                            removeFromFavourites,
                            clearFavourites,
                            addToFavourites
                        }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'PROPERTY',
        drop: (item) => {
            // Add to favourites when dropped
            if (!favourites.find(fav => fav.id === item.property.id)) {
                // This will be handled by the parent component
                // We need to pass this up
                addToFavourites(item.property);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }), [favourites, addToFavourites]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <div
            ref={drop}
            className={`favourites-list ${isOver ? 'drag-over' : ''}`}
        >
            <div className="favourites-header">
                <h3 className="favourites-title">
                    <span className="favourites-icon">❤️</span>
                    Favourites ({favourites.length})
                </h3>
                {favourites.length > 0 && (
                    <button
                        onClick={clearFavourites}
                        className="clear-btn"
                        aria-label="Clear all favourites"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {favourites.length === 0 ? (
                <div className="favourites-empty">
                    <p>Drag properties here or click the heart icon to save your favourites</p>
                </div>
            ) : (
                <div className="favourites-items">
                    {favourites.map(property => (
                        <div
                            key={property.id}
                            className="favourite-item"
                            onClick={() => onPropertyClick(property)}
                        >
                            <img
                                src={property.picture}
                                alt={property.location}
                                className="favourite-image"
                            />
                            <div className="favourite-info">
                                <div className="favourite-price">{formatPrice(property.price)}</div>
                                <div className="favourite-location">{property.location}</div>
                                <div className="favourite-bedrooms">{property.bedrooms} bed {property.type}</div>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFromFavourites(property.id);
                                }}
                                aria-label="Remove from favourites"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouritesList;