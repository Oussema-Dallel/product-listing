import App from './App';
import { renderWithProviders } from './utils/testUtils';

describe('<App />', () => {
	it('should render the main title', () => {
		const screen = renderWithProviders(<App />);

		const mainTitle = screen.getByText(/The most amazing product list application/);

		expect(mainTitle).toBeInTheDocument();
	});
});