import { MOCK_REQUEST_DEFAULT_DELAY } from './constants';
import type { Product } from '../types/Product';
import type { DefaultBodyType, HttpHandler, PathParams } from 'msw';
import { delay, http, HttpResponse } from 'msw';

// the initial data to be fetched by the client supposedly stored in a database
const data = {
	products: [
		{
			'id': 1,
			'name': 'Product 1',
			'category': 'Category A',
			'price': 29.99,
		},
		{
			'id': 2,
			'name': 'Product 2',
			'category': 'Category A',
			'price': 49.99,
		},
		{
			'id': 3,
			'name': 'Product 3',
			'category': 'Category B',
			'price': 29.99,
		},
		{
			'id': 4,
			'name': 'Product 4',
			'category': 'Category B',
			'price': 49.99,
		},
		{
			'id': 5,
			'name': 'Product 5',
			'category': 'Category A',
			'price': 59.99,
		},
		{
			'id': 6,
			'name': 'Product 6',
			'category': 'Category B',
			'price': 69.99,
		},
		{
			'id': 7,
			'name': 'Product 7',
			'category': 'Category A',
			'price': 89.99,
		},
	] as Product[],
};

const baseUrl = import.meta.env.VITE_BASE_URL as string;

const handlers: HttpHandler[] =
	[
		http.get<PathParams, DefaultBodyType, { message: string }>(`${baseUrl}/test`, async () => {
			// simulate loading
			await delay(MOCK_REQUEST_DEFAULT_DELAY);

			return HttpResponse.json({ message: 'Hello Mocked World!' });
		}),

		http.get<PathParams, DefaultBodyType, Product[]>(`${baseUrl}/product-listing`, async () => {
			await delay(MOCK_REQUEST_DEFAULT_DELAY);

			return HttpResponse.json([ ...data.products ]);
		}),
	];

export { handlers };