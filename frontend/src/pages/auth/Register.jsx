import React from 'react'
import AuthLayout from "../../layouts/AuthLayout"

export default function Register() {
  return (
    <div>Register</div>
  )
}

// connect to layout 
Register.layout = page => <AuthLayout>{page}</AuthLayout>;