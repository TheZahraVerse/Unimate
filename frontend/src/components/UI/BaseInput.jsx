/**
 * Base input :
 * text field to get any input from user 
 * dynamic to have type, right icon, left icon, pachlor
 */
import React from "react";

export default function BaseInput({ type = "text", placeholder, icon, rightIcon }) {
  return (
    <div className="relative max-w-150 m-5">

      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-200 text-sm px-10 py-2.5 rounded-full
        outline-none placeholder-gray-500
        focus:ring-2 focus:ring-white/60 transition"
      />

      {rightIcon && (
        <div className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2">
          {rightIcon}
        </div>
      )}

    </div>
  );
}