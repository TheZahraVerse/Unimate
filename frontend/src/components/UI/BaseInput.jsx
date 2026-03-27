/**
 * Base input :
 * text field to get any input from user 
 * dynamic to have type, right icon, left/right icon, placeholder , value and onChange method
 * left icon is a kind of icon component calling an icon with its name
 * right icon might be an icon component or an icon button
 */
import React from "react";
import Icon from "../shared/Icon";

export default function BaseInput({ 
  type , placeholder, iconName, rightIcon , value , onChange
}) {

  return (
    <div className="relative max-w-150 m-5 ">

      {/* left icon  */}
      {iconName && (
        <div className="absolute ps-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name = {iconName}/>
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-(--primary)  ps-10 py-2.5 rounded-full
        outline-none placeholder-(--text-secondary)
        focus:ring-2 focus:ring-(--border-focus) transition"
      />

      {/* right icon */}
      {rightIcon && (
        <div className="absolute cursor-pointer inset-e-3 top-1/2 -translate-y-1/2">
          {rightIcon}
        </div>
      )}

    </div>
  );
}