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
        props.border || "none"};
    border-radius: none;
    text-align: center;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    font-size: ${props => props.fontsize || "1rem"};
    cursor: pointer;
    width: ${props => props.btnWidth};
    svg {
        fill: ${props => props.iconColor};
    }
`;

const Button = ({ lefticon, rightIcon, textcolor, fontsize, bg, border, margin, padding, children, className, onClick, btnWidth}) => {
  return (
    <Container className={` ${className}`} btnWidth={btnWidth} bg={bg} textcolor={textcolor} border={border} onClick={onClick} margin={margin} padding={padding} fontsize={fontsize}>
      {lefticon && lefticon}
      {children}
      {rightIcon && rightIcon}
    </Container>
  );
};

export default Button;