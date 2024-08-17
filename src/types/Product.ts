// TODO: add ProductSchema for runtime validation with zod

interface Product {
    category: string;
    id: number;
    name: string;
    price: number
}

export type { Product };