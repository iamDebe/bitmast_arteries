import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import InputField from './forms/InputField';
import Button from './Button';
import { PlusIcon } from './Icons';
import Table from './Table';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ClaimModal from './ClaimModal';

const Claims = ({onClick, handleShowModal}) => {

    const [showModal, setShowModal]  = useState()
    const [isActive, setIsActive] = useState(1)


    const makeModalVisible = ()=>{
        setShowModal(!showModal)
    }

    const handleShowActiveTable = (index)=>{
        // event.currentTarget.classList.toggle('active');
            setIsActive(index)
       }
  return (

    <Fragment>
        <Div>
            <b>Claims</b>
            <Link to="/claims" >
                <div className='view-claims'><p>View All Claims</p> <KeyboardArrowRight color="inherit" /></div>
            </Link>
        </Div>
        <Container>
            <Wrapper>
                <Tabs className='active'>
                    <h6 className={` ${isActive === 1 ? "active" : ""}`} onClick={()=>handleShowActiveTable(1)}>All</h6>
                    <h6 className={` ${isActive === 2 ? "active" : ""}`} onClick={()=>handleShowActiveTable(2)}>Active</h6>
                    <h6 className={` ${isActive === 3 ? "active" : ""}`} onClick={()=>handleShowActiveTable(3)}>Pending</h6>
                    <h6 className={` ${isActive === 4 ? "active" : ""}`} onClick={()=>handleShowActiveTable(4)}>Denied</h6>
                    <h6 className={` ${isActive === 5 ? "active" : ""}`} onClick={()=>handleShowActiveTable(5)}>Resolved</h6>
                    <h6 className={` ${isActive === 6 ? "active" : ""}`} onClick={()=>handleShowActiveTable(6)}>Drafts</h6>
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
                    lefticon={<PlusIcon />}
                    bg="var(--blue-main)"
                    textcolor="white"
                    className=""
                    padding="0.5rem 1rem"
                    onClick={makeModalVisible}

                    >
                    New Claim
                </Button>
                </RightHandSide>
            </Wrapper>
            <Table />
        </Container>
        {showModal===true && <ClaimModal makeModalVisible={makeModalVisible} onClick={onClick} showModal={showModal} />}
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
    .view-claims{
        display: flex;
        align-items:center;
        color: var(--grey);
    }
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
           color: var(--blue-light);
        }
    }
    
    .active{
        color: var(--blue-main); 
    }
    
   
`;

