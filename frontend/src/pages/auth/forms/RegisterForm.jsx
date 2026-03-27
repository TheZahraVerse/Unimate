/**
 * Registration form 
 * Collects user details to create a new account
 * inputs are : email, 2 varification password, university name
 * Used inside AuthPage when in register mode
 */
import React from 'react'
import EmailInput from '../../../components/UI/EmailInput'
import PasswordInput from '../../../components/UI/PasswordInput'
import { useTranslation } from 'react-i18next'

export default function RegisterForm() {
  const {t} = useTranslation();

  return (
    <div className='text-center'>
  
        <EmailInput placeholder={t("auth.dialog.enter-email")}/>
        <PasswordInput placeholder={t("auth.dialog.enter-pass")}/>
        <PasswordInput placeholder={t("auth.dialog.repeat-pass")}/>
    </div>
  )
}
