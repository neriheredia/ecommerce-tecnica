import React, { FC } from 'react';
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
  textsize,
  width,
}: BannerProps) => {
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
      {toUpperCaseString(text)}
    </BannerContainer>
  );
};

const BannerContainer = styled(FlexDiv)<BannerContainerProps>`
  color: ${({ color }) => color || '#000000'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff9f9'};
  font-family: 'Montserrat - regular';
  font-size: ${({ textsize }) => textsize || '16px'};
  height: ${({ height }) => height || '50px'};
  letter-spacing: 2px;
  width: ${({ width }) => width || '100%'};
`;

export default Banners;
