import type { CustomTheme } from './theme/theme';
import { globalStyle } from './theme/globalStyle';
import { Suspense } from 'react';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { GlobalStyles, ThemeProvider } from '@mui/material';

interface AppProviderProps extends PropsWithChildren {
    theme: CustomTheme;
}

/**
 * Wraps the application with several providers as needed. e.g. Redux, i18n, etc.
 * @param properties referring to elements injected into individual providers.
 * @returns The wrapper with the injected providers from the properties.
 */
const Providers: FunctionComponent<AppProviderProps> = ({
	theme,
	children,
}): ReactElement => {
	return (
		<Suspense fallback={ null }>
			<GlobalStyles styles={ globalStyle } />
			<ThemeProvider theme={ theme }>
				{ children }
			</ThemeProvider>
		</Suspense>
	);
};

export { Providers };