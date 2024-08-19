import type { Category } from '../types/Product';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PRODUCT_LISTING_URL = 'product-listing';

const productsCategories: Category[] = [ 'Category A', 'Category B', 'Category C' ];

export { BASE_URL, PRODUCT_LISTING_URL, productsCategories };