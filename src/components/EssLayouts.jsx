import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideNavbar from "../components/SideNavbar";
import { mobile, desktop, desktopMidi } from "../globalStyles";
import MobileNav from "./mobileNav";

const Wrapper = styled.div`
  width: 100%;
  background-color: #E6E6E6;
  ;
`;

const Main = styled.div`
    width: var(--content-window-width-expanded);
    margin-left: auto;
    padding: 2rem;
    &.collapsed {
        width: var(--content-window-width-collapsed);
    }
    ${desktop} {
        padding: 2rem 4.0625rem 3.5rem 3.25rem;
    }
    ${desktopMidi} {
        padding: 2rem;
    }
    ${mobile} {
        width: 100% !Important;
    }
`;

const EssLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    
  return (
    <Wrapper>
      <SideNavbar collapsed={collapsed} onToggleCollapse={handleCollapse} isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <MobileNav toggleSidebar={toggleSidebar} />
      <Main className={collapsed ? "collapsed" : ""}>
        {children}
      </Main>
    </Wrapper>
  );
};

export default EssLayout;
