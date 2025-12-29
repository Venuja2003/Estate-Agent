import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SearchPage from './components/SearchPage';
import PropertyPage from './components/PropertyPage';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('search');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [favourites, setFavourites] = useState([]);

    const handlePropertyClick = (property) => {
        setSelectedProperty(property);
        setCurrentView('property');
    };

    const handleBackToSearch = () => {
        setCurrentView('search');
        setSelectedProperty(null);
    };

    const addToFavourites = (property) => {
        // Prevent duplicates
        if (!favourites.find(fav => fav.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    const removeFromFavourites = (propertyId) => {
        setFavourites(favourites.filter(fav => fav.id !== propertyId));
    };

    const clearFavourites = () => {
        setFavourites([]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                {currentView === 'search' && (
                    <SearchPage
                        onPropertyClick={handlePropertyClick}
                        favourites={favourites}
                        addToFavourites={addToFavourites}
                        removeFromFavourites={removeFromFavourites}
                        clearFavourites={clearFavourites}
                    />
                )}
                {currentView === 'property' && selectedProperty && (
                    <PropertyPage
                        property={selectedProperty}
                        onBack={handleBackToSearch}
                        addToFavourites={addToFavourites}
                        isFavourite={favourites.some(fav => fav.id === selectedProperty.id)}
                    />
                )}
            </div>
        </DndProvider>
    );
}

export default App;