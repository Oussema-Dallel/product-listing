import type { Product } from '../../types/Product';
import { BASE_URL, PRODUCT_LISTING_URL } from '../../constants/app';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// For reviewer: For the purpose of this demo we create the productApiSlice,
// typically we should have a single apiSlice per backend(base url) and then we inject specific endpoints per feature.
const productsApiSlice = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getProductListing: builder.query<Product[], void>({
			query: () => ({ url: PRODUCT_LISTING_URL }),
		}),
	}),
});

const { useGetProductListingQuery } = productsApiSlice;

export { useGetProductListingQuery, productsApiSlice };