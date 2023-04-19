import React, {useState} from 'react'
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
        <FlexRow>
          <ClaimStateTab 
            params1={"All"}
            params2={"Active"}
            params3={"Pending"}
            params4={"Denied"}
            params5={"Resolved"}
            params6={"Draft"}
          />
          
          <BtnWrapper >
            <Button
                leftIcon={<CloudIcon />}
                bg="transparent"
                textcolor="var(--blue-main)"
                className="type-btn"
                padding="0.5rem 1rem"
                border="var(--blue-main)"
                >
                Export XSL
            </Button> 
            <Button
                leftIcon={<PlusIcon />}
                bg="var(--blue-main)"
                textcolor="white"
                className="type-btn"
                padding="0.5rem 1rem"
                onClick={handleShowModal}

                >
                New Claim
            </Button> 
          </BtnWrapper>
        </FlexRow>
        <Container>
         
          <ClaimSidenav 
            claimerTitle="Patient"
            claimerName="Christopher Aniedi U."
            providerTitle="Provider"
            provider="Leadway Assurance"
            creator="Created By"
            creatorName="Dr. Christopher A."
            dateRange="Date Range"
            width={"30%"}

          />
              { table.All && <ClaimTable
                className={"table"}
              />}
              { table.Active && <ClaimTable
                className={"table"}
              />}
              { table.Pending && <ClaimTable
                className={"table"}
              />}
              { table.Denied && <ClaimTable
                className={"table"}
              />}
              { table.Resolved && <ClaimTable
                className={"table"}
              />}
              { table.Draft && <ClaimTable
                className={"table"}
              />}
        </Container>
      </FlexColumnWrapper>
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

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
  margin-top: 2rem;

  
`;

