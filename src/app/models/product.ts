export interface Product {
  _id: string;
  productName: string;
  shortDescription: string;
  description: string;
  price: number;
  discount: number;
  image: Array<string>;
  categoryId: string;
  isFeatured: boolean;
  IsNew: boolean;
}

export interface productDelete {
  message: string;
}
