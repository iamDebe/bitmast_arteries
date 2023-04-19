import React from 'react'
import EssLayout from '../components/EssLayouts'
import TopBar from '../components/TopBar';
import TotalBox from '../components/TotalBox';
import {DashboardIcon} from "../components/Icons";
import styled from 'styled-components';
import Claims from '../components/Claims';


const Catalogue = () => {
  return (
    <EssLayout>
    <FlexColumnWrapper>
        <TopBar 
          barTitle="Claims"
        />
        <OverallWrapper>
            <TextWrapper>
                <h5>Frequently used Catalogues</h5>
                <p>View All</p>
            </TextWrapper>
            <TotalWrapper>
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <TotalBox 
                    icon={<DashboardIcon />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
            </TotalWrapper>
        </OverallWrapper>
        <Claims />
    </FlexColumnWrapper>
    </EssLayout>
  )
}

export default Catalogue;

export const FlexColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;


const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const OverallWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 1rem;
    gap: 15px;
`;

const TotalWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: .6rem;
   
`

const BtnWrapper = styled.div`
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

  .table{
    border: 2px solid red;
    width: 65%;
  }
`