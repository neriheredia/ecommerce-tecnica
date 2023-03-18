import React from 'react';
import { FlexDiv } from '@/style';
import { Banners, NavBar } from '@/components';

const Home = () => {
  return (
    <FlexDiv flexDirection="column">
      <Banners
        backgroundColor="#734656"
        color="#f6f7f4"
        text="hot sale -30% en sandalias"
        textsize="20px"
      />
      <NavBar />
    </FlexDiv>
  );
};

export default Home;
