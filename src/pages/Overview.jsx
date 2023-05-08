import React from 'react';
import EssLayout from '../components/EssLayouts';
import styled from 'styled-components';
import TotalBox from '../components/TotalBox';
import {ClaimIcon, RevenueIcon, TreatmentIcon, PatientIcon} from "../components/Icons";
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import Claims from '../components/Claims';
import TopBar from '../components/TopBar';

const Overview = () => {
  return (
 
        <EssLayout>
          <FlexColumnWrapper>
            <TopBar 
              barTitle="Hello Chris"
              greetings="Welcome back"
            />
            <TotalWrapper>
              <TotalBox 
                icon={<PatientIcon />}
                totalTitle="Total Patient"
                totalValue="00000"
              />
              <TotalBox 
                icon={<ClaimIcon />}
                totalTitle="Total Claims"
                totalValue="00000"
              />
              <TotalBox 
                icon={<TreatmentIcon />}
                totalTitle="Total Treatments"
                totalValue="00000"
              />
              <TotalBox 
                icon={<RevenueIcon />}
                totalTitle="Total Revenue"
                totalValue="00000"
              />
            </TotalWrapper>
            <ChartWrapper>
              <LineChart />
              <DoughnutChart />
            </ChartWrapper>
            <Claims />
          </FlexColumnWrapper>
          
           
        </EssLayout>
  )
}

export default Overview;



export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
