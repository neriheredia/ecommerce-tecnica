export interface ProductCardProps {
  images?: { name: string; thumbnail: string }[];
  isBtn?: boolean;
  lineBottom: boolean;
  onClick?: () => void;
  price: number;
  src: string;
  title: string;
}
