# mocks

This directory contains the mocking functionality of the application. It contains the mocks for the api endpoints mainly.

## mocked endpoints

- `/test` - (get) This endpoint is used as a test endpoint.
- `/products-listing` - (get) This endpoint is used to get the list of the products. It returns array of [Product](/src/types/Product.ts). The products are stored in memory for the purpose of this demo.

## Things to consider

The `server.ts` file is needed for the testing to work and the `browser.ts` file is needed for the service worker to be spawned in the browser.
