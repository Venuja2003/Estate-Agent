import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { HashRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import PropertyPage from './components/PropertyPage';
import propertiesData from './data/properties.json'; // your JSON
import './App.css';

function App() {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (property) => {
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

    // --------------------------
    // Inline wrappers for routing
    // --------------------------
    const SearchRoute = () => {
        const navigate = useNavigate();

        const handlePropertyClick = (property) => {
            navigate(`/property/${property.id}`);
        };

        return (
            <SearchPage
                onPropertyClick={handlePropertyClick}
                favourites={favourites}
                addToFavourites={addToFavourites}
                removeFromFavourites={removeFromFavourites}
                clearFavourites={clearFavourites}
            />
        );
    };

    const PropertyRoute = () => {
        const { propertyId } = useParams();
        const navigate = useNavigate();

        const property = propertiesData.properties.find(p => p.id === propertyId);
        if (!property) return <div>Property not found</div>;

        return (
            <PropertyPage
                property={property}
                onBack={() => navigate(-1)}
                addToFavourites={addToFavourites}
                isFavourite={favourites.some(fav => fav.id === property.id)}
            />
        );
    };

    // --------------------------
    // Render Router
    // --------------------------
    return (
        <DndProvider backend={HTML5Backend}>
            <Router>
                <Routes>
                    <Route path="/" element={<SearchRoute />} />
                    <Route path="/property/:propertyId" element={<PropertyRoute />} />
                </Routes>
            </Router>
        </DndProvider>
    );
}

export default App;
