import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../div';
import { toUpperCaseString } from '@/utilities';

interface TypographyProps {
  color?: string;
  children?: ReactNode;
  className?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  upperCase?: boolean;
  text?: string;
}

interface StyledTypographyProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Typography: FC<TypographyProps> = ({
  color,
  children,
  className,
  fontFamily,
  fontSize,
  fontWeight,
  upperCase,
  text,
}: TypographyProps) => {
  if (text) {
    return (
      <StyledTypography
        color={color}
        className={className}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {upperCase ? toUpperCaseString(text) : text}
      </StyledTypography>
    );
  }
  return (
    <StyledTypography
      color={color}
      className={className}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  color: undefined,
  children: undefined,
  className: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontWeight: undefined,
  upperCase: undefined,
  text: undefined,
};

const StyledTypography = styled(FlexDiv)<StyledTypographyProps>`
  color: ${({ color }) => color ?? 'black'};
  font-family: ${({ fontFamily }) => fontFamily || 'Montserrat - regular'};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
`;

export default Typography;
