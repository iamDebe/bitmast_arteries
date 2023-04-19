import React, { Fragment } from 'react'
import styled from 'styled-components';
import InputField from './forms/InputField';
import Button from './Button';
import { PlusIcon } from './Icons';
import Table from './Table';

const Claims = () => {
  return (

    <Fragment>
        <Div>
            <b>Claims</b><p>View All Claims</p>
        </Div>
        <Container>
            <Wrapper>
                <Tabs className='active'>
                    <h6 className='active'>All</h6>
                    <h6>Active</h6>
                    <h6>Pending</h6>
                    <h6>Denied</h6>
                    <h6>Resolved</h6>
                    <h6>Drafts</h6>
                </Tabs>
                <RightHandSide>
                    <div>
                        <InputField 
                                id="search"
                                type="search"
                                placeholder="Search clients, patients"
                                borderradius="none"
                        />
                    </div>
                    <Button
                    leftIcon={<PlusIcon />}
                    bg="var(--blue-main)"
                    textcolor="white"
                    className=""
                    padding="0.5rem 1rem"

                    >
                    New Claim
                </Button>
                </RightHandSide>
            </Wrapper>
            <Table />
        </Container>
    </Fragment>
  )
}

export default Claims;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: .2rem;
    padding: 1.5rem 1rem;
    background-color: var(--white);
    gap: 1rem;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;


const RightHandSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Tabs = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    border-bottom: 2px solid var(--blue-lightest);
    padding-bottom: .4rem;
    h6{
        cursor: pointer;
        color: var(--grey-lighter);

        &:hover{
           color: var(--blue-main);
        }
    }
    
    .active{
        color: var(--blue-light); 
    }
    
   
`;

