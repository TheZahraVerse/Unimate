/**
 * Registration form 
 * Collects user details to create a new account
 * inputs are : email, 2 varification password, university name
 * Used inside AuthPage when in register mode
 */
import React from 'react'
import EmailInput from '../../../components/UI/EmailInput'
import PasswordInput from '../../../components/UI/PasswordInput'

export default function RegisterForm() {
  return (
    <div className='border border-gray-300/50'>
        <h2 className='text-center'>Signup</h2>
        <EmailInput/>
        <PasswordInput/>
        <PasswordInput/>
    </div>
  )
}
