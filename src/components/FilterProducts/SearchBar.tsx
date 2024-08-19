import { updateSearchQuery } from '../../store/slices/filterSlice';
import { useCallback } from 'react';
import type { ChangeEvent, FunctionComponent, ReactElement } from 'react';
import { Grid, InputBase, styled, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';

const CustomInput = styled(InputBase)`
    display: inline-flex;
    align-items: center;
    border: 1px solid silver;
    border-radius: 0.3em;
    padding-left: 0.5rem;
    padding-right: 0%.3rem;
    flex-grow: 1;
    max-width: 500;
    &:hover,
    &:focus {
        border-color: ${({ theme }):string => theme.palette.primary.dark};
    }
`;

const CustomLabel = styled(Typography)`
    padding-right: 1rem;
` as typeof Typography;

const SearchBar: FunctionComponent = (): ReactElement => {
	const searchQuery = useAppSelector(state => state.filterSlice.searchQuery);
	const dispatch = useAppDispatch();

	const handleFilterByText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateSearchQuery(event.target.value));
	}, [ dispatch ]);

	return (
		<Grid
			alignItems="center"
			container
		>
			<CustomLabel
				aria-label='filter-by-name'
				component="label"
				id='search-label'
			>
				Filter by name
			</CustomLabel>
			<CustomInput
				aria-label='search'
				aria-labelledby='search-label'
				name='search'
				onChange={ handleFilterByText }
				placeholder='Start typing to filter by name'
				value={ searchQuery }
			/>
		</Grid>
	);
};

export { SearchBar };