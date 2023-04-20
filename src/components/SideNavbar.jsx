import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../globalStyles";

import { Logo, 
  DashboardIcon, 
  Patient, 
  CatalogueICon, 
  Claim, 
  BillingIcon, 
  SettingsIcon, 
  CloseIcon, 
  CollapseIcon,
  CollapseOpen,
  LogoutIcon
} from "./Icons";




const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 22%;
  background-color: var(--white);
  transition: width 0.3s;
  box-shadow: 0px 4px 7px var(--grey-lighter);
  position: fixed;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;
  &.collapsed {
    width: 9%;
  }
  .bottom-nav {
    padding: 1.75rem 2.375rem;
    width: 100%;
  }
  .close-btn-wrapper {
    margin: 0 auto;
    width: auto;
  }
  &.open {
    display: flex;
    transform: translateX(0);
    transition: transform 0.8s ease-in;
  }

 
  ${mobile} {
    display: none;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 2.375rem;
  gap: 0.5rem;
  .nav-item {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0.75rem;
    gap: 15px;
    color: var(--grey-lighter);
    font-weight: 600;
    font-size: .875rem;
    line-height: 140%;
    white-space: nowrap;
    min-height: 42px;
    svg {
      fill: var(--grey-lighter);
    }
    &:hover,
    &.active {
      background: #34A3A4;
      color: #ffffff;
      svg {
        fill: var(--white);
      }
    }
    .nav-item-title {
      opacity: 1;
      transform: translateX(0);
      
      &.collapsed {
        position: absolute;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0;
      }
    }
  }
`;

const CompanyLogo = styled.div`
  padding: 2.375rem;
  text-align: left;
  &.collapsed-logo {
    display: flex;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    
  }
`;

const CollapseButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: var(--br);
  font-family: inherit;
  color: var(--grey-400);

  &:hover,
    &.active {
      background: #34A3A4;
      color: #ffffff;
      svg {
        fill: var(--white);
      }
    }
  &.close-btn {
    justify-content: center;
    height: 2.625rem;
    width: 2.625rem;
    border-radius: 50%;
    
  }
`;

const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding: 0.75rem;
  width: 100%;
  background: #F1CECE99;
  color: var(--red-main);
  margin-top: 1rem;
  border-radius: .2rem;


`;

const navItems = [
  {
    to: "/",
    icon: <DashboardIcon  fill=""/>,
    title: "Overview",
  },
  {
    to: "/patients",
    icon: <Patient fill="" />,
    title: "Patients",
  },
  {
    to: "/catalogue",
    icon: <CatalogueICon fill=""/>,
    title: "Catalogues",
  },
  {
    to: "/claims",
    icon: <Claim fill=""/>,
    title: "Claims",
  },
  {
    to: "/billings",
    icon: <BillingIcon fill=""/>,
    title: "Billings",
  },
  {
    to: "/settings",
    icon: <SettingsIcon fill=""/>,
    title: "Settings",
  },
 
];

const SideNavbar = ({ collapsed, onToggleCollapse, isOpen, closeSidebar }) => {
  const location = useLocation();


  
  return (
    <Navbar
      className={`${collapsed ? "collapsed" : ""} ${isOpen ? "open" : ""} `}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="top-nav">
        <CompanyLogo className={`${collapsed ? "collapsed-logo" : ""}`}>
          <Logo />
        </CompanyLogo>

        <NavWrapper>
          {navItems.map((item) => (
            <Link
              key={item.to+item.title}
              to={item.to}
              className={`nav-item ${location.pathname === item.to ? "active" : ""}`}
            >
              <div className="icon">{item.icon}</div>
              <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>{item.title}</span>
            </Link>
          ))}
        </NavWrapper>
      </div>
        <div className={`bottom-nav ${isOpen ? "close-btn-wrapper" : ""}`}>
          {isOpen ? (
            <CollapseButton className="close-btn" onClick={closeSidebar}>
              <div className="icon">
                <CloseIcon  />
              </div>
            </CollapseButton>
          ) : (
            <CollapseButton onClick={onToggleCollapse}>
               <div className="icon">
               {collapsed ?   <CollapseOpen />: <CollapseIcon />}
              
              </div>
              {!collapsed && <span className="type-title7  collapse-text">Collapse</span>}
            </CollapseButton>
          )}
          <LogoutWrapper>
            <LogoutIcon fill="" />
            <p className="logout">Logout</p>
          </LogoutWrapper>
        </div>
      
    </Navbar>
  );
};

export default SideNavbar;
