import { Container } from '@chakra-ui/react';
import { RouterProvider } from 'react-router/dom';
import { Env } from '../config/env';
import { Model } from '../domain/model';
import { useJSON } from './hooks/useJSON';
import './i18n/i18n';
import { createRouter } from './routes/routes';

function App() {
  Env.init(import.meta.env.VITE_TARGET);
  const router = createRouter({
    basename: Env.getEnv().HOST,
  });

  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  return (
    <>
      <title>{global?.title}</title>
      <meta
        name="description"
        content={global?.meta?.description}
      />
      <Container
        maxWidth={'full'}
        m={0}
        p={0}
        bg={{
          _dark: 'gray.800',
          _light: 'gray.100',
        }}
      >
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
