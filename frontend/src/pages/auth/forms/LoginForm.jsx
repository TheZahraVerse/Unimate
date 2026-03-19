/**
 * Login form 
 * Handles user authentication (email + password)
 * Used inside AuthPage when in login mode
 * Show "Remember me" checkbox & Forgot password link
 */
import React from 'react'
import EmailInput from '../../../components/UI/EmailInput'
import PasswordInput from '../../../components/UI/PasswordInput'
import ActionButton from '../../../components/UI/ActionButton'
import LinkButton from '../../../components/UI/LinkButton'

export default function LoginForm() {
  return (
    <div className='border text-center border-gray-300/50'>
        <h2>Login</h2>
        <EmailInput/>
        <PasswordInput/>
        {/* TODO: use link button or a specific type of button for pop-up */}
        <a href='#' className='text-blue-700 hover:text-blue-600'>Forget password?</a>
    </div>
  )
}
