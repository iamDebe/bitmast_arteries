import React, {useEffect, useState} from 'react'
import EssLayout from '../components/EssLayouts';
import TopBar from '../components/TopBar';
import TotalBox from '../components/TotalBox';
import { TotalWrapper } from './Overview';
import {CloudIcon, DashboardIcon, NewclaimIcon, PaidclaimIcon, RejectedclaimIcon} from "../components/Icons";
import { ClaimIcon } from '../components/Icons';
import ClaimStateTab from '../components/ClaimStateTab';
import Button from '../components/Button';
import { PlusIcon } from '../components/Icons';
import styled from 'styled-components';
import ClaimSidenav from '../components/ClaimSidenav';
import ClaimTable from '../components/ClaimTable';
import { FlexColumnWrapper } from './Catalogue';
import ClaimModal from '../components/ClaimModal';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const ClaimsView = ({onClick}) => {


  const [modal, setModal] = useState(false);
  const tableData = {
    All: true,
    Active: false,
    Pending: false,
    Denied: false,
    Resolved: false,
    Draft: false
  }

  const [table, setTable] = useState(tableData)



  const handleShowModal = ()=>{
    setModal(!modal)
  }

  useEffect(()=>{
  }, [modal])
  
  return (

    <>
    <EssLayout>
      
        <FlexColumnWrapper>
          <TopBar 
            barTitle="Claims"
          />
          <TotalWrapper>
                <TotalBox 
                  icon={<ClaimIcon />}
                  totalTitle="Total Claims"
                  totalValue="00000"
                  borderLeft="none"
                />
                <TotalBox 
                  icon={<NewclaimIcon />}
                  totalTitle="New Claims"
                  totalValue="00000"
                  borderLeft="none"

                />
                <TotalBox 
                  icon={<PaidclaimIcon />}
                  totalTitle="Paid Claims"
                  totalValue="00000"
                  borderLeft="none"

                />
                <TotalBox 
                  icon={<RejectedclaimIcon />}
                  totalTitle="Rejected Claims"
                  totalValue="00000"
                  borderLeft="none"

                />
          </TotalWrapper>

        </FlexColumnWrapper>
        <ColumnWrapper>
        <Container>
          <ClaimTable
            className={"table"}
          />
        </Container>
      </ColumnWrapper>
    </EssLayout>
   {modal === true && <ClaimModal handleShowModal={handleShowModal} modal={modal} onClick={onClick} />}
    </>
  )
}

export default ClaimsView;

export const BtnWrapper = styled.div`
    display:flex;
    gap: 1rem;
`;

const ColumnWrapper = styled.div`
  background: white;
  padding: 3rem 1rem 1rem 1rem;
  margin: 3rem 0rem 0rem 0rem;
`;

const Container = styled.div`
  margin-top: 2rem;

  
`;

