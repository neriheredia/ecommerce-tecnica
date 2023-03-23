import React from 'react';
import styled from 'styled-components';
import { FlexDiv, Typography } from '@/style';
import { Banners, CompnayInfo, Footer, InfoBox, NavBar, ProductCard } from '@/components';
import { TEXT } from '@/constants';
import zapa from '@/assets/1.jpg';

const { DETAIL_PRODUCT, TECNOLOGIES } = TEXT;

const Product = () => {
  return (
    <FlexDiv flexDirection="column">
      <Banners
        backgroundColor="#734656"
        color="#f6f7f4"
        text="hot sale -30% en sandalias"
        textsize="20px"
      />
      <NavBar />
      <InfoBox description={DETAIL_PRODUCT.description} title={DETAIL_PRODUCT.title} upperTitle />
      <InfoBox description={TECNOLOGIES.description} title={TECNOLOGIES.title} upperTitle />
      <StyledText>COMPLETA TU LOOK</StyledText>
      <StyledSlider alignItems="center" justifyContent="space-between">
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          isBtn
          lineBottom={false}
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          isBtn
          lineBottom={false}
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          isBtn
          lineBottom={false}
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          isBtn
          lineBottom={false}
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
      </StyledSlider>
      <InfoBox title="productos recomendados" upperTitle />
      <StyledSlider alignItems="center" justifyContent="space-between">
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          lineBottom
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          lineBottom
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          lineBottom
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
        <ProductCard
          images={[{ name: 'newimage', thumbnail: zapa }]}
          lineBottom
          price={5000}
          src={zapa}
          title="zapatillas de el carlos"
        />
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
