import { filterProductsByQuery } from '../utils/filterProductsByQuery';
import type { Product } from '../types/Product';
import { useAppSelector } from '../store/store';
import { useMemo } from 'react';

/**
 * A custom hook that filters the products based on the current query
 * @param products the List of the original products to be filtered
 * @returns the filtered products based on the query
 */
const useFilteredProducts = (products: Product[]): Product[] => {
	const appliedFilter = useAppSelector(state => state.filterSlice);

	const getFilteredProducts = useMemo(() => {
		return filterProductsByQuery({
			getText: ({ name }) => name,
			getCategory: ({ category }) => category,
		})(appliedFilter);
	}, [ appliedFilter ]);

	return getFilteredProducts(products);
};

export { useFilteredProducts };