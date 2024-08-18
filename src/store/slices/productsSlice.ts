import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/Product';

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
	products:[],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		//TODO: This is subject to change when the decision between
		// RTK-Query, React-Query or traditional AsyncEffects is made, for now this should do.
		setProducts (state, action: PayloadAction<Product[]>) {
			state.products = action.payload;
		},
	},
});

const { setProducts } = productSlice.actions;
const { reducer } = productSlice;

export { setProducts };
export default reducer;