import { afterEach } from 'vitest';
import type { CustomTheme } from '../theme/theme';
import { Providers } from '../Providers';
import type { RenderResult } from '@testing-library/react';
import { theme } from '../theme/theme';
import { cleanup, render } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

afterEach(() => {
	cleanup();
});

interface ProvidersConfigurationsProps {
	theme?: CustomTheme
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
 * @param providersConfiguration an object containing the individual providers
 * used by the application (e.g. mui theme, redux store, i18n, etc...)
 * @returns an object which matches the screen object from the @testing-library/react
 */
const renderWithProviders = (
	ui: ReactElement,
	providersConfiguration: ProvidersConfigurationsProps = {},
): RenderResult => {
	const customTheme = providersConfiguration.theme ?? theme;

	return customRender(ui, {
		wrapper: ({ children }: { children: ReactNode }) => (
			<Providers
				theme={ customTheme }
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