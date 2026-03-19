// setup inertia app
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import './index.css'

createInertiaApp({
  title: (title) => `${title} - LMS`,
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx')
    return pages[`./pages/${name}.jsx`]().then(module => {
      return module.default
    })
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})