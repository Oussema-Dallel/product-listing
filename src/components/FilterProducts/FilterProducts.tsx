import { FilterByCategory } from './FilterByCategory';
import { SearchBar } from './SearchBar';
import { Divider, Grid, styled } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';

const FilterProductsContainer = styled(Grid)`
    background-color: ${({ theme }):string => theme.palette.background.default};
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }): string => theme.shadows[1]};
    margin-left: 0;
    width: 100%;
    max-width: fit-content;
`;

const FilterProducts: FunctionComponent = ():ReactElement => {
	return (
		<FilterProductsContainer
			alignContent="center"
			container
			flexDirection="column"
			spacing={ 2 }
		>
			<Grid item>
				<SearchBar />
			</Grid>
			<Grid item>
				<Divider />
			</Grid>
			<Grid item>
				<FilterByCategory />
			</Grid>
		</FilterProductsContainer>
	);
};

export { FilterProducts };