import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { FlexDiv, Typography } from '@/style';
import { CardButton, ImageWithSizes } from '@/components';
import { ProductCardProps, ProductWithId } from '@/interface';
import { toCapitalize } from '@/utilities';

interface ProductCardContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $borderBottom: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  images,
  isBtn,
  lineBottom,
  onDetail,
  price,
  product,
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
      <ImageWithSizes height="200px" onClick={onDetail} src={src} width="250px" />
      <StyledContentImages>
        {images &&
          images
            .slice(-3)
            .map(({ name, src: subSrc }: ProductWithId, index) => (
              <ImageWithSizes
                height="40px"
                key={name + index + 1}
                src={`/src/assets/${subSrc}`}
                width="40px"
              />
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
        ${price}.00
      </StyledPrice>
      {isBtn && <CardButton product={product} />}
    </StyledProductCardContainer>
  );
};

const StyledProductCardContainer = styled(FlexDiv)<ProductCardContainerProps>`
  border-bottom: ${({ $borderBottom }) => $borderBottom && '1px solid #cbcbcb'};
  cursor: pointer;
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
