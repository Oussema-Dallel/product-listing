import { MOCK_REQUEST_DEFAULT_DELAY } from '../../mocks/constants';
import { ProductList } from './ProductList';
import { renderWithProviders, screen, waitFor } from '../../testUtils/testUtils';

describe('<ProductList />', () => {
	beforeEach(() => {
		renderWithProviders(<ProductList />);
	});

	it('should render loading indicator when initially mounted', () => {
		expect(screen.getByText(/Loading .../)).toBeInTheDocument();
	});

	it('should render the fetched products', async () => {
		await waitFor(() => {
			expect(screen.queryByText(/Loading .../)).not.toBeInTheDocument();
		  }, { timeout: MOCK_REQUEST_DEFAULT_DELAY + 100 });
		await waitFor(() => {
			const listOfProducts = screen.getAllByText(/Product/i);

			expect(listOfProducts.length).toBe(7);
		  });
	});
});