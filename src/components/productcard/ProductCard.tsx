import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { FlexDiv, Typography } from '@/style';
import { ImageWithSizes } from '@/components';
import { ProductCardProps } from '@/interface';
import { toCapitalize } from '@/utilities';

interface ProductCardContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $borderBottom: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  images,
  isBtn,
  lineBottom,
  onClick,
  price,
  src,
  title,
}: ProductCardProps) => {
  return (
    <StyledProductCardContainer
      alignItems="center"
      $borderBottom={lineBottom}
      flexDirection="column"
      justifyContent="center"
    >
      <ImageWithSizes height="200px" src={src} width="250px" />
      <StyledContentImages>
        {images &&
          images.map(({ name, thumbnail }) => (
            <ImageWithSizes height="40px" key={name} src={thumbnail} width="40px" />
          ))}
      </StyledContentImages>
      <StyledName
        color="#1e1e1e"
        fontFamily="sans-serif"
        fontSize="14px"
        fontWeight={600}
        text={toCapitalize(title)}
      />
      <StyledPrice color="#734656" fontWeight={500} fontSize="20px">
        ${price}
      </StyledPrice>
      {isBtn && <StyledButton onClick={onClick}>AGREGAR AL CARRITO</StyledButton>}
    </StyledProductCardContainer>
  );
};

const StyledButton = styled.button`
  background-color: #734656;
  border: 1px solid #734656;
  color: #ffffff;
  cursor: pointer;
  padding: 12px;
  width: 100%;
`;

const StyledProductCardContainer = styled(FlexDiv)<ProductCardContainerProps>`
  border-bottom: ${({ $borderBottom }) => $borderBottom && '1px solid #000000'};
  cursor: default;
  padding: 12px 0px;
  position: relative;
  max-width: 300px;
`;

const StyledContentImages = styled(FlexDiv)`
  width: 100%;
`;

const StyledName = styled(Typography)`
  cursor: default;
  padding: 12px 0px;
`;

const StyledPrice = styled(Typography)`
  cursor: default;
  padding: 20px 0px;
  letter-spacing: 1px;
`;

export default ProductCard;
