import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {LoadingProvider} from "./contexts/LoadingProvider.tsx";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme/theme.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LoadingProvider>
          <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
      </LoadingProvider>
  </StrictMode>,
)
