import React from 'react'
import EssLayout from '../components/EssLayouts'
import TopBar from '../components/TopBar';
import FreqCatalogues from '../components/FreqCatalogues';
import {Physiotherapy} from "../components/Icons";
import styled from 'styled-components';
import Claims from '../components/Claims';


const Catalogue = () => {
  return (
    <EssLayout>
    <FlexColumnWrapper>
        <TopBar 
          barTitle="Catalogue"
        />
        <OverallWrapper>
            <TextWrapper>
                <h5>Frequently used Catalogues</h5>
                <p>View All</p>
            </TextWrapper>
            <TotalWrapper>
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)"  />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                    borderradius="50px"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                    borderradius="50px"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                    borderradius="50px"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                    borderradius="50px"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                    borderradius="50px"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                    borderradius="50px"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
                    totalTitle="Physiotherapy"
                    borderLeft="none"
                    totalValue="00000"
                />
                <FreqCatalogues
                    icon={<Physiotherapy fill="var(--blue-main)" />}
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
