export namespace Model {
  /**
   * Navigation
   */
  export type MenuItem = {
    text: string;
    link: string;
    icon: string;
  };
  export type Menu = MenuItem[];

  /**
   * Social
   */
  export type Social = {
    name: string;
    link: string;
    isEnabled: boolean;
  };

  /**
   * Bank
   */

  export type Pix = {
    key: string;
    bankName: string;
    accountName: string;
  };

  /**
   * Global
   */
  export type Global = {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    socials: Social[];
    pix: Pix;
    meta: {
      description: string;
    };
  };
  /**
   * Config
   */
  export type Config = {
    enableSlides: boolean;
    enableAgenda: boolean;
    enableAgendaV2: boolean;
    enableEvents: boolean;
    enableEventsV2: boolean;
    enableMap: boolean;
    enableContact: boolean;
    enablePhotoGrid: boolean;
    enableOffering: boolean;
    enableQuote: boolean;
    enableIntro: boolean;
    enableSocials: boolean;
  };

  /**
   * Recurring Agenda
   */

  export type EventType =
    | 'common'
    | 'variant'
    | 'special'
    | 'teen'
    | 'men'
    | 'women'
    | 'kids';

  export type AgendaItem = {
    dayOfWeek: string;
    time: string;
    eventName: string;
    description: string;
    eventType: EventType;
  };
  export type Agenda = AgendaItem[];

  export class GroupedAgenda {
    constructor(
      public dayOfWeek: string,
      public events: AgendaItem[],
    ) {}
  }

  /**
   * Schedule Agenda
   */
  export type EventItem2 = {
    date: string;
    time: string;
    name: string;
    description: string;
    longDescription: string;
    address: string;
    image: string;
    eventType: EventType;
    isEnabled: boolean;
  };
  export class EventItem {
    date: string = '';
    time: string = '';
    name: string = '';
    description: string = '';
    longDescription: string = '';
    address: string = '';
    image: string = '';
    eventType: EventType = 'common';
    isEnabled: boolean = true;
    constructor(props?: Partial<EventItem>) {
      Object.assign(this, props);
    }
  }
  export type Events = EventItem[];

  /**
   *
   */
  export type Photos = string[];

  /**
   *
   */
  export type Quote = {
    content: string;
    caption: string;
  };
  /**
   *
   */
  export type Intro = {
    title: string;
    content: string;
    contentList: string[];
  };
}
