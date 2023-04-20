import React from "react";
import styled from "styled-components";

export const selectFieldStyles = `
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.75rem;
  position: relative;
  margin-bottom: var(--selectfield-margin-bottom);
  width: var(--selectfield-width);
  label {
    color: var(--grey-400);
  }
  select {
    background: var(--grey-50);
    color: var(--grey-300);
    font-family: inherit;
    font-size: 12px;
    padding: 0.5rem 2rem 0.5rem 1rem;
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

const SelectField = ({ label, width, padding, marginbottom, className, ...props }) => {
  const customStyles = `
    --selectfield-margin-bottom: ${marginbottom || "1.75rem"};
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
