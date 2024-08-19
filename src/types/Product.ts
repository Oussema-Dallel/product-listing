type Category = 'Category A' | 'Category B' | 'Category C'

// TODO: add ProductSchema for runtime validation with zod
interface Product {
    category: Category;
    id: number;
    name: string;
    price: number
}

export type { Product, Category };