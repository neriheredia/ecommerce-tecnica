import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexDiv } from '@/style';
import { BannerProps } from '@/interface';
import { toUpperCaseString } from '@/utilities';

interface BannerContainerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  backgroundColor?: string;
  height?: string;
  textsize?: string;
  width?: string;
}

const Banners: FC<BannerProps> = ({
  backgroundColor,
  className,
  color,
  height,
  text,
  texts,
  textsize,
  width,
}: BannerProps) => {
  if (texts?.length) {
    return (
      <>
        {texts.map(({ link, textLink }) => (
          <BannerContainer
            alignItems="center"
            backgroundColor={backgroundColor}
            className={className}
            color={color}
            height={height}
            justifyContent="center"
            key={textLink}
            textsize={textsize}
            width={width}
          >
            <Link className="link" to={`/${link}`}>
              {toUpperCaseString(textLink)}
            </Link>
          </BannerContainer>
        ))}
      </>
    );
  }

  return (
    <BannerContainer
      alignItems="center"
      backgroundColor={backgroundColor}
      className={className}
      color={color}
      height={height}
      justifyContent="center"
      textsize={textsize}
      width={width}
    >
      <Link className="link" to="/">
        {text && toUpperCaseString(text)}
      </Link>
    </BannerContainer>
  );
};

const BannerContainer = styled(FlexDiv)<BannerContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff9f9'};
  color: ${({ color }) => color || '#000000'};
  font-family: 'Montserrat - regular';
  font-size: ${({ textsize }) => textsize || '16px'};
  height: ${({ height }) => height || '50px'};
  letter-spacing: 2px;
  width: ${({ width }) => width || '100%'};
`;

export default Banners;
