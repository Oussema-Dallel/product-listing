import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';

const reducer = combineReducers({
	productsSlice,
});

export default reducer;