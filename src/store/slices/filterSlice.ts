import type { Category } from '../../types/Product';
import { createSlice } from '@reduxjs/toolkit';
import { isNil } from '../../utils/IsNil';
import { isNotNil } from '../../utils/isNotNil';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    searchQuery: string;
    selectedCategory: Category | null;
}

const initialState: FilterState = {
	searchQuery: '',
	selectedCategory: null,
};

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
	reducers: {
		updateSearchQuery (state, action: PayloadAction<string>) {
			state.searchQuery = action.payload;
		},
		updateSelectedCategory (state, action: PayloadAction<Category>) {
			state.selectedCategory = action.payload;
		},
		updateFilter (state, action: PayloadAction<Partial<FilterState>>) {
			const { searchQuery, selectedCategory } = action.payload;

			if (isNil(searchQuery) && isNil(selectedCategory)) {
				return;
			}
			if (isNil(searchQuery) && isNotNil(selectedCategory)) {
				state.selectedCategory = selectedCategory;
			}
			if (isNil(selectedCategory) && isNotNil(searchQuery)) {
				state.searchQuery = searchQuery;
			}
		},
		clearFilters () {
			return initialState;
		},
	},
});

const {
	updateFilter,
	updateSearchQuery,
	updateSelectedCategory,
	clearFilters,
} = filterSlice.actions;

const { reducer } = filterSlice;

export type { FilterState };
export { updateFilter, updateSearchQuery, updateSelectedCategory, clearFilters };
export default reducer;