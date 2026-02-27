/**
 * Email input :
 * styled input for email
 * used when you want to get an email address(auth and profile setting)
 * including input type=email and error handeling with label
 */
import React from 'react'
import BaseInput from './BaseInput';

export default function EmailInput({ value, onChange, error }) {
  return (
    <div className="w-full">
      <BaseInput
        type="email"
        placeholder="Email address"
        icon="✉"
        value={value}
        onChange={onChange}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1 px-2">
          {error}
        </p>
      )}
    </div>
  );
}
