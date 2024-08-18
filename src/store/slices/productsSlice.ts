import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/Product';
import { productsApiSlice } from './productsApiSlice';

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
	products:[],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers (builder) {
		// For reviewer: This is almost unnacessary for this demo as the data is required in one component.
		// I put it here just to showcase - as a preference - that it is better to keep state in
		// the redux-toolkit ecosystem rather then relying on RTK-query for state management.
		builder.addMatcher(
			productsApiSlice.endpoints.getProductListing.matchFulfilled,
			(state, action: PayloadAction<Product[]>) => {
				state.products = action.payload;
			},
		);
	},
});

const { reducer } = productSlice;

export default reducer;