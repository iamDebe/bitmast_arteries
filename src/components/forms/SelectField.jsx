import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
  margin:  ${props=> props.margin || ""};

  label {
    font-size: 12px;
    line-height: 15px;
    color: var(--grey-400);
  }
  select {
    background: var(--grey-50);
    color: var(--grey-300);
    font-family: inherit;
    font-size: 12px;
    padding: ${props=> props.padding || "0.5rem 2rem 0.5rem 1rem"};
    margin:  ${props=> props.margin || ""};

    border: 0.5px solid var(--grey-lighter);
    border-radius: 2px;
    width: inherit;
    outline: none;
    cursor: pointer;
    &::placeholder {
      font-family: inherit;
      color: var(--grey-300);
    }
    &:focus {
      background: var(--grey-100);
      border: 1px solid var(--grey-lighter);
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

const SelectField = ({ margin, padding, label, ...props }) => {
  return (
    <Wrapper margin={margin} padding={padding}>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select className="text-input" {...props} margin={margin} padding={padding}/>
    </Wrapper>
  );
};

export default SelectField;
