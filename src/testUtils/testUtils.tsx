import { afterEach } from 'vitest';
import type { CustomTheme } from '../theme/theme';
import { Providers } from '../Providers';
import type { RenderResult } from '@testing-library/react';
import { server } from '../mocks/server';
import { theme } from '../theme/theme';
import { type AppState, type AppStore, configureStore } from '../store/store';
import { cleanup, render } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

// Enable API mocking before tests.
beforeAll(() => {
	server.listen();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
	server.resetHandlers();
	cleanup();
});

// Disable API mocking after the tests are done.
afterAll(() => {
	server.close();
});

interface ProvidersConfigurationsProps {
	customTheme?: CustomTheme
	preloadedState?: Partial<AppState>
	store?: AppStore
}

const customRender = (ui: ReactElement, options = {}): ReturnType<typeof render> => {
	return render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }) => children,
		...options,
	});
};

/**
 *
 * @param ui The UI to be tested
 * @param providersConfigurationProps an object containing the individual providers
 * used by the application (e.g. mui theme, redux store, i18n, etc...)
 * @returns an object which matches the screen object from the @testing-library/react
 */
const renderWithProviders = (
	ui: ReactElement,
	{
		preloadedState = {},
		store = configureStore(preloadedState),
		customTheme,
	}: ProvidersConfigurationsProps = {},
): RenderResult => {
	const testingTheme = customTheme ?? theme;

	return customRender(ui, {
		wrapper: ({ children }: { children: ReactNode }) => (
			<Providers
				store={ store }
				theme={ testingTheme }
			>
				{ children }
			</Providers>
		),
	});
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, renderWithProviders };