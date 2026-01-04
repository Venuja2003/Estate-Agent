import { describe, it, expect } from 'vitest';
import {
    filterProperties,
    formatPropertyDate,
    getDaysSinceAdded
} from './searchUtils';

describe('Search Utility Functions', () => {
    const mockProperties = [
        {
            id: 'prop1',
            type: 'House',
            bedrooms: 3,
            price: 750000,
            location: 'Petts Wood Road, Petts Wood, Orpington BR5',
            added: { month: 'October', day: 12, year: 2024 }
        },
        {
            id: 'prop2',
            type: 'Flat',
            bedrooms: 2,
            price: 399995,
            location: 'Crofton Road, Orpington BR6',
            added: { month: 'September', day: 14, year: 2024 }
        },
        {
            id: 'prop3',
            type: 'House',
            bedrooms: 5,
            price: 1250000,
            location: 'Bromley Common, Bromley BR2',
            added: { month: 'November', day: 5, year: 2024 }
        }
    ];

    describe('filterProperties', () => {
        it('should return all properties when no criteria provided', () => {
            const criteria = {
                type: '',
                minPrice: '',
                maxPrice: '',
                minBedrooms: '',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: ''
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(3);
        });

        it('should filter by property type', () => {
            const criteria = {
                type: 'House',
                minPrice: '',
                maxPrice: '',
                minBedrooms: '',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: ''
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(2);
            expect(results.every(p => p.type === 'House')).toBe(true);
        });

        it('should filter by minimum price', () => {
            const criteria = {
                type: '',
                minPrice: '400000',
                maxPrice: '',
                minBedrooms: '',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: ''
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(2);
            expect(results.every(p => p.price >= 400000)).toBe(true);
        });

        it('should filter by maximum price', () => {
            const criteria = {
                type: '',
                minPrice: '',
                maxPrice: '800000',
                minBedrooms: '',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: ''
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(2);
            expect(results.every(p => p.price <= 800000)).toBe(true);
        });

        it('should filter by bedrooms', () => {
            const criteria = {
                type: '',
                minPrice: '',
                maxPrice: '',
                minBedrooms: '3',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: ''
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(2);
            expect(results.every(p => p.bedrooms >= 3)).toBe(true);
        });

        it('should filter by postcode area', () => {
            const criteria = {
                type: '',
                minPrice: '',
                maxPrice: '',
                minBedrooms: '',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: 'BR6'
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(1);
            expect(results[0].location).toContain('BR6');
        });

        it('should filter by multiple criteria', () => {
            const criteria = {
                type: 'Flat',
                minPrice: '300000',
                maxPrice: '500000',
                minBedrooms: '2',
                maxBedrooms: '2',
                dateAfter: null,
                dateBefore: null,
                postcode: 'BR6'
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(1);
            expect(results[0].type).toBe('Flat');
        });

        it('should return empty array when no matches', () => {
            const criteria = {
                type: 'House',
                minPrice: '2000000',
                maxPrice: '',
                minBedrooms: '',
                maxBedrooms: '',
                dateAfter: null,
                dateBefore: null,
                postcode: ''
            };
            const results = filterProperties(mockProperties, criteria);
            expect(results).toHaveLength(0);
        });
    });

    describe('formatPropertyDate', () => {
        it('should format date correctly', () => {
            const added = { month: 'October', day: 12, year: 2024 };
            const formatted = formatPropertyDate(added);
            expect(formatted).toBe('October 12, 2024');
        });
    });

    describe('getDaysSinceAdded', () => {
        it('should calculate days since property was added', () => {
            const added = { month: 'December', day: 1, year: 2024 };
            const days = getDaysSinceAdded(added);
            expect(days).toBeGreaterThanOrEqual(0);
            expect(typeof days).toBe('number');
        });
    });
});