import React from 'react'
import InputField from '../components/forms/InputField'
import styled from 'styled-components'
import CompanyOnboardingForm from '../components/CompanyOnboardingForm'
import { Logo } from '../components/Icons'
import { Link } from 'react-router-dom'

const CompanyOnboarding = () => {
  return (
    <FormLayout>
      <Link to=""><Logo /></Link>
      <CompanyOnboardingForm />
   </FormLayout>
  )
}

export default CompanyOnboarding

const FormLayout = styled.div`
    background:"#f9f9f9";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 2rem;
    padding: 3rem 0rem;


`;

