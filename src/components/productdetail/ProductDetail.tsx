import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { FlexDiv, Typography } from '@/style';
import { ImageWithSizes } from '../imagewithsizes';

import { CardButton } from '../cartbutton';
import { AppStore, ProductWithId } from '@/interface';
import { addedProductDetail } from '@/redux';
import { sizes } from '@/constants';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product: productDetail } = useSelector((state: AppStore) => state.detail);
  const { products } = useSelector((state: AppStore) => state.products);

  useEffect(() => {
    const productWithoutColorId = products.find(
      (product: ProductWithId) => product.color === 'azul' && product.colorId === ''
    );
    if (productDetail?.id === 0 && productWithoutColorId) {
      dispatch(addedProductDetail(productWithoutColorId));
    }
  }, [productDetail, products, dispatch]);

  return (
    <StyledProductDetailContainer>
      <StyledContent alignItems="center" flex={2} flexDirection="column" justifyContent="center">
        <ImageWithSizes height="600px" src={productDetail.src} width="100%" />
        <StyleHr />
        <StyledContentImages>
          {productDetail.images &&
            productDetail.images
              .slice(-5)
              .map(({ id, src: thumbnail }: ProductWithId) => (
                <ImageWithSizes height="90px" key={id} src={thumbnail} width="20%" />
              ))}
        </StyledContentImages>
      </StyledContent>
      <StyledContentRight alignItems="flex-start" flex={1} flexDirection="column">
        <Typography
          color="#6d6765"
          fontSize="20px"
          fontWeight={600}
          fontFamily="Times New Roman"
          text={productDetail.name}
          upperCase
        />
        <StyledPrice color="#734656" fontWeight={600} fontSize="25px">
          ${productDetail.price}.00
        </StyledPrice>
        <Typography color="#adadad" text={`Cod. de producto ${productDetail.ref}`} />
        <StyledColor flexDirection="column">
          <Typography color="#adadad" fontSize="20px" text="color" upperCase />
          <StyledContentColor>
            <ImageWithSizes height="100%" src={productDetail.src} width="100%" />
          </StyledContentColor>
        </StyledColor>
        <FlexDiv flexDirection="column">
          <StyledSizeText color="#adadad" fontSize="20px" text="talla" upperCase />
          <StyledSize>
            {sizes.map(({ key, size }) => (
              <StyleSquare alignItems="center" key={key} justifyContent="center">
                {size}
              </StyleSquare>
            ))}
          </StyledSize>
        </FlexDiv>
        <Link className="link" to="/">
          <StyledGuide color="#adadad" fontSize="20px" text="guia de tallas" upperCase />
        </Link>
        <StyledContentButton alignItems="center">
          <StyledButton product={productDetail} />
          <FaHeart color="#dddddd" size={30} />
        </StyledContentButton>
      </StyledContentRight>
    </StyledProductDetailContainer>
  );
};

const StyledButton = styled(CardButton)`
  margin-right: 100px;
  width: 50%;
`;

const StyledContentButton = styled(FlexDiv)`
  width: 100%;
`;

const StyledContent = styled(FlexDiv)`
  overflow: hidden;
  position: relative;
`;

const StyledContentColor = styled(FlexDiv)`
  border: 1px solid #d7d4d4;
  margin-top: 5px;
  max-height: 50px;
  max-width: 50px;
  position: relative;
`;

const StyledColor = styled(FlexDiv)`
  padding: 30px 0px;
  position: relative;
`;

const StyledContentRight = styled(FlexDiv)`
  padding: 25px 50px;
  position: relative;
`;

const StyleHr = styled.hr`
  border-top: none;
  border-color: #cbcbcb;
  width: 100%;
`;

const StyledProductDetailContainer = styled(FlexDiv)`
  padding: 20px 50px;
`;

const StyledContentImages = styled(FlexDiv)`
  gap: 15px;
  object-fit: cover;
  overflow-x: auto;
  margin-top: 10px;
  width: 100%;
`;

const StyledGuide = styled(Typography)`
  padding: 30px 0px;
  text-decoration: underline;
`;

const StyledPrice = styled(Typography)`
  cursor: default;
  letter-spacing: 1px;
`;

const StyledSize = styled(FlexDiv)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`;

const StyledSizeText = styled(Typography)`
  padding: 10px 0px;
`;

const StyleSquare = styled(FlexDiv)`
  background-color: #d7d4d4;
  font-size: 40px;
  height: 80px;
  width: 80px;
`;

export default ProductDetail;
