import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { ThemeProvider } from "next-themes"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './view/App.tsx'
import './view/index.css'
import { system } from "./view/theme/index"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={ system }>

      <Global
        styles={ {
          html: {
            width: "100%",
            overflowX: "hidden",
          },
          body: {
            margin: 0,
            padding: 0,
            width: "100%",
            overflowX: "hidden",
          },
        } }
      />
      <ThemeProvider attribute="class">
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
)
