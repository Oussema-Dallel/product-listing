import { createTheme } from '@mui/material';

type CustomTheme = ReturnType<typeof createTheme>;

const theme: CustomTheme = createTheme({
	// P.S: if this exact theme sounds familiar, it's because it is :)
	typography: {
		fontFamily: 'Montserrat, sans-serif',
	},
	direction: 'ltr',
	palette: {
		primary: {
			main: '#194C99',
			dark: 'rgb(17, 53, 107)',
			light: '#E6F0FF',
			contrastText: '#fff',
		},
		secondary: {
			main: '#2864B9',
			dark: 'rgb(28, 70, 129)',
			light: '#D7E8FF',
			contrastText: '#fff',
		},
		text: {
			primary: '#54577C',
			secondary: '#1A1D47',
		},
	},
	components: {
		/* eslint-disable @typescript-eslint/naming-convention */
		MuiButton: {
			styleOverrides: {
				root: {
					boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
					textTransform: 'none',
					padding: '1.5rem',
				},
			},
			variants: [
				{
					props: {
						variant: 'text',
					},
					style: {
						boxShadow: 'none',
					},
				},
			],
		},
		/* eslint-enable @typescript-eslint/naming-convention */
	},
});

export type { CustomTheme };
export { theme };

