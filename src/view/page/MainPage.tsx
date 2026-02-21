// import { PageTemplate } from "../template/PageTemplate";

import { Flex } from '@chakra-ui/react';
import { FlexContainer } from '../components/FlexContainer';
import AgendaWidget from '../widgets/AgendaList/AgendaListWidget.tsx';
import ContactWidgetV3 from '../widgets/Contact/ContactWidgetV3.tsx';
import EventListWidget from '../widgets/EventList/EventListWidget.tsx';
import IntroWidget from '../widgets/Intro/IntroWidget.tsx';
import MapWidget from '../widgets/Map/MapWidget.tsx';
import PixWidgetV3 from '../widgets/Pix/PixWidgetV3.tsx';
import SlidesWidgetV2 from '../widgets/Slides/SlidesWidgetV2.tsx';
import SocialsWidgetV3 from '../widgets/Socials/SocialsWidgetV3.tsx';

export default function MainPage() {
  return (
    <Flex direction={'column'}>
      <FlexContainer maxWidth={'full'}>
        <SlidesWidgetV2 />
      </FlexContainer>
      <FlexContainer>
        <IntroWidget path="db/intro.json" />
      </FlexContainer>
      <Flex
        gap={6}
        direction={'column'}
      >
        <FlexContainer id="agenda">
          <AgendaWidget />
        </FlexContainer>
        <FlexContainer id={'events'}>
          <EventListWidget />
        </FlexContainer>
        <FlexContainer id="map">
          <MapWidget />
        </FlexContainer>
        <FlexContainer id="offering">
          <PixWidgetV3 />
        </FlexContainer>
        <FlexContainer id="socials">
          <SocialsWidgetV3 />
        </FlexContainer>
        <FlexContainer id="contact">
          <ContactWidgetV3 />
        </FlexContainer>
      </Flex>
    </Flex>
  );
}
