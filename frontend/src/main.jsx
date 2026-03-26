// setup inertia app
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

createInertiaApp({
  title: (title) => `${title} Unimate`,
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx')
    return pages[`./pages/${name}.jsx`]().then(module => {
      return module.default
    })
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <LanguageProvider>
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      </LanguageProvider>
    )
  },
})