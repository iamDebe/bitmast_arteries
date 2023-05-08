import React, { useState } from 'react'
import styled from 'styled-components';
import InputField from './forms/InputField';
import Button from './Button';
import { useNavigate, Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const ForgotPasswordForm = () => {
    const navigate = useNavigate()
   
  return (
   
      <FormWrapper>
        <Link to='#' className='link'>
					<KeyboardArrowLeftIcon />
          </Link>
					<Link to="/staff-profilesetup"><p className='type-body-em'>Sign in</p></Link>
				
        <form className='form'>
            <div className='form-title'>
                <h3 className='type-title3'>Forgot Password</h3>
                <h6 className='type-title6'>Lets help you reset your password</h6>
            </div>
              <InputField 
                  type="email"
                  label="Enter your registered email below"
                  placeholder="Email"
                  margin=".5rem 0rem 0rem 0rem"
                  borderradius=".2rem"
              />
              
              <Button
                bg="var(--blue-main)"
                textcolor="var(--white)"
                btnWidth="100%"
                margin="3rem 0rem 1rem 0rem"
								padding="1rem"
                onClick={()=> navigate('/')}
              >
                Reset Password
              </Button>
              <Link to="/staff-profilesetup"><p className='type-title6 forgot' >Mistake! I remember my password</p></Link>
        </form>
        
          
      </FormWrapper>
  )
}

export default ForgotPasswordForm;




const FormWrapper = styled.div`
    background: '#FFFFFF';
    border-radius: .3rem;
    box-shadow: 0px 12px 64px rgba(0, 0, 0, 0.06);
    width: 35%;
    align-self:center;
    display: flex;
    flex-direction: column;
    justify-content: center;

		.link{
			display: flex;
			justify-content: start;
			align-items: center;
			margin: 1rem 0rem 0rem 2.5rem;
			
		}
    .form{
        margin: 2rem 0rem;
        width: 80%;
        align-self:center;

        .form-title{
            margin: 0rem 0rem 3rem 0rem;
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
