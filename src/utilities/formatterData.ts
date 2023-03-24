import { ProductWithId } from '@/interface';
import {
  clearNumberInString,
  clearStringInNumber,
  recoverColor,
  recoverName,
} from './stringFormatter';
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import img4 from '@/assets/4.jpg';
import img5 from '@/assets/5.jpg';
import img6 from '@/assets/6.jpg';
import img7 from '@/assets/7.jpg';
import img8 from '@/assets/8.jpg';
import img9 from '@/assets/9.jpg';
import img10 from '@/assets/10.jpg';
import img11 from '@/assets/11.jpg';
import img12 from '@/assets/12.jpg';
import img13 from '@/assets/13.jpg';
import img14 from '@/assets/14.jpg';
import img15 from '@/assets/15.jpg';
import img16 from '@/assets/16.jpg';
import img17 from '@/assets/17.jpg';
import img18 from '@/assets/18.jpg';
import img19 from '@/assets/19.jpg';
import img20 from '@/assets/20.jpg';

interface ProductoProp {
  nombre: string;
  precio: number;
  referencia: string;
  foto: string;
}

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const getImageIndex = (imageName: string): number => {
  const index = imageName.split('.')[0];
  return parseInt(index, 10) - 1;
};

export const formatterData = (arr: ProductoProp[]) => {
  const formatter = arr.map(({ nombre, precio, referencia, foto }, index) => {
    const nameProduct = recoverName(nombre);
    const colorProduct = recoverColor(nombre);
    const color = clearNumberInString(colorProduct);
    const colorId = clearStringInNumber(colorProduct);
    const imageIndex = getImageIndex(foto);
    return {
      id: index + 1,
      name: nameProduct,
      color,
      colorId,
      price: precio,
      ref: referencia,
      src: images[imageIndex],
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
