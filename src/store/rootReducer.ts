import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import { productsApiSlice } from './slices/productsApiSlice';
import productsSlice from './slices/productsSlice';

const reducer = combineReducers({
	[productsApiSlice.reducerPath]: productsApiSlice.reducer,
	productsSlice,
	filterSlice,
});

export default reducer;