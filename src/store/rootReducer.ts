import { combineReducers } from '@reduxjs/toolkit';
import { productsApiSlice } from './slices/productsApiSlice';
import productsSlice from './slices/productsSlice';

const reducer = combineReducers({
	[productsApiSlice.reducerPath]: productsApiSlice.reducer,
	productsSlice,
});

export default reducer;