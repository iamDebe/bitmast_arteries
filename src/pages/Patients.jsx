import React, {useState} from 'react'
import EssLayout from '../components/EssLayouts'
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import PatientTable from '../components/PatientTable';
import Button from '../components/Button';
import AddIcon from '@mui/icons-material/Add';
import { SearchIcon } from '../components/Icons';
import FilterAltIconOutlined from '@mui/icons-material/FilterAltOutlined';
import InputField from '../components/forms/InputField';
import AddPatientModal from '../components/AddPatientModal';


const Patients = ({onClick}) => {

  const [showModal, setShowModal] = useState()

  const handleShowModal = ()=>{
    setShowModal(!showModal)
  }

  return (
    <>
       <EssLayout>
      <FlexColumnWrapper>
          <TopBar 
            barTitle="Patients"
          />
          <Container>
            <Wrapper>
                <SearchWrapper>
                  <FilterWrapper>
                    <FilterAltIconOutlined />
                    <p>Filter</p>
                  </FilterWrapper>
                  <InputField 
                    type="search"
                    placeholder="search patients"
                  />
                </SearchWrapper>
                <Button
                    lefticon={<AddIcon />}
                    bg="var(--blue-main)"
                    textcolor="white"
                    padding="0.5rem 1rem"
                    onClick={handleShowModal}
                    >
                    Add Patient
                </Button>
            </Wrapper>
            <PatientTable />
          </Container>
      </FlexColumnWrapper>
    </EssLayout>
    {showModal === true && <AddPatientModal handleShowModal={handleShowModal} onClick={onClick} />}
    </>
   
  )
}

export default Patients;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
  background-color: var(--white);
  border-radius: .5rem;
  padding: 1rem;

`;

 const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
 `;

 const SearchWrapper = styled.div`
   display:flex;
   gap:1rem;
 `;

 const FilterWrapper = styled.div`
  background: var(--blue-main);
  color: var(--white);
  font-weight: 400;
  padding: .4rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
 `;

