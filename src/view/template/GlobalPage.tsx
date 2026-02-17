import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { Outlet } from 'react-router';
import { useHashScroll, useScrollToTop } from '../routes/routes';

export function GlobalPage() {
  const pageRef = useRef(null);
  useScrollToTop({ ref: pageRef });
  useHashScroll();

  // const {
  //   setPrivacyAccepted,
  //   setPrivacyDeclined,
  //   setPrivacyPostpone,
  //   showPrivacyBanner,
  // }: any = useConfigContext();

  // const { key } = useLocation();

  return (
    <>
      {/* <PrivacyModal
        key={key}
        onDecline={() => setPrivacyDeclined()}
        onCancel={() => setPrivacyPostpone()}
        onAccept={() => setPrivacyAccepted()}
        open={showPrivacyBanner}
      /> */}
      <Box ref={pageRef}>
        <Outlet />
      </Box>
    </>
  );
}
