import styled from 'styled-components';

interface PropsFlexDiv {
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  flexWrap?: string;
}

export const FlexDiv = styled.div<PropsFlexDiv>`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;
