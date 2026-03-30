/**
 * Registration form
 * Collects user details to create a new account
 * inputs are : email, 2 varification password, university name
 * Used inside AuthPage when in register mode
 */
import React, { useState } from "react";
import EmailInput from "../../../components/UI/EmailInput";
import PasswordInput from "../../../components/UI/PasswordInput";
import { useTranslation } from "react-i18next";
import { useForm } from "@inertiajs/react";
import Icon from "../../../components/shared/Icon";
import ActionButton from "../../../components/UI/ActionButton";

export default function RegisterForm() {
  const { t } = useTranslation();

  // form including data of new user
  const form = useForm({
    email: "",
    password: "",
  });

  // confirming password state
  const [confirmPassword, setConfirmPassword] = useState("");

  // Boolean state checks if the passwords are match
  const passwordsMatch =
    confirmPassword.length > 0 && confirmPassword === form.data.password;

  // function for submit button (post and onFinish)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch){
      console.log("Form not submitted , passwords do not match")
      return;
    } // post only when they're match
    form.post("/auth/register");

    onFinish = () => {
      // what ever you want to happen after submit
    }
  };

  // function for signup with Google
  const handleGoogleSignup = () => {
    console.log("Initiating Google signup...");
    // TODO: Implement Google OAuth flow here.
    // window.location.href = '/auth/google/redirect';
  }; 

  return (
    <div className="text-center text-(--text-on-primary)">
      {/* Intro dialogs  */}
      <h1 className="font-semibold text-4xl">{t("auth.dialog.title-signup")}</h1>
      <h2 className="pt-4">{t("auth.dialog.intro-signup")}</h2>

      <form onSubmit={handleSubmit} className="text-center px-6">
        {/* Input for email */}
        <div className="mb-6">
          <EmailInput
            placeholder={t("auth.dialog.enter-email")}
            value={form.data.email}
            onChange={(e) => form.setData("email", e.target.value)}
            error={form.errors.email} // show email error in the component
            autoComplete="email" // automaticaly complete by browser
          />
        </div>

        <div className="mb-6">
          <PasswordInput
            placeholder={t("auth.dialog.enter-pass")}
            value={form.data.password}
            onChange={(e) => form.setData("password", e.target.value)}
            error={form.errors.password} // show password errors in the component
          />
        </div>

        <div className="mb-6">
          <PasswordInput
            placeholder={t("auth.dialog.repeat-pass")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Error if they aren't match */}
        {/* {!passwordsMatch &&
          confirmPassword.length > 0 &&
          // find a way to show errors here
          console.log("Passwords aren't match !")} */}

        {/* Submit + login with google buttons  */}
        <div dir="ltr" className="flex justify-between mb-3 pt-3">
          {/* Google  */}
          <ActionButton
            type="button"
            variant="google"
            onClick={handleGoogleSignup}
          >
            {t("auth.dialog.google-signup")}
            <Icon name="google" />
          </ActionButton>

          {/* Submit  */}
          <ActionButton
            type="submit"
            variant="submit"
            disabled={form.processing}
          >
            {t("public.submit")}
          </ActionButton>
        </div>

        {/* Guide dialog for Login  */}
        <div className="py-3">
          {t("auth.dialog.link-login")}
          🗝️
          <a href="/auth/login" className="text-(--link)">
            {t("auth.dialog.title-login")}
          </a>
        </div>

      </form>
    </div>
  );
}
