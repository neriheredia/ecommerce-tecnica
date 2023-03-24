export interface ProductWithId {
  color: string;
  colorId: string;
  id: number;
  images?: ProductWithId[];
  name: string;
  price: number;
  ref: string;
  src: string;
}
