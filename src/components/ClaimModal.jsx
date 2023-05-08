import React, { Fragment, useEffect, uuseNavigate } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputField from './forms/InputField';
import ReactDOM  from 'react-dom';
import { BtnWrapper } from '../pages/ClaimsView';
import Button from './Button';
import TextArea from './forms/TextArea';
import SelectField from './forms/SelectField';


const InsuranceTypes = ["Personal Insurance", "Family Insurance", "Couple Insurance"]

const Backdrop = ({handleShowModal }) =>{
    return <BackdropWrapper className='' onClick={handleShowModal}   />
  
};

const ModalOverlay = ({handleShowModal, modal}) => {
     const navigate = useNavigate()
    return (
        
        <ModalWrapper>
        <div className='modal-title'>
            <h4>Claims</h4>
            <span className='close' onClick={handleShowModal}><b>X</b></span>
        </div>
        <form>
          <FlexColumn>
              <div className='section'>
                  <h5>Details of the Claim</h5>
                  <hr />
              </div>
              <Row>
                  <Col>       
                      <InputField 
                          label="Insurance Provider"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                      <InputField 
                          label="Claim ID"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                      <InputField 
                          label="Amount"
                          type="number"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                  </Col>    
                  <Col>        
                      <SelectField
                          label="Type of Insurance"
                          type="text"
                          width="100%"
                          marginbottom="1rem"
                          margintop=".5rem"
                      >
                          <option defaultValue=""  disabled>Select Insurance Type</option>
                          {InsuranceTypes.map((title) => (
                          <option key={title} value={title}>
                          {title}
                          </option>
                      ))}
                      </SelectField>
                      <InputField 
                          label="Type of Claim"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                      <TextArea 
                          label="Description of Service"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                          resize="vertical"
                      />
                  </Col>
              </Row>
              <div className='section'>
                  <h5>Patient Details</h5>
                  <hr />
              </div>
              <Row>
                  <Col>        
                      <InputField 
                          label="Patient Name"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                      <InputField 
                          label="Patient Email"
                          type="email"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                  
                  </Col>    
                  <Col>        
                      <InputField 
                          label="Patient Phone Number"
                          type="number"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                  </Col>
              </Row>
              <BtnWrapper>
                  <Button
                      bg="var(--blue-main)"
                      textcolor="white"
                      className=""
                      padding="0.5rem 1rem"
      
                      >
                      Update Claim
                  </Button> 
                  <Button
                      bg="transparent"
                      textcolor="var(--blue-main)"
                      className=""
                      padding="0.5rem 1rem"
                      border="var(--blue-main)"
                      >
                      Withdraw Claim
                  </Button> 
              
              </BtnWrapper>
          </FlexColumn>
        </form>
        </ModalWrapper>
  
    )
}

const ClaimModal = ({handleShowModal, modal}) => {
    useEffect(()=>{
      console.log(modal)
    }, [modal]);
  return (
    <Fragment>
      
        {ReactDOM.createPortal(
            <Backdrop handleShowModal={handleShowModal} />, 
                document.getElementById('backdrop-root')
            )}
        {ReactDOM.createPortal(
            <ModalOverlay  handleShowModal={handleShowModal}/>, 
                document.getElementById('overlay-root') 
        )}
    
    </Fragment>

  );
};
 
export default ClaimModal;


const ModalWrapper = styled.div`
    background: var(--white);
    padding: 2rem 2rem 2.5rem 2rem;
    border-radius: .5rem;
    width: 60%;
    position: absolute;
    left: 400px;
    top:  100px;
    z-index: 100;

    .modal-title{
        display: flex;
        justify-content: space-between;

        .close{
            cursor:pointer;
        }
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Col = styled.div`
    width: 48%;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 1rem;

    .section{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
`;

const BackdropWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
    cursor: pointer;
`

