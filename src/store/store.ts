import { configureStore as configureReduxStore } from '@reduxjs/toolkit';
import type { PreloadedStateShapeFromReducersMapObject } from '@reduxjs/toolkit';
import { productsApiSlice } from './slices/productsApiSlice';
import rootReducer from './rootReducer';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Configures the Redux store with initial state, especially useful for testing.
 * @param preloadedState Initial state to be applied to store
 * @returns Redux store
 */
const configureStore = (
	preloadedState?: PreloadedStateShapeFromReducersMapObject<typeof rootReducer>,
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
) => configureReduxStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware),
	preloadedState,
	devTools: import.meta.env.DEV,
});

const store = configureStore();

// App state type and type selector hook
type AppState = ReturnType<typeof store.getState>;
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

type AppStore = ReturnType<typeof configureStore>;

// App dispatch type and typed dispatch hook
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>;

export type { AppState, AppDispatch, AppStore };

export { store, configureStore, useAppSelector, useAppDispatch };