import React, { useState } from 'react'
import styled from 'styled-components';
import InputField from './forms/InputField';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import CheckBox from './forms/Checkbox';

const CompanyOnboardingForm = () => {
    const navigate = useNavigate()
    const [signUp, setSignup]= useState(false)
    const [signIn, setSignIn]= useState(true)
    const [forgotPassword, setForgotPassword]= useState(false)

    const showSignIn = ()=>{
        setSignup(false)
        setSignIn(true)
    }
    const showSignUp = ()=>{
        setSignIn(false)
        setSignup(true)
    }
  return (
   
      <FormWrapper>
            <Tab>
                <h6 className={signIn ? 'active type-title6':  'type-title6'} onClick={showSignIn}>Sign In</h6>
                <h6 className={signUp ? 'active type-title6':  'type-title6'} onClick={showSignUp}>Sign Up</h6>
            </Tab>
         {signIn && <form className='form'>
            <div className='form-title'>
                <h3 className='type-title4'>Welcome Back</h3>
                <h6 className='type-title6'>Login to your account</h6>
            </div>
              <InputField 
                  type="email"
                  placeholder="Staff Email"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="password"
                  placeholder="Password"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <CheckBox
                  label="Remember me"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />

              <Button
                bg="var(--blue-main)"
                textcolor="var(--white)"
                btnWidth="100%"
                margin="4rem 0rem 2rem 0rem"
                onClick={()=> navigate('/')}
              >
                Sign In
              </Button>
              <p className='type-title6 forgot'>I forgot my password</p>
          </form>
        }   
         {signUp &&<form className='form'>
            <div className='form-title'>
                <h3 className='type-title4'>Welcome Back</h3>
                <h6 className='type-title6'>Register below and start making claims</h6>
            </div>
              <InputField 
                  type="text"
                  placeholder="Invite Code"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="text"
                  placeholder="Company Name"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="email"
                  placeholder="Company Email"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="text"
                  placeholder="Staff Full Name"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="email"
                  placeholder="Staff Email"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="number"
                  placeholder="Phone Number"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />
              <InputField 
                  type="password"
                  placeholder="Password"
                  margin=".5rem 0rem"
                  borderradius=".2rem"
              />

              <Button
                bg="var(--blue-main)"
                textcolor="var(--white)"
                btnWidth="100%"
                margin="3rem 0rem 0rem 0rem"

              >
                Sign Up
              </Button>
          </form>
        }   
      </FormWrapper>
  )
}

export default CompanyOnboardingForm;




const FormWrapper = styled.div`
    background: '#FFFFFF';
    border-radius: .3rem;
    box-shadow: 0px 12px 64px rgba(0, 0, 0, 0.06);
    width: 35%;
    align-self:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .form{
        margin: 3rem 0rem;
        width: 70%;
        align-self:center;

        .form-title{
            margin: 0rem 0rem 1.5rem 0rem;
        }

        .forgot{
            color: var(--blue-main);
            text-align: center;
            font-weight: 500;
            cursor: pointer;
        }
    }
`

const Tab = styled.div`
    align-self:center;
    display: flex;
    gap: 5rem;
    justify-content: space-between;

    h6{
        padding-top: 1rem;
        cursor: pointer;
        border-top: 2px solid transparent;


    }
    .active{
        border-top: 2px solid var(--blue-main);
    }
`
