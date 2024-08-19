import { styled } from '@mui/material';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

const AppContainer = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  // TODO: make a getter utility function for the theme.
  gap: ${({ theme }): string => theme.spacing(2)};

  ${({ theme }): string => theme.breakpoints.up('md')} {
    padding: 4rem;
  }
`;

const Layout: FunctionComponent<PropsWithChildren> = ({ children }): ReactElement => {
	return (
		<AppContainer>
			{ children }
		</AppContainer>
	);
};

export { Layout };