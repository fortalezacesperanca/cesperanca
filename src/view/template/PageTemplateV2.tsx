import { Box, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import type { Model } from '../../domain/model';
import { CustomLogo } from '../components/custom/CustomLogo';
import { FlexContainer } from '../components/FlexContainer';
import { useJSON } from '../hooks/useJSON';
import { useHashScroll, useScrollToTop } from '../routes/routes';
import { BottomBarWidget } from '../widgets/BottomBar/BottomBarWidget';
import { FooterWidget } from '../widgets/Footer/FooterWidget';
import { HeaderWidget } from '../widgets/Header/HeaderWidget';
import { NavigationWidget } from '../widgets/Navigation/NavigationWidget';
import { NavigationTopWidget } from '../widgets/NavigationTop/NavigationTopWidget';

type PageTemplateV2 = {};

export const PageTemplateV2 = ({}: PageTemplateV2) => {
  const height = '100dvh';

  const [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  const fixedBottomHeight = useBreakpointValue({
    base: '72px',
    md: '0px',
    lg: '0px',
    xl: '0px',
    '2xl': '0px',
  });

  const pageRef = useRef(null);
  useScrollToTop({ ref: pageRef });
  useHashScroll();

  return (
    <Flex
      minH={height}
      direction={'column'}
      overflow={'hidden'}
    >
      <Grid>
        <Flex
          direction={'column'}
          height={`calc(${height} - ${fixedBottomHeight})`}
          overflow={'auto'}
          ref={pageRef}
        >
          <Box
            as="header"
            id={'top'}
          >
            <Flex direction={'column'}>
              <Box>
                <HeaderWidget logo={<CustomLogo title={global.title} />} />
              </Box>
              <Box
                display={{
                  base: 'none',
                  sm: 'none',
                  md: 'block',
                  lg: 'block',
                }}
              >
                <NavigationTopWidget
                  path={'db/navigation_desktop_header.json'}
                />
              </Box>
            </Flex>
          </Box>
          <Box
            as="main"
            id="main"
            py={6}
            flex="1"
          >
            <ScrollRestoration />
            <Outlet />
          </Box>
          <Box as="footer">
            <Box
              display={{
                base: 'none',
                md: 'block',
              }}
            >
              <FlexContainer maxWidth={'full'}>
                <FooterWidget />
              </FlexContainer>
            </Box>
            <BottomBarWidget />
          </Box>
        </Flex>
        <Box zIndex={'sticky'}>
          <Box
            display={{
              base: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
            }}
          >
            <NavigationWidget path="db/navigation_mobile.json" />
          </Box>
        </Box>
      </Grid>
    </Flex>
  );
};
