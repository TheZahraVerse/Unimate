/**
 * Login form
 * Handles user authentication (email + password)
 * Used inside AuthPage when in login mode
 * Show "Remember me" checkbox & Forgot password link
 */
import React from "react";
import EmailInput from "../../../components/UI/inputs/EmailInput";
import PasswordInput from "../../../components/UI/inputs/PasswordInput";
import ActionButton from "../../../components/UI/buttons/ActionButton";
import LinkButton from "../../../components/UI/buttons/LinkButton";
import { useTranslation } from "react-i18next";
import { useForm } from "@inertiajs/react";
import Icon from "../../../components/shared/Icon";

export default function LoginForm() {
  const { t } = useTranslation();

  // form to post as data
  const form = useForm({
    email: "",
    password: "",
    //TODO: add remember me later
  });

  // function for submit button (post and onFinish)
  const onSubmit = (e) => {
    e.preventDefault();
    form.post("/auth/login", {
      preserveScroll: true,
      onFinish: () => {
        //  TODO: do anything after post is finished
      },

      onError: (errors) => {
        //TODO: show error messages however you want here
        console.log(errors);
      },
    });
  };

  // function for login with Google
  const handleGoogleLogin = () => {
    // lead the user to url which handles Google in backend
    window.location.href = "/accounts/google/login/";
  };

  return (
    <div className="text-center text-(--text-on-primary)">
      {/* Intro dialogs  */}

      <h1 className="font-semibold text-4xl">{t("auth.dialog.title-login")}</h1>
      <h2 className="pt-4">{t("auth.dialog.intro-login")}</h2>

      {/* Login from  */}
      <form onSubmit={onSubmit} className="text-center px-6">
        {/* Input for email */}
        <div className="mb-6">
          <EmailInput
            placeholder={t("auth.email")}
            value={form.data.email}
            onChange={(e) => form.setData("email", e.target.value)}
            error={form.errors.email} // show email error in the component
            autoComplete="email" // automaticaly complete by browser
          />
        </div>

        {/* Input for password */}
        <div className="mb-6">
          <PasswordInput
            placeholder={t("auth.password")}
            value={form.data.password}
            onChange={(e) => form.setData("password", e.target.value)}
            error={form.errors.password} // show password errors in the component
          />
        </div>

        {/* TODO: check none field errors from backend */}

        {/* TODO: remember me checkbox here */}

        {/* Link to forget password page "/auth/forget-pass" 
            +  Remember me checkbox (process in django)
        */}
        <div className="flex justify-between">
          {/* <LinkButton
        href={'auth/forget-pass'}
        text={t("auth.dialog.forget-pass")}
        /> */}
          <a href="auth/forget-pass" className="text-(--link)">
            {t("auth.dialog.forget-pass")}
          </a>
        </div>

        {/* TODO: django methods test*/}
        {/* Submit + login with google buttons  */}
        <div dir="ltr" className="flex justify-between mb-3 pt-3">
          {/* Google  */}
          <ActionButton
            type="button"
            variant="google"
            onClick={handleGoogleLogin}
            disabled={form.processing}
          >
            {t("auth.dialog.google-login")}
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

        {/* Guide dialog for signup  */}
        <div className="py-3">
          {t("auth.dialog.link-signup")}
          📝
          <a href="/auth/signup" className="text-(--link)">
            {t("auth.dialog.title-signup")}
          </a>
        </div>
      </form>
    </div>
  );
}
