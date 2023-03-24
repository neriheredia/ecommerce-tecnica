import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FlexDiv } from '@/style';
import {
  Banners,
  CompnayInfo,
  Footer,
  InfoBox,
  NavBar,
  ProductCard,
  ProductDetail,
} from '@/components';
import { TEXT } from '@/constants';
import { AppStore, ProductWithId } from '@/interface';
import { addedProductDetail } from '@/redux';

const { DETAIL_PRODUCT, TECNOLOGIES } = TEXT;

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: AppStore) => state.products);

  const handleClickDetail = (product: ProductWithId) => {
    dispatch(addedProductDetail(product));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FlexDiv flexDirection="column">
      <Banners
        backgroundColor="#734656"
        color="#f6f7f4"
        text="hot sale -30% en sandalias"
        textsize="20px"
      />
      <NavBar />
      <ProductDetail />
      <InfoBox description={DETAIL_PRODUCT.description} title={DETAIL_PRODUCT.title} upperTitle />
      <InfoBox description={TECNOLOGIES.description} title={TECNOLOGIES.title} upperTitle />
      <StyledText>COMPLETA TU LOOK</StyledText>
      <StyledSlider alignItems="center" justifyContent="space-between">
        {products &&
          products
            .slice(-4)
            .map((product: ProductWithId) => (
              <ProductCard
                key={product.id}
                images={product?.images}
                isBtn
                lineBottom={false}
                onDetail={() => handleClickDetail(product)}
                price={product.price}
                src={`/src/assets/${product.src}`}
                title={product.name}
              />
            ))}
      </StyledSlider>
      <InfoBox title="productos recomendados" upperTitle />
      <StyledSlider alignItems="center" justifyContent="space-between">
        {products &&
          products
            .slice(0, 4)
            .map((product: ProductWithId) => (
              <ProductCard
                key={product.id}
                images={product?.images}
                lineBottom
                onDetail={() => handleClickDetail(product)}
                price={product.price}
                src={`/src/assets/${product.src}`}
                title={product.name}
              />
            ))}
      </StyledSlider>
      <CompnayInfo />
      <Footer />
    </FlexDiv>
  );
};

const StyledSlider = styled(FlexDiv)`
  padding: 10px 50px;
`;

const StyledText = styled(FlexDiv)`
  background-color: #e8e8e8;
  color: #383838;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 16px;
  margin: 14px 50px;
  padding: 6px;
  text-align: start;
`;

export default Product;
