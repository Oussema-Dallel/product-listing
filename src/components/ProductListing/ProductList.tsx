import { isNil } from '../../utils/IsNil';
import { ProductItem } from './ProductItem';
import { useGetProductListingQuery } from '../../store/slices/productsApiSlice';
import type { FunctionComponent, ReactElement } from 'react';
import { List, Typography } from '@mui/material';

const ProductList: FunctionComponent = (): ReactElement => {
	const { isError, isSuccess, isLoading, data: products, error } = useGetProductListingQuery();

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

	return (
		<List>{
			products.map(({ id, name, category, price }) => (
				<ProductItem
					category={ category }
					key={ id }
					name={ name }
					price={ price }
				/>
			))
		}
		</List>
	);
};

export { ProductList };