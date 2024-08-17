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

const handlers: HttpHandler[] =
	[
		http.get<PathParams, DefaultBodyType, { message: string }>('/test', async () => {
			// simulate loading
			await delay(10_000);

			return HttpResponse.json({ message: 'Hello Mocked World!' });
		}),

		http.get<PathParams, DefaultBodyType, Product[]>('/product-listing', async () => {
			await delay(3000);

			return HttpResponse.json([ ...data.products ]);
		}),
	];

export { handlers };