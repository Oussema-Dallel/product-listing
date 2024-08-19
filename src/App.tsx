import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Layout } from './components/Layout/Layout';
import { ProductList } from './components/ProductListing/ProductList';
import { Typography } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';

const App: FunctionComponent = (): ReactElement => {
	return (
		<Layout>
			<Typography
				gutterBottom
				marginBottom='2rem'
				variant='h4'
			>
				The most amazing product list application
			</Typography>
			<FilterProducts />
			<ProductList />
		</Layout>
	);
};

export default App;
