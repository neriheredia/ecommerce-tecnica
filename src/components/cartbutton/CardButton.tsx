import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@/redux';
import { ProductWithId } from '@/interface';

interface CardButtonProp {
  className?: string;
  onClick?: () => void;
  product: ProductWithId;
}

const CardButton = ({ className, product, onClick }: CardButtonProp) => {
  const dispatch = useDispatch();

  const handleClickAddedToCart = () => {
    dispatch(addProductToCart(product));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (onClick) {
    return (
      <StyledButton className={className} onClick={onClick}>
        AGREGAR AL CARRITO
      </StyledButton>
    );
  }

  return (
    <StyledButton className={className} onClick={handleClickAddedToCart}>
      AGREGAR AL CARRITO
    </StyledButton>
  );
};

CardButton.defaultProps = {
  className: '',
  onClick: null,
};

const StyledButton = styled.button`
  background-color: #734656;
  border: 1px solid #734656;
  color: #ffffff;
  cursor: pointer;
  padding: 12px;
  width: 100%;
`;

export default CardButton;
