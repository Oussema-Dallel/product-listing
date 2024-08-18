import type { Product } from '../types/Product';
import { BASE_URL, PRODUCT_LISTING_URL } from '../constants/app';
import type { DefaultBodyType, HttpHandler, PathParams } from 'msw';
import { delay, http, HttpResponse } from 'msw';
import { MOCK_REQUEST_DEFAULT_DELAY, mockedProducts } from './constants';

const handlers: HttpHandler[] =
	[
		http.get<PathParams, DefaultBodyType, { message: string }>(`${BASE_URL}/test`, async () => {
			// simulate loading
			await delay(MOCK_REQUEST_DEFAULT_DELAY);

			return HttpResponse.json({ message: 'Hello Mocked World!' });
		}),

		http.get<PathParams, DefaultBodyType, Product[]>(`${BASE_URL}/${PRODUCT_LISTING_URL}`, async () => {
			await delay(MOCK_REQUEST_DEFAULT_DELAY);

			return HttpResponse.json([ ...mockedProducts.products ]);
		}),
	];

export { handlers };