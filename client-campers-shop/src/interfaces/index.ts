export type TProduct = {
  _id?: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratings: number;
  images: string[];
  deleteImages?: string;
};

export type TCartsProps = {
  _id?: string;
  product: TProduct;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratings: number;
  images: string[];
  quantity: number;
};

// Define the TProduct type
export type TProductCart = {
  price: number;
  stockQuantity: number; // Add the missing field
};

// Define the TCartsProps type

// Define the TCartItem type
