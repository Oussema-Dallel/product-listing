import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { enableMocking } from './mocks/enableMocking.ts';
import { StrictMode } from 'react';

// The usage of a top level await here is essential for the mocking to work as it needs to happen before
// the initialization of the react application.
try {
	await enableMocking();
} catch (ex) {
	console.error(ex);
} finally {
// We disable the no-non-null-assertion rule in this case as we are absolutely sure that we have a div with #root as id.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}