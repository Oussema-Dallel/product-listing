import type { FilterState } from '../store/slices/filterSlice';
import type { Category, Product } from '../types/Product';

/**
 * A utility function that filters products based on search term by text and by category
 * @param getters What to filter against within from the product
 * @returns A filter products function which takes an array of Product as parameter and returns
 * the filtered products
 * @example const products = [
 *  {
 *      category: "Category A",
 *      name: "Product 1",
 *      id: 1, price: 99.99
 *  }
 * ];
 * const query = {searchQuery: "Product 1", category: "Category A"};
 *  const getFilteredProducts = filterProductsByQuery({
			getText: ({ name }) => name,
			getCategory: ({ category }) => category,
		})(query);

    // here when to use the function
	getFilteredProducts(products);
 */
const filterProductsByQuery = (getters: {
    getCategory: (product: Product) => Category,
    getText: (product: Product) => string,
}) => (query: FilterState) => (products: Product[]): Product[] => {
	const { getText, getCategory } = getters;
	const { searchQuery, selectedCategory } = query;

	const filteredProducts = products.filter(product => {
		if (searchQuery.length === 0) {
			return true;
		}

		const text = getText(product);

		return text.includes(searchQuery);
	}).filter(
		product => !selectedCategory || getCategory(product) === selectedCategory,
	);

	return filteredProducts;
};

export { filterProductsByQuery };