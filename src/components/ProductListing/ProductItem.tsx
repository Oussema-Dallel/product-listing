import type { Product } from '../../types/Product';
import type { FunctionComponent, ReactElement } from 'react';
import { ListItem, ListItemText } from '@mui/material';

type ProductItemProps = Omit<Product, 'id'>;

const ProductItem: FunctionComponent<ProductItemProps> = ({
	name,
	category,
	price,
}):ReactElement => {
	return (
		<ListItem>
			<ListItemText
				primary={ name }
				secondary={ `Category: ${category} | Price: $${price}` }
			/>
		</ListItem>
	);
};

export { ProductItem };