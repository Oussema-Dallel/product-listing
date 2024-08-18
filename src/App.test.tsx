import App from './App';
import { MOCK_REQUEST_DEFAULT_DELAY } from './mocks/constants';
import { renderWithProviders, waitFor } from './testUtils/testUtils';

describe('<App />', () => {
	it('should render the main title', () => {
		const screen = renderWithProviders(<App />);

		const mainTitle = screen.getByText(/The most amazing product list application/);

		expect(mainTitle).toBeInTheDocument();
	});
	// This one should go into <ProductList /> component, it would do for now as a reference
	it('should render the a test product', async () => {
		const screen = renderWithProviders(<App />);

		const productName = screen.getByText(/test product/);
		const productPrice = screen.getByText(/99.99/);
		const productCategory = screen.getByText(/test category/);

		expect(productName).toBeInTheDocument();
		expect(productPrice).toBeInTheDocument();
		expect(productCategory).toBeInTheDocument();
		await waitFor(() => {
			expect(screen.queryByText(/Loading .../)).not.toBeInTheDocument();
		  }, { timeout: MOCK_REQUEST_DEFAULT_DELAY + 100 });
		await waitFor(() => {
			expect(screen.queryByText(/Hello Mocked World!/)).toBeInTheDocument();
		  });
	});
});