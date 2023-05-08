import React from "react";
import styled from "styled-components";

export const selectFieldStyles = `
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  margin-bottom: var(--selectfield-margin-bottom);
  margin-top: var(--selectfield-margin-top);
  width: var(--selectfield-width);
  label {
    font-size: 1rem;
    line-height: 15px;
    color: black;
  }
  select {
    background: var(--grey-50);
    color: black;
    font-family: inherit;
    font-size: .8rem;
    padding: .6rem 0rem 0.6rem .5rem;
    border: 0.5px solid var(--grey-light);
    border-radius: 2px;
    width: inherit;
    outline: none;
    &::placeholder {
      font-family: inherit;
      color: var(--grey-300);
    }
    &:focus {
      background: var(--grey-100);
      color: var(--grey-400);
    }
  }
  .input-icon {
    position: absolute;
    &.icon {
      bottom: 0.5rem;
      right: 1rem;
    }
  }
  .error {
    background-color: var(--red-200);
  }
`;

const SelectField = ({ label, width, padding, marginbottom, margintop, className, ...props }) => {
  const customStyles = `
    --selectfield-margin-bottom: ${marginbottom || "1.75rem"};
    --selectfield-margin-top: ${margintop || "none"};
    --selectfield-width: ${width || "100%"};
    --selectfield-padding: ${padding || "0.5rem 2rem 0.5rem 1rem"};
  `;

  const Wrapper = styled("div")`
    ${selectFieldStyles}
    ${customStyles}
  `;

  return (
    <Wrapper className={className}>
      <label className="type-body3" htmlFor={props.id || props.name}>{label}</label>
      <select className="text-input" {...props} />
    </Wrapper>
  );
};

export default SelectField;
