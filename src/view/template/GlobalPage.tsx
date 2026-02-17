import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import { useHashScroll, useScrollToTop } from '../routes/routes';

export type OutletContext = {
  pageRef: React.Ref<HTMLDivElement>;
};

export function GlobalPage() {
  const pageRef = useRef(null);
  useScrollToTop({ ref: pageRef });
  useHashScroll();

  return (
    <>
      <Box>
        <ScrollRestoration />
        <Outlet context={{ pageRef }} />
      </Box>
    </>
  );
}
