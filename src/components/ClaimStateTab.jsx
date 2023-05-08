import React, { useState } from 'react'
import styled from 'styled-components';

const ClaimStateTab = ({params1, params2, params3, params4, params5, params6}) => {
    const [isActive, setIsActive] = useState(1)
    

   const handleShowActiveTable = (index)=>{
    // event.currentTarget.classList.toggle('active');
        setIsActive(index)
   }

  return (

    <Wrapper>
        <li 
            className={`type-title6 ${isActive === 1 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(1)}>{params1}
        </li>
        <li 
            className={`type-title6 ${isActive === 2 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(2)}>{params2}
        </li>
        <li 
            className={`type-title6 ${isActive === 3 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(3)}>{params3}
        </li>
        <li 
            className={`type-title6 ${isActive === 4 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(4)}>{params4}
        </li>
        <li 
            className={`type-title6 ${isActive === 5 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(5)}>{params5}
        </li>
        <li 
            className={`type-title6 ${isActive === 6? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(6)}>{params6}
        </li>
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
    .inactive{
        background-color: transparent;
        color: black;
    }
`;