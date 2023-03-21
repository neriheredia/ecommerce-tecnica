import React from 'react';
import { FlexDiv } from '@/style';
import { Banners, CompnayInfo, InfoBox, NavBar } from '@/components';
import { TEXT } from '@/constants';

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
      <CompnayInfo />
    </FlexDiv>
  );
};

export default Product;
