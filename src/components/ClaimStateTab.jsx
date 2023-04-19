import React from 'react'
import styled from 'styled-components';

const ClaimStateTab = ({params1, params2, params3, params4, params5, params6}) => {
  return (
    <Wrapper>
        <li className='active type-title6'>{params1}</li>
        <li className='type-title6 fade'>{params2}</li>
        <li className='type-title6 fade'>{params3}</li>
        <li className='type-title6 fade'>{params4}</li>
        <li className='type-title6 fade'>{params5}</li>
        <li className='type-title6 fade'>{params6}</li>
    </Wrapper>
  )
}

export default ClaimStateTab;

const Wrapper = styled.div`
    border: 1px solid var(--blue-main);
    display: flex;
    align-items: center;

    li{
        list-style: none;
        border-right: 1px solid var(--blue-main);
        padding: 0.75rem 1rem;
        cursor: pointer;
        &:nth-child(1){
            padding: 0.75rem 2rem;
        }
        &:nth-child(6){
            border-right:none;

        }
    }

   

    .active{
        background-color: var(--blue-main);
        color: var(--white);
    }
`;