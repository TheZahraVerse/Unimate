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
import IconButton from "../buttons/IconButton";

export default function PasswordInput({ placeholder, value , onChange , error }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <BaseInput
        type={show ? "text" : "password"}
        placeholder={placeholder}
        iconName="lock"
        value={value}
        onChange={onChange}
        rightIcon={
          <IconButton 
            iconName={show ? "eyeClosed" : "eyeOpen"} 
            onClick={() => setShow(!show)}
            className="p-0 hover:bg-transparent active:bg-transparent" 
            iconClassName="w-5 h-5 text-gray-500 hover:text-gray-700"
          />
        }

      />

      {error && (
        <p className="text-xs text-red-500 mt-1 px-2">
          {error}
        </p>
      )}
    </div>
  );
}
