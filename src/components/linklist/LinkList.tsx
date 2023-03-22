import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FlexDiv, Typography } from '@/style';
import { LinkListProps } from '@/interface';
import { Input } from '@/components';

const LinkList = ({
  linkColor,
  linkSize,
  linkUpper,
  newsletter,
  newsletterText,
  routes,
  text,
  textColor,
  textSize,
}: LinkListProps) => {
  if (newsletter) {
    return (
      <FlexDiv justifyContent="start" flexDirection="column">
        <StyledTypography
          color={textColor}
          fontSize={textSize}
          fontWeight={600}
          text={text}
          upperCase
        />
        <StyledTypographyLink
          color={linkColor}
          fontSize={linkSize}
          fontWeight={400}
          text={newsletterText}
          upperCase={linkUpper}
        />
        <StyledInput placeholder="E-MAIL" />
      </FlexDiv>
    );
  }

  return (
    <FlexDiv justifyContent="start" flexDirection="column">
      <StyledTypography
        color={textColor}
        fontSize={textSize}
        fontWeight={600}
        text={text}
        upperCase
      />
      {routes &&
        routes.map(({ name, routeLink }) => (
          <Link className="link" key={name} to={routeLink}>
            <StyledTypographyLink
              color={linkColor}
              fontSize={linkSize}
              fontWeight={400}
              text={name}
              upperCase={linkUpper}
            />
          </Link>
        ))}
    </FlexDiv>
  );
};

const StyledInput = styled(Input)`
  width: 250px;
`;

const StyledTypography = styled(Typography)`
  padding-bottom: 12px;
`;

const StyledTypographyLink = styled(Typography)`
  padding-bottom: 6px;
`;

export default LinkList;
