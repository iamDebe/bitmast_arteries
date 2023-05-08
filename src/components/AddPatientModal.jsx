import React, { Fragment, useEffect, uuseNavigate } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputField from './forms/InputField';
import ReactDOM  from 'react-dom';
import Button from './Button';
import TextArea from './forms/TextArea';
import SelectField from './forms/SelectField';


const bloodGroup = ["0", "AB", "A", "B",]
const genotype = ["AA", "AS", "SS"]

const Backdrop = ({handleShowModal }) =>{
    return <BackdropWrapper className='' onClick={handleShowModal}   />
  
};

const ModalOverlay = ({handleShowModal, modal}) => {
     const navigate = useNavigate()
    return (
        
        <ModalWrapper>
        <div className='modal-title'>
            <h4>New Patient</h4>
            <span className='close' onClick={handleShowModal}><b>X</b></span>
        </div>
        <form>
          <FlexColumn>
             
              <Row>
                  <Col>       
                      <InputField 
                          label="Patient Name"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                      <SelectField
                          label="Patient Gender"
                          type="text"
                          width="100%"
                          marginbottom="1rem"
                          margintop=".5rem"
                      >
                          <option defaultValue=""  disabled selected>Select Gender</option>
                          <option  value="male">Male</option>
                          <option value="male">Female</option>
                      </SelectField>
                      <InputField 
                          label="Patient Date of Birth  "
                          type="date"
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
                      <InputField 
                          label="Patient Phone Number"
                          type="phone"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                      
                      <InputField 
                          label="Patient Address"
                          type="text"
                          width="100%"
                          borderradius="none"
                          margin=".5rem 0rem"
                      />
                     
                  </Col>  
                  <Divider>
                    <div className='divider'>

                    </div>
                  </Divider>  
                  <Col> 
                    <div className='section'>
                      <h5>Medical Information</h5>
                      <hr />
                    </div>       
                    <SelectField
                        label="Blood Group"
                        type="text"
                        width="100%"
                        marginbottom="0rem"
                        margintop="1.5rem"
                    >
                        <option defaultValue=""  disabled selected>Select Blood Type</option>
                        {bloodGroup.map((title) => (
                        <option key={title} value={title}>
                        {title}
                        </option>
                    ))}
                    </SelectField>
                    <SelectField
                        label="Genotype"
                        type="text"
                        width="100%"
                        marginbottom="1rem"
                        margintop="1rem"
                    >
                        <option defaultValue=""  disabled selected>Select Genotype</option>
                        {genotype.map((title) => (
                        <option key={title} value={title}>
                        {title}
                        </option>
                    ))}
                    </SelectField>
                     
                    <TextArea 
                      label="Additional Note"
                      type="text"
                      width="100%"
                      borderradius="none"
                      margin=".5rem 0rem"
                      resize="vertical"
                      row={10}
                    />
                <BtnWrapper>
                  <Button
                    bg="var(--blue-main)"
                    textcolor="white"
                    className=""
                    padding="0.5rem 1rem"
                    btnWidth="45%"
      
                  >
                    Add Patient
                  </Button> 
                  <Button
                    bg="transparent"
                    textcolor="var(--blue-main)"
                    className=""
                    padding="0.5rem 1rem"
                    border="var(--blue-main)"
                    btnWidth="45%"

                  >
                     Cancel
                  </Button> 
              </BtnWrapper>
                  </Col>
              </Row>
          </FlexColumn>
        </form>
        </ModalWrapper>
  
    )
}

const AddPatientModal = ({handleShowModal, modal}) => {
    useEffect(()=>{
      console.log(modal)
    }, [modal]);
  return (
    <Fragment>
      
        {ReactDOM.createPortal(
            <Backdrop handleShowModal={handleShowModal} />, 
                document.getElementById('backdrop')
            )}
        {ReactDOM.createPortal(
            <ModalOverlay  handleShowModal={handleShowModal}/>, 
                document.getElementById('overlay') 
        )}
    
    </Fragment>

  );
};
 
export default AddPatientModal;


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
    width: 45%;

    .section{
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7.5rem;
`
const Divider = styled.div`
    
    .divider{
        display: flex;
        align-self: end;
        background: var(--grey);
        width: 3px;
        height: 100%;
        margin-top: .5rem;
    }
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

