
import React, {useEffect} from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props=> props.width || "100%"};
  margin:  ${props=> props.margin || ""};
  label {
    font-size: 16px;
    line-height: 15px;
    color: black;
  }
  textarea {
    background:  var(--white);
    color: var(--grey-400);
    font-family: inherit;
    font-size: 16px;
    padding: 0.5rem 2.4rem 0.5rem 1rem;
    border: 1px solid var(--grey-lighter);
    margin:  ${props=> props.margin || ""};
    resize: ${props=> props.resize || "none"};
    border-radius: ${props=> props.borderradius || ".4rem"};
    outline: none;
    &::placeholder {
      font-family: inherit;
      color: #CFD0D3;
    }
    &:focus {
      background: #E7E7E7;
      border: 1px solid var(--grey-lighter);
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
  .optional {
    display: flex;
    align-items: center;
    & span {
      font-size: 12px;
      color: var(--grey-300);
    }
  }
`;


const TextArea = React.forwardRef(({ label, icon, optional, borderradius, resize, width, margin, rows,  disabled, ...props }, ref) => {
  useEffect(()=>{
  }, [disabled]);
  return (
    <Wrapper width={width} borderradius={borderradius} margin={margin} resize={resize}>
      <div className="optional">
        <label htmlFor={props.id || props.name}>{label}</label>
        {optional && <span>&nbsp;(Optional)</span>}
      </div>
      <textarea className="text-input" {...props} ref={ref} disabled={disabled} rows={rows}></textarea>
      {icon && icon }
    </Wrapper>
  );
})


export default TextArea;
