import React from 'react';
import InputField from '../components/forms/InputField';
import {NotificationIcon} from "../components/Icons";
import styled from 'styled-components';

const TopBar = ({barTitle, greetings}) => {
  return (
    <div>
        <Container>
            <NameWrapper>
                <div>
                    <h4 className='type-title4 title'>{barTitle}</h4>
                    <h6 className='type-body-sm fade'>{greetings}</h6>
                </div>
            </NameWrapper>
            <Wrapper>
                <InputField 
                id="firstName"
                type="search"
                placeholder="Search Anything"
                borderradius="none"
                
                />
                <div className='icon'>
                  <NotificationIcon />
                </div>
              <div className='img-wrapper'>
                <img src="assets/images/profile-img.svg" alt="img" />
              </div>
            </Wrapper>
        </Container>
  </div>
  )
}

export default TopBar;

const NameWrapper = styled.div`
   .title{
    color: var(--black);
   }
   .fade{
    color: var(--grey-light);
   }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  gap: 1.5rem;

  .img-wrapper, .icon{
    cursor:pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

