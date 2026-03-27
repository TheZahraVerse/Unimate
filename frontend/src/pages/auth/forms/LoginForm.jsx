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
import { useTranslation } from 'react-i18next'

export default function LoginForm() {
  const {t} = useTranslation();

  return (
    <div className='text-center'>
        
        <EmailInput placeholder={t("auth.email")}/>
        <PasswordInput placeholder={t("auth.password")}/>
        {/* TODO: use link button or a specific type of button for pop-up */}
        <a href='#' className='text-(--link)'>{t("auth.dialog.forget-pass")}</a>
    </div>
  )
}
