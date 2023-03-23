import React, { FC } from 'react';
import styled from 'styled-components';
import { InfoBoxProps } from '@/interface';
import { FlexDiv } from '@/style';
import { toUpperCaseString } from '@/utilities';

const InfoBox: FC<InfoBoxProps> = ({ description, title, upperDesc, upperTitle }: InfoBoxProps) => {
  return (
    <StyledContainerInfoBox flexDirection="column">
      <StyledTitle>{upperTitle ? toUpperCaseString(title) : title}</StyledTitle>
      <StyledHorizontalRule />
      {description && (
        <StyledDescription>
          {upperDesc ? toUpperCaseString(description) : description}
        </StyledDescription>
      )}
    </StyledContainerInfoBox>
  );
};

const StyledContainerInfoBox = styled(FlexDiv)`
  padding: 12px 50px;
`;

const StyledDescription = styled.p`
  color: #898990;
  font-family: sans-serif;
  font-size: 14px;
  padding-top: 12px;
  letter-spacing: 1px;
`;

const StyledHorizontalRule = styled.hr``;

const StyledTitle = styled.h3`
  color: #6d6765;
  font-family: 'Futura';
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 5px;
  letter-spacing: 1px;
`;

export default InfoBox;
