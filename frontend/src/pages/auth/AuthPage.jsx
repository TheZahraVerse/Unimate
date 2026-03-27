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
import ActionButton from "../../components/UI/ActionButton";
import { useTranslation } from "react-i18next";

export default function AuthPage({ message }) {
  const { t } = useTranslation();
  // use state for switching between login and signup
  const [mode, setMode] = useState("login");

  return (
    <AuthLayout>
      <div className="w-full">
        {/* switch buttons*/}
        <div dir="ltr" className="flex justify-center pt-1 gap-4 mb-6">
          <ActionButton variant="primary" onClick={() => setMode("login")}>
            {t("auth.login")}
          </ActionButton>

          <ActionButton variant="primary" onClick={() => setMode("signup")}>
            {t("auth.signup")}
          </ActionButton>
        </div>

        {/* dynamic forms */}
        <div className="w-full min-h-fit">
          {/* login mode */}
          {mode === "login" && <LoginForm />}

          {/* signup mode */}
          {mode === "signup" && <RegisterForm />}
        </div>
      </div>
    </AuthLayout>
  );
}
