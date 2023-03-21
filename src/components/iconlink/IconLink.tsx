import { FC } from 'react';
import styled from 'styled-components';

import { IconLinkProps } from '@/interface';

const IconLink: FC<IconLinkProps> = ({ href, icon }: IconLinkProps) => {
  return (
    <StyleLink href={href} rel="noopener" target="_blank">
      {icon}
    </StyleLink>
  );
};

const StyleLink = styled.a`
  color: inherit;
  background-color: inherit;
  text-decoration: none;
`;

export default IconLink;
