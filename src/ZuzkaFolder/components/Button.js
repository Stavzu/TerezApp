import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.colorBackground};
  border: ${(props) => props.colorBackground};
  border-radius: 5px;
  border: red;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const Button = ({ children, onClick, color, colorBackground }) => {
  return (
    <StyledButton
      color={color}
      colorBackground={colorBackground}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
