import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Banners, Cart, ImageWithSizes, SearchInput } from '@/components';
import { FlexDiv, Typography } from '@/style';
import { toUpperCaseString } from '@/utilities';

import { myAccountLinks, routesLinks } from './constants';

import dog from '@/assets/hushpupies.png';

const NavBar: FC = () => {
  return (
    <NavBarContainer flexDirection="column">
      <StyledContent justifyContent="flex-end">
        <StyledBanner
          backgroundColor="#e8e8e8"
          color="#87898c"
          height="30px"
          texts={myAccountLinks}
          textsize="12px"
          width="none"
        />
      </StyledContent>
      <FlexDiv justifyContent="space-between">
        <StyledContentImg>
          <ImageWithSizes height="80px" src={dog} width="300px" />
        </StyledContentImg>
        <StyledContentInputAndText
          alignItems="end"
          flexDirection="column"
          justifyContent="space-between"
        >
          <StyledSearchInput placeholder="BUSCAR" />
          <Typography
            color="#e18b7d"
            upperCase
            text="envío gratis para pedidos superiores a $300.000"
          />
        </StyledContentInputAndText>
      </FlexDiv>
      <StyledContentRoutesAndCart justifyContent="space-between">
        <FlexDiv>
          {routesLinks.map(({ textLink }) => (
            <Link key={textLink} className="link" to="/">
              <StyledText key={textLink}>{toUpperCaseString(textLink)}</StyledText>
            </Link>
          ))}
        </FlexDiv>
        <FlexDiv>
          <Cart />
        </FlexDiv>
      </StyledContentRoutesAndCart>
    </NavBarContainer>
  );
};

const NavBarContainer = styled(FlexDiv)`
  border-bottom: 1px solid #87898c;
`;

const StyledBanner = styled(Banners)`
  margin-left: 15px;
  letter-spacing: 0;
`;

const StyledContent = styled(FlexDiv)`
  background-color: #e8e8e8;
  font-family: 'Montserrat - bold';
  font-weight: 700;
  padding-right: 50px;
`;

const StyledContentImg = styled(FlexDiv)`
  padding: 32px 50px 0px 50px;
`;

const StyledContentInputAndText = styled(FlexDiv)`
  padding: 12px 50px;
`;

const StyledContentRoutesAndCart = styled(FlexDiv)`
  padding: 12px 50px;
`;

const StyledSearchInput = styled(SearchInput)`
  width: 250px;
`;

const StyledText = styled.span`
  color: #87898c;
  font-family: 'Futura';
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  letter-spacing: 2px;
`;

export default NavBar;
