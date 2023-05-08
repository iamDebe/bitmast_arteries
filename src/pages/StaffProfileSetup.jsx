import React from 'react'
import InputField from '../components/forms/InputField'
import styled from 'styled-components'
import StaffProfileSetupForm from '../components/StaffProfileSetupForm'
import { Logo } from '../components/Icons'

const StaffProfileSetup = () => {
  return (
    <FormLayout>
      <Logo />
      <StaffProfileSetupForm />
   </FormLayout>
  )
}

export default StaffProfileSetup


const FormLayout = styled.div`
    background:"#f9f9f9";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 2rem;
    padding: 3rem 0rem;


`;

