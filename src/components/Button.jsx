import React from "react";
import styled from "styled-components";

const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: ${(props) =>
      props.padding ? `${props.padding}` : "0.625rem"};
    margin:${(props)=> props.margin};
    background: ${props => props.bg};
    color: ${props => props.textcolor};
    border: ${(props) =>
        props.border ? `1px solid ${props.border}` : "none"};
    border-radius: none;
    text-align: center;
    outline: none;
    font-family: inherit;
    cursor: pointer;
    svg {
        fill: ${props => props.iconColor};
    }
`;

const Button = ({ leftIcon, rightIcon, textcolor, bg, border, margin, padding, children, className, onClick}) => {
  return (
    <Container className={` ${className}`} bg={bg} textcolor={textcolor} border={border} onClick={onClick} margin={margin} padding={padding}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </Container>
  );
};

export default Button;