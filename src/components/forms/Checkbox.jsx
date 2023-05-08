import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.875rem;
  width: 100%;
    & input[type="checkbox"] {
      accent-color: var(--red-400);
      cursor: pointer;
    }
  & input[type="radio"] {
    accent-color: var(--red-400);
    cursor: pointer;
  }
  .label {
    color: rgba(10, 10, 10, 0.5);
    font-size: .8rem;
  }
  .error {
    background-color: var(--red-200);
  }
`;

const CheckBox = ({ label, ...props }) => {
  return (
    <Wrapper>
      <input {...props} type={props.type || "checkbox"} />
      <span className="label type-body2">{label}</span>
    </Wrapper>
  );
};

export default CheckBox;
