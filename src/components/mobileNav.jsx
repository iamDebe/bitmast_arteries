import React from "react";
import styled from "styled-components";
// import   MenuIcon from "../images/menu-icon.svg";
import { mobile } from "../globalStyles";
import Button from "../components/Button";

const Container = styled.div`
    align-items: center;
    justify-content: space-between;
    padding: 1.875rem 1.25rem 1rem;
    background: var(--white);
    display: none;
    ${mobile} {
        display: flex;
    }
`;

const MobileNav = ({ toggleSidebar }) => {
    return (
        <Container>
            <img src="/ess/images/barter.svg" width="85" alt="company-logo" />
            <Button bg="none" onClick={toggleSidebar}>
                {/* <MenuIcon fill="#292D32" /> */}
            </Button>
        </Container>
    );
};

export default MobileNav;