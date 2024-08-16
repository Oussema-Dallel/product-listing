import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

// We disable the no-non-null-assertion rule in this case as we are absolutely sure that we have a div with #root as id.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
