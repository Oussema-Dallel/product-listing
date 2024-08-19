import { filterProductsByQuery } from './filterProductsByQuery';
import type { FilterState } from '../store/slices/filterSlice';
import { mockedProducts } from '../mocks/constants';
import type { Product } from '../types/Product';

describe('filterProductsByQuery', () => {
	const products: Product[] = [ ...mockedProducts.products ];
	const filterProducts = filterProductsByQuery({
		getText: ({ name }) => name,
		getCategory: ({ category }) => category,
	});

	it('returns an empty array when no match is found', () => {
		const query: FilterState = {
			searchQuery: 'some weird text',
			selectedCategory: null,
		};

		const filteredProducts = filterProducts(query)(products);

		expect(filteredProducts.length).toBe(0);
	});

	it('returns an array product matching the search text', () => {
		const query: FilterState = {
			searchQuery: '1',
			selectedCategory: null,
		};

		const filteredProducts = filterProducts(query)(products);

		expect(filteredProducts.length).toBe(1);
		expect(filteredProducts[0]).toStrictEqual(products[0]);
	});

	it('returns an array product matching the selected category', () => {
		const query: FilterState = {
			searchQuery: '',
			selectedCategory: 'Category A',
		};

		const filteredProducts = filterProducts(query)(products);

		expect(filteredProducts.length).toBe(4);
	});

	it('returns an array product matching the query combination', () => {
		const query: FilterState = {
			searchQuery: '3',
			selectedCategory: 'Category B',
		};

		const filteredProducts = filterProducts(query)(products);

		expect(filteredProducts.length).toBe(1);
		expect(filteredProducts[0]).toStrictEqual(products[2]);
	});
});