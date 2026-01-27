import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ThemeProvider } from 'next-themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './view/App.tsx';
import './view/index.css';
import { system } from './view/theme/index';

import { DiContainer } from './main/di/container.ts';
import { DiContext } from './view/contexts/DiContext.ts';

function Main() {
  const diContainer = new DiContainer();

  return (
    <StrictMode>
      <DiContext.Provider value={{ container: diContainer.container }}>
        <ChakraProvider value={system}>
          <Global
            styles={{
              html: {
                width: '100%',
                overflowX: 'hidden',
              },
              body: {
                margin: 0,
                padding: 0,
                width: '100%',
                overflowX: 'hidden',
              },
            }}
          />
          <ThemeProvider attribute="class">
            <App />
          </ThemeProvider>
        </ChakraProvider>
      </DiContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
