/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "../backend/unimate/templates/app.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //TODO: add tokens to manage colors
    extend: {
      // colors: {
      //   // Backgrounds
      //   'bg-primary': 'var(--color-bg-primary)',
      //   'bg-secondary': 'var(--color-bg-secondary)',
      //   'bg-surface': 'var(--color-bg-surface)',
      //   'bg-hover': 'var(--color-bg-hover)',
      //   'bg-disabled': 'var(--color-bg-disabled)',
      //   'bg-overlay': 'var(--color-bg-overlay)',

      //   // Texts
      //   'text-primary': 'var(--color-text-primary)',
      //   'text-secondary': 'var(--color-text-secondary)',
      //   'text-tertiary': 'var(--color-text-tertiary)',
      //   'text-on-primary': 'var(--color-text-on-primary)',
      //   'text-link': 'var(--color-text-link)',
      //   'text-disabled': 'var(--color-text-disabled)',

      //   // Borders
      //   'border-default': 'var(--color-border-default)',
      //   'border-subtle': 'var(--color-border-subtle)',
      //   'border-focus': 'var(--color-border-focus)',
      //   'border-error': 'var(--color-border-error)',

      //   // States
      //   'button-primary-bg': 'var(--color-button-primary-bg)',
      //   'button-primary-text': 'var(--color-button-primary-text)',
      //   'button-secondary-bg': 'var(--color-button-secondary-bg)',
      //   'button-secondary-text': 'var(--color-button-secondary-text)',
      //   'button-danger-bg': 'var(--color-button-danger-bg)',
      //   'button-danger-text': 'var(--color-button-danger-text)',

      //   // Alerts
      //   'alert-info-bg': 'var(--color-alert-info-bg)',
      //   'alert-success-bg': 'var(--color-alert-success-bg)',
      //   'alert-warning-bg': 'var(--color-alert-warning-bg)',
      //   'alert-error-bg': 'var(--color-alert-error-bg)',
      // },
    },
  },
  plugins: [],
};
