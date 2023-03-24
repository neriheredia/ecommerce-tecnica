import { ProductWithId } from '@/interface';
import {
  clearNumberInString,
  clearStringInNumber,
  recoverColor,
  recoverName,
} from './stringFormatter';

interface ProductoProp {
  nombre: string;
  precio: number;
  referencia: string;
  foto: string;
}

export const formatterData = (arr: ProductoProp[]) => {
  const formatter = arr.map(({ nombre, precio, referencia, foto }, index) => {
    const nameProduct = recoverName(nombre);
    const colorProduct = recoverColor(nombre);
    const color = clearNumberInString(colorProduct);
    const colorId = clearStringInNumber(colorProduct);
    return {
      id: index + 1,
      name: nameProduct,
      color,
      colorId,
      price: precio,
      ref: referencia,
      src: foto,
    };
  });
  const aggregatedShoes = formatter.reduce((acc: ProductWithId[], current) => {
    const existingColor = acc.find(({ color }) => color === current.color);
    if (existingColor) {
      if (existingColor.images) {
        existingColor.images.push(current);
      } else {
        existingColor.images = [current];
      }
    } else {
      acc.push({
        ...current,
        images: [current],
      });
    }
    return acc;
  }, []);
  return aggregatedShoes;
};
