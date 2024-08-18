import type { AppStore } from './store/store';
import type { CustomTheme } from './theme/theme';
import { globalStyle } from './theme/globalStyle';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { GlobalStyles, ThemeProvider } from '@mui/material';

interface AppProviderProps extends PropsWithChildren {
    store: AppStore
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
	store,
}): ReactElement => {
	return (
		<Suspense fallback={ null }>
			<GlobalStyles styles={ globalStyle } />
			<Provider store={ store }>
				<ThemeProvider theme={ theme }>
					{ children }
				</ThemeProvider>
			</Provider>
		</Suspense>
	);
};

export { Providers };