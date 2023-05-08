import React from 'react'
import styled from 'styled-components'
import { Logo } from '../components/Icons'
import ResetPasswordForm from '../components/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <FormLayout>
      <Logo />
      <ResetPasswordForm />
   </FormLayout>
  )
}

export default ResetPassword


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

