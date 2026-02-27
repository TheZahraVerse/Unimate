/**
 * Main authentication page (Login + Register in one view)
 * - Uses auth layout, Toggles between login and register modes using a single state
 * - Shared form with conditional fields (email & password confirmation only in register)
 * - Uses Inertia's useForm for submission, errors, and processing state
 
 */
import React from 'react'
import EmailInput from '../../components/UI/EmailInput'
import PasswordInput from '../../components/UI/PasswordInput'
import BaseInput from '../../components/UI/BaseInput'

export default function AuthPage({ message }) {
  return (
    <div>
        <h1>AuthPage</h1>
        <h2>{message}</h2>
        <EmailInput/>
        <PasswordInput/>
    </div>
  )
}
