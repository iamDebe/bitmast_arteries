import styled from 'styled-components';
import React from 'react';
import { GlobalStyles } from '../globalStyles';

const TotalBox = ({icon, totalTitle, totalValue, borderLeft}) => {
  return (

    <Wrapper borderLeft={borderLeft}>
      <div className='details ' >
          <div className='icon'>
            <div>{icon}</div>
          </div>
          <div className='details-text'>
            <h5 className='type-body-em'>{totalTitle}</h5>
            <p className='type-body-sm fade'>{totalValue}</p>
          </div>
      </div>
    </Wrapper>
  );
};

export default TotalBox;

const Wrapper = styled.div`
  background: var(--white);
  width: 23%;
  padding: 1rem;
  border-left: ${props => props.borderLeft || "3px solid var(--blue-main)"};
  border-radius: .2rem;
  box-shadow: 0px 0px 1px var(--grey-light);
  .details{
      display: flex;
      justify-content: space-bewteen;
      gap: 1rem;
      align-items: center;
      
      .icon{
        display: flex;
        align-items: center;
        align-self: center;
        width: 40px;
        height: 40px;
        background: var(--blue-lightest);
        border-radius: .3rem;
        padding: .7rem;
      }
  }

.details-text{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  .fade{
    color: var(--grey-lighter);
  }
  
}


}

`;