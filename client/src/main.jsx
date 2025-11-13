import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
  position="top-center"
  toastOptions={{
    className:
      "bg-white text-primary font-semibold rounded-xl shadow-lg border border-primary/10",
    success: {
      className:
        "bg-primary text-white font-semibold rounded-xl shadow-lg border border-primary/10",
      iconTheme: { primary: "white", secondary: "#0f766e" },
    },
    error: {
      className:
        "bg-red-500 text-white font-semibold rounded-xl shadow-lg border border-red-300",
      iconTheme: { primary: "white", secondary: "#ef4444" },
    },
  }}
/>
  </StrictMode>,
)
