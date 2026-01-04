import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PropertyCard from './PropertyCard';

const mockProperty = {
    id: 'prop1',
    type: 'House',
    bedrooms: 3,
    price: 750000,
    tenure: 'Freehold',
    description: 'Attractive three bedroom semi-detached family home',
    location: 'Petts Wood Road, Petts Wood, Orpington BR5',
    picture: 'https://example.com/image.jpg',
    added: { month: 'October', day: 12, year: 2024 }
};

const renderWithDnd = (component) => {
    return render(
        <DndProvider backend={HTML5Backend}>
            {component}
        </DndProvider>
    );
};

describe('PropertyCard Component', () => {
    it('renders property details correctly', () => {
        const mockClick = vi.fn();
        const mockAddFavourite = vi.fn();

        renderWithDnd(
            <PropertyCard
                property={mockProperty}
                onPropertyClick={mockClick}
                addToFavourites={mockAddFavourite}
                isFavourite={false}
            />
        );

        expect(screen.getByText(/£750,000/)).toBeInTheDocument();
        expect(screen.getByText(mockProperty.location)).toBeInTheDocument();
        expect(screen.getByText(mockProperty.description)).toBeInTheDocument();
    });

    it('calls onPropertyClick when card is clicked', () => {
        const mockClick = vi.fn();
        const mockAddFavourite = vi.fn();

        renderWithDnd(
            <PropertyCard
                property={mockProperty}
                onPropertyClick={mockClick}
                addToFavourites={mockAddFavourite}
                isFavourite={false}
            />
        );

        const card = screen.getByText(mockProperty.location).closest('.property-card');
        fireEvent.click(card);

        expect(mockClick).toHaveBeenCalledWith(mockProperty);
    });

    it('calls addToFavourites when favourite button is clicked', () => {
        const mockClick = vi.fn();
        const mockAddFavourite = vi.fn();

        renderWithDnd(
            <PropertyCard
                property={mockProperty}
                onPropertyClick={mockClick}
                addToFavourites={mockAddFavourite}
                isFavourite={false}
            />
        );

        const favouriteBtn = screen.getByLabelText('Add to favourites');
        fireEvent.click(favouriteBtn);

        expect(mockAddFavourite).toHaveBeenCalledWith(mockProperty);
        expect(mockClick).not.toHaveBeenCalled();
    });

    it('shows active state when property is favourite', () => {
        const mockClick = vi.fn();
        const mockAddFavourite = vi.fn();

        renderWithDnd(
            <PropertyCard
                property={mockProperty}
                onPropertyClick={mockClick}
                addToFavourites={mockAddFavourite}
                isFavourite={true}
            />
        );

        const favouriteBtn = screen.getByLabelText('Add to favourites');
        expect(favouriteBtn).toHaveClass('active');
    });

    it('does not call addToFavourites when already favourite', () => {
        const mockClick = vi.fn();
        const mockAddFavourite = vi.fn();

        renderWithDnd(
            <PropertyCard
                property={mockProperty}
                onPropertyClick={mockClick}
                addToFavourites={mockAddFavourite}
                isFavourite={true}
            />
        );

        const favouriteBtn = screen.getByLabelText('Add to favourites');
        fireEvent.click(favouriteBtn);

        expect(mockAddFavourite).not.toHaveBeenCalled();
    });
});