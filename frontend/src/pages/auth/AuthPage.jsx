/**
 * Main authentication page (Login + Register in one view)
 * - Uses auth layout, Toggles between login and register modes using a single state
 * - Shared form with conditional fields (email & password confirmation only in register)
 * - Uses Inertia's useForm for submission, errors, and processing state
 
 */
import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import ActionButton from "../../components/UI/buttons/ActionButton";
import { useTranslation } from "react-i18next";
import LinkButton from "../../components/UI/buttons/LinkButton";

export default function AuthPage({ message }) {
  const { t } = useTranslation();
  // TODO: Use url to set the mode from backend (mode as props)
  const [mode, setMode] = useState("login");

  return (
    <AuthLayout>
      <div className="w-full">

        {/* dynamic forms */}
        <div className="w-full min-h-fit">
          {/* login mode */}
          {mode === "login" && <LoginForm />}

          {/* signup mode */}
          {mode === "signup" && <RegisterForm />}
        </div>

        
        {/* switch buttons*/}
        <div dir="ltr" className="flex justify-center pt-1 gap-4 mb-6">
          {/* TODO: use link button to change url */}
          {/* <LinkButton text={t("auth.login")} href={'/auth/login'}/>
          <LinkButton text={t("auth.signup")} href={'/auth/signup'}/> */}

          <ActionButton
            variant={mode === "login" ? "primary" : "secondary"}
            onClick={() => setMode("login")}
          >
            {t("auth.login")}
          </ActionButton>

          <ActionButton
            variant={mode === "signup" ? "primary" : "secondary"}
            onClick={() => setMode("signup")}
          >
            {t("auth.signup")}
          </ActionButton>
        </div>

      </div>
    </AuthLayout>
  );
}