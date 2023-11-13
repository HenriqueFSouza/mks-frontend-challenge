export interface ProductType {
  id: number;
  name: string;
  brand: string;
  description?: string;
  quantity: number;
  photo: string;
  price: string;
  updatedAt: string;
  createdAt: string;
}

export interface ProductsResponseType {
  products: ProductType[];
}