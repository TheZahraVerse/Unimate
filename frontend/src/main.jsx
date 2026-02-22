
// * set up and render with django *
// import { App, createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'
// import './App.jsx'
// import "./index.css";
// import "./i18n";


// createInertiaApp({
//   resolve: name => {
//     const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
//     return pages[`./pages/${name}.jsx`]
//   },

//   setup({ el, App, props }) {
//     createRoot(el).render(<App {...props} />)
//   },
// })

// * set up and render without django & props, direct rendering ! *
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);