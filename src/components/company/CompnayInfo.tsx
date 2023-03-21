import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';

import { FlexDiv, Typography } from '@/style';
import { IconLink } from '@/components';

const CompnayInfo = () => {
  return (
    <StyledContainerCompanyInfo alignItems="center" flexDirection="column" justifyContent="center">
      <StyledTypography color="#474747" fontSize="20px" text="@hushpuppiesco" upperCase />
      <StyleHr />
      <StyledContentIcons justifyContent="space-around">
        <IconLink href="/#" icon={<FaFacebookF color="#474747" size={12} />} />
        <IconLink href="/#" icon={<FaInstagramSquare color="#474747" size={12} />} />
      </StyledContentIcons>
    </StyledContainerCompanyInfo>
  );
};

const StyledContainerCompanyInfo = styled(FlexDiv)`
  background-color: #e8e8e8;
  width: 100%;
`;

const StyledContentIcons = styled(FlexDiv)`
  padding: 5px 0px 12px 0px;
  width: 40px;
`;

const StyleHr = styled.hr`
  border-top: none;
  border-color: #474747;
  width: 70px;
`;

const StyledTypography = styled(Typography)`
  padding: 12px 0px 8px 0px;
`;

export default CompnayInfo;
