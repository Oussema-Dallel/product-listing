import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Layout } from './components/Layout/Layout';
import { ProductList } from './components/ProductListing/ProductList';
import type { FunctionComponent, ReactElement } from 'react';

const App: FunctionComponent = (): ReactElement => {
	return (
		<Layout>
			<h1>The most amazing product list application</h1>
			<FilterProducts />
			<ProductList />
		</Layout>
	);
};

export default App;
