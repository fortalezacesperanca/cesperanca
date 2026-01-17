// import { PageTemplate } from "../template/PageTemplate";

import { Flex } from '@chakra-ui/react';
import type { Model } from '../../domain/model';
import { FlexContainer } from '../components/FlexContainer';
import { useJSON } from '../hooks/useJSON';
import AgendaWidgetV3 from '../widgets/Agenda/AgendaWidgetV3.tsx';
import ContactWidgetV3 from '../widgets/Contact/ContactWidgetV3.tsx';
import EventsWidgetV3 from '../widgets/Events/EventsWidgetV3.tsx';
import IntroWidget from '../widgets/Intro/IntroWidget.tsx';
import MapWidgetV3 from '../widgets/Map/MapWidgetV3.tsx';
import PixWidgetV3 from '../widgets/Pix/PixWidgetV3.tsx';
import QuoteWidget from '../widgets/QuoteWidget/QuoteWidget.tsx';
import SlidesWidgetV2 from '../widgets/Slides/SlidesWidgetV2.tsx';
import SocialsWidgetV3 from '../widgets/Socials/SocialsWidgetV3.tsx';

// const AgendaWidgetV2 = lazy(
//   () => import('../widgets/Agenda/AgendaWidgetV2.tsx'),
// );
// const AgendaWidget = lazy(() => import('../widgets/Agenda/AgendaWidget.tsx'));
// const ContactWidget = lazy(
//   () => import('../widgets/Contact/ContactWidget.tsx'),
// );
// const EventsWidget = lazy(() => import('../widgets/Events/EventsWidget.tsx'));
// const EventsWidgetV2 = lazy(
//   () => import('../widgets/Events/EventsWidgetV2.tsx'),
// );
// const IntroWidget = lazy(() => import('../widgets/Intro/IntroWidget.tsx'));
// const MapWidget = lazy(() => import('../widgets/Map/MapWidget.tsx'));
// const PixWidget = lazy(() => import('../widgets/Pix/PixWidget.tsx'));
// const QuoteWidget = lazy(
//   () => import('../widgets/QuoteWidget/QuoteWidget.tsx'),
// );
// const SocialsWidget = lazy(
//   () => import('../widgets/Socials/SocialsWidget.tsx'),
// );

export default function MainPage() {
  var [config] = useJSON<Model.Config>({
    path: 'db/config.json',
    defaultValue: {},
  });

  return (
    <Flex direction={'column'}>
      {config.enableSlides && (
        <FlexContainer maxWidth={'full'}>
          <SlidesWidgetV2 path={'db/slide.json'} />
        </FlexContainer>
      )}
      {config.enableIntro && (
        <FlexContainer>
          <IntroWidget path="db/intro.json" />
        </FlexContainer>
      )}
      {config.enableQuote && (
        <FlexContainer justifyContent={'center'}>
          <QuoteWidget
            path="db/quotes.json"
            index={0}
          />
        </FlexContainer>
      )}
      {/* <FlexContainer hidden={ !config.enablePhotoGrid }>
        <PhotoGridWidgetURL path="db/photo_grid_instagram.json" />

        <CallToAction
          title={ "Veja mais em nosso Instagram" }
          buttonText={ `@${global?.socials?.instagram?.name}` }
          buttonIcon={ <RiInstagramFill /> }
          buttonLink={ global?.socials?.instagram?.link }
        />
      </FlexContainer> */}
      <Flex
        gap={6}
        direction={'column'}
      >
        {config.enableAgenda && (
          <FlexContainer id="agenda">
            <AgendaWidgetV3 json="db/agenda_cultos.json" />
          </FlexContainer>
        )}
        {config.enableEvents && (
          <FlexContainer id={'events'}>
            <EventsWidgetV3 json="db/events.json" />
          </FlexContainer>
        )}
        {config.enableMap && (
          <FlexContainer id="map">
            <MapWidgetV3 />
          </FlexContainer>
        )}
        {config.enableOffering && (
          <FlexContainer id="offering">
            <PixWidgetV3 />
          </FlexContainer>
        )}
        {config.enableSocials && (
          <FlexContainer id="socials">
            <SocialsWidgetV3 />
          </FlexContainer>
        )}
        {config.enableContact && (
          <FlexContainer id="contact">
            <ContactWidgetV3 />
          </FlexContainer>
        )}
      </Flex>
    </Flex>
  );
}
