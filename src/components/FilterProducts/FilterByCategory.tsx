import type { Category } from '../../types/Product';
import { productsCategories } from '../../constants/app';
import { updateSelectedCategory } from '../../store/slices/filterSlice';
import { type FunctionComponent, type ReactElement, useCallback, useId } from 'react';
import { styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';

const TypographyWithPaddingRight = styled(Typography)`
	padding-right: 1rem;
` as typeof Typography;

const CategoryToggleButton = styled(ToggleButton)`
	&.Mui-selected {
		background-color: ${({ theme }): string => theme.palette.primary.dark};
		color: ${({ theme }): string => theme.palette.primary.contrastText};
		:hover {
			background-color: ${({ theme }): string => theme.palette.secondary.dark};
		color: ${({ theme }): string => theme.palette.secondary.contrastText};
		}
	}
	&.MuiToggleButton-root {
		${({ theme }): string => theme.breakpoints.down('sm')} {
			line-height: 1.25;
		}
  	}
`;

const CategorySelectionGroup = styled(ToggleButtonGroup)`
	flex-wrap: wrap;
`;

const FilterByCategory: FunctionComponent = ():ReactElement => {
	const dispatch = useAppDispatch();
	const selectedCategory = useAppSelector(state => state.filterSlice.selectedCategory);
	const categoryId = useId();

	const handleSelectCategory = useCallback((_event: React.MouseEvent<HTMLElement>, value: Category) => {
		dispatch(updateSelectedCategory(value));
	}, [ dispatch ]);

	return (
		<>
			<TypographyWithPaddingRight component="span">Filter by Category</TypographyWithPaddingRight>
			<CategorySelectionGroup
				aria-label="category-selection-group"
				exclusive
				onChange={ handleSelectCategory }
				value={ selectedCategory }
			>
				{ productsCategories.map(category => (
					<CategoryToggleButton
						aria-label={ category }
						key={ categoryId }
						value={ category }
					>
						{ category }
					</CategoryToggleButton>
				)) }
			</CategorySelectionGroup>
		</>
	);
};

export { FilterByCategory };