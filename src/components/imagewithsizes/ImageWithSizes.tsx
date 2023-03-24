import React, { FC } from 'react';
import styled from 'styled-components';
import { ImageProps } from '@/interface';

const ImageWithSizes: FC<ImageProps> = ({ alt, height, onClick, src, width }: ImageProps) => {
  return (
    <StyleImage alt={alt || 'imagen'} height={height} onClick={onClick} src={src} width={width} />
  );
};

const StyleImage = styled.img`
  height: ${({ height }) => height || '25px'};
  width: ${({ width }) => width || '25px'};
`;

export default ImageWithSizes;
