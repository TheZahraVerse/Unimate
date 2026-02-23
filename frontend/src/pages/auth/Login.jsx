import React from 'react'
import AuthLayout from "../../layouts/AuthLayout";

export default function Login() {
  return (
    <div>Login</div>
  )
}


// connect to layout
Login.layout = page => <AuthLayout>{page}</AuthLayout>;