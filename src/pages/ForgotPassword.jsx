import React from 'react'
import styled from 'styled-components'
import { Logo } from '../components/Icons'
import ForgotPasswordForm from '../components/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <FormLayout>
      <Logo />
      <ForgotPasswordForm />
   </FormLayout>
  )
}

export default ForgotPassword


const FormLayout = styled.div`
    background:"#f9f9f9";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 2rem;
    padding: 3.5rem 0rem;
    margin-top: 1rem;
`;

