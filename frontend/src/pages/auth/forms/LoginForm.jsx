/**
 * Login form
 * Handles user authentication (email + password)
 * Used inside AuthPage when in login mode
 * Show "Remember me" checkbox & Forgot password link
 */
import React from "react";
import EmailInput from "../../../components/UI/EmailInput";
import PasswordInput from "../../../components/UI/PasswordInput";
import ActionButton from "../../../components/UI/ActionButton";
import LinkButton from "../../../components/UI/LinkButton";
import { useTranslation } from "react-i18next";
import { useForm } from "@inertiajs/react";

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

  return (
    <div className="text-center text-(--text-on-primary)">
      {/* Intro dialogs  */}
      <p className="py-6">
        <h1 className="font-semibold text-4xl">
          {t("auth.dialog.title-login")}
        </h1>
        <h2 className="pt-4">{t("auth.dialog.intro-login")}</h2>
      </p>

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

        {/* Link to forget password page "/auth/forget-pass" */}
        <div className="mb-6">
          {/* <LinkButton
        href={'auth/forget-pass'}
        text={t("auth.dialog.forget-pass")}
        /> */}
          <a href="auth/forget-pass" className="text-(--link) ps-65">
            {t("auth.dialog.forget-pass")}
          </a>
        </div>

        {/* TODO: Submit button after fixing backend */}
        <div className="mb-3 pt-3">
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
