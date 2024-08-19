import { isNil } from '../../utils/IsNil';
import { ProductItem } from './ProductItem';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import { useGetProductListingQuery } from '../../store/slices/productsApiSlice';
import type { FunctionComponent, ReactElement } from 'react';
import { List, styled, Typography } from '@mui/material';

const ProductListContainer = styled(List)`
    background-color: ${({ theme }): string => theme.palette.secondary.light};
    color: ${({ theme }): string => theme.palette.secondary.dark};
    border-radius: 1rem;
    box-shadow: ${({ theme }): string => theme.shadows[2]};
    width: 100%;
`;

const ProductList: FunctionComponent = (): ReactElement => {
	const { isError, isSuccess, isLoading, data: products, error } = useGetProductListingQuery();
	const filteredProducts = useFilteredProducts(products ?? []);

	if (isError) {
		// TODO: implement utility function and types for better error parsing and handling
		return <Typography component="p">{ JSON.stringify(error) }</Typography>;
	}

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	if (!isSuccess || isNil(products)) {
		return <div>Products were not found</div>;
	}

	if (filteredProducts.length === 0) {
		return <Typography>No matching product found. Please try a different combination</Typography>;
	}

	return (
		<ProductListContainer>
			{
				filteredProducts.map(({ id, name, category, price }) => (
					<ProductItem
						category={ category }
						key={ id }
						name={ name }
						price={ price }
					/>
				))
			}
		</ProductListContainer>
	);
};

export { ProductList };