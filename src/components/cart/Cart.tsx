import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa';

import { FlexDiv, Typography } from '@/style';

const Cart: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <FlexDiv alignItems="center" justifyContent="center">
      <FaLock color="#87898c" size="10px" />
      <StyledCart color="#87898c" fontFamily="Futura" fontSize="12px" text="CARRITO" />
      <StyledCount color="#87898c" fontFamily="Futura" fontSize="12px">
        {count}
      </StyledCount>
    </FlexDiv>
  );
};

const StyledCart = styled(Typography)`
  font-weight: 500;
  margin-left: 10px;
`;

const StyledCount = styled(Typography)`
  margin-left: 5px;
`;

export default Cart;
