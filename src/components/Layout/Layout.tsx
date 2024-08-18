import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }): ReactElement => {
	return (
		<main>
			{ children }
		</main>
	);
};

export { Layout };