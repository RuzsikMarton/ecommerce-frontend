export interface Products {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes?: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsType = Products[];