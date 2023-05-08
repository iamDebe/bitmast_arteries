import React from 'react'
import styled from 'styled-components';
import InputField from './forms/InputField';

const ClaimSidenav = ({claimerTitle, claimerName, providerTitle, provider, creator, creatorName, dateRange, width, className }) => {
  return (
    <Wrapper width={width} className={className}>
        <div className='section'>
          <p className='type-body-em'>{claimerTitle}</p>
          <hr />
          <div className='checkbox'>
            <input type="checkbox" name="patient" id="patient" />
            <label htmlFor="patient" className='label'> {claimerName}</label>
          </div>
        </div>
        <div className='section'>
          <p className='type-body-em'>{providerTitle}</p>
          <hr />
          <div className='checkbox'>
            <input type="checkbox" name="provider" id="provider" />
            <label htmlFor="provider" className='label'> {provider}</label>
          </div>
        </div>
        <div className='section'>
          <p className='type-body-em'>{creator}</p>
          <hr />
          <div className='checkbox'>
            <input type="checkbox" name="creator" id="creator" />
            <label htmlFor="creator" className='label'> {creatorName}</label>
          </div>
        </div>
        <div className='section'>
          <p className='type-body-em'>{dateRange}</p>
          <hr />
            <div className='range'>
              <InputField 
                type="date"
                borderradius="none"
                width="40%"

              />
              <p>To</p>
              <InputField 
                type="date"
                borderradius="none"
                width="40%"

              />

            </div>
        </div>
    </Wrapper>
  )
}

export default ClaimSidenav;

const Wrapper = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: ${props=>props.width};

    .range{
      display: flex;
      gap:10px;
      margin-top: 1rem;

      p{
        align-self:center;
      }
    }

    .section{
      max-height: 200px;
      overflow-y: auto;
      
      .checkbox{
        margin: .5rem 0rem; 
        display: flex;
        gap: 8px;
        align-items: center;
      }
    }

   
`
