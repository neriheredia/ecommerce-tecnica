import React from 'react';
import styled from 'styled-components';

import { ImageWithSizes, LinkList } from '@/components';
import { TEXT } from '@/constants';
import { toCapitalize } from '@/utilities';
import { FlexDiv } from '@/style';

import FooterImg from '@/assets/footer.png';

const { CUSTOMER_SERVICE, MY_ACCOUNT, NEWSLETTER, RESOURCES } = TEXT;

const Footer = () => {
  return (
    <FlexDiv flexDirection="column">
      <StyledContent alignItems="center" justifyContent="space-between">
        <LinkList
          linkColor="#a2a5a8"
          linkUpper
          linkSize="10px"
          routes={CUSTOMER_SERVICE.routes}
          text={CUSTOMER_SERVICE.title}
          textSize="14px"
        />
        <LinkList
          linkColor="#a2a5a8"
          linkUpper
          linkSize="10px"
          routes={MY_ACCOUNT.routes}
          text={MY_ACCOUNT.title}
          textSize="14px"
        />
        <LinkList
          linkColor="#a2a5a8"
          linkUpper
          linkSize="10px"
          routes={RESOURCES.routes}
          text={RESOURCES.title}
          textSize="14px"
        />
        <LinkList
          linkColor="#414141"
          linkUpper={false}
          linkSize="10px"
          newsletter
          newsletterText={toCapitalize(NEWSLETTER.subtitle)}
          text={RESOURCES.title}
          textSize="14px"
        />
      </StyledContent>
      <FlexDiv alignItems="center" justifyContent="center">
        <ImageWithSizes height="80px" src={FooterImg} width="80%" />
      </FlexDiv>
    </FlexDiv>
  );
};

const StyledContent = styled(FlexDiv)`
  border-bottom: 1px solid #87898c;
  flex: 1;
  padding: 20px 50px;
  width: 100%;
`;

export default Footer;
