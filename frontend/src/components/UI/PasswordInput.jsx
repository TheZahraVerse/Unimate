/**
 * Password input
 * with show/hide toggle (eye icon)
 * - Built on top of Input or standalone
 * - Handles type="password" ↔ type="text" switching
 * - Error handeling with label
 */
import React from "react";
import { useState } from "react";
import BaseInput from "./BaseInput";

export default function PasswordInput({ placeholder = "Password" }) {
  const [show, setShow] = useState(false);

  return (
    <BaseInput
      type={show ? "text" : "password"}
      placeholder={placeholder}
      icon="🔒"
      rightIcon={
        <span onClick={() => setShow(!show)}>
          {show ? "🙈" : "👁"}
        </span>
      }
    />
  );
}
