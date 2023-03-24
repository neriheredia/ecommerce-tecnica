import { ProductWithId } from './Product_interface';

export interface ProductCardProps {
  images?: ProductWithId[];
  isBtn?: boolean;
  lineBottom: boolean;
  onDetail?: () => void;
  price: number;
  product: ProductWithId;
  src: string;
  title: string;
}
