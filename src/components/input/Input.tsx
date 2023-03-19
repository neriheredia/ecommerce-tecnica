import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  getValue?: (value: string) => void;
  placeholder: string;
  value?: string;
}

interface InputProps {
  className?: string;
}

const Input: FC<Props & InputProps> = ({ className, onChange, getValue, placeholder, value }) => {
  const [searchValue, setSearchValue] = useState(value || '');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    if (getValue) {
      getValue(e.target.value);
    }
  };

  return (
    <InputContainer className={className}>
      <StyledInput
        className={className}
        onChange={onChange || handleSearch}
        placeholder={placeholder}
        type="text"
        value={searchValue}
      />
      <IconContainer>
        <FaChevronRight />
      </IconContainer>
    </InputContainer>
  );
};

Input.defaultProps = {
  className: undefined,
  onChange: undefined,
  getValue: undefined,
  value: undefined,
};

const IconContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #87898c;
`;

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: calc(100% - 45px);
  border: 1px solid #87898c;
  padding: 15px;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(135, 137, 140, 0.3);
  }
`;

export default Input;
