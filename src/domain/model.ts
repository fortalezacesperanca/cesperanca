import type { Datetime } from '../view/util/date.util';

export namespace UiModel {
  export class EventItem {
    name: string;
    date: string;
    time: string;
    day: string;
    dayOfWeek: string;
    monthName: string;
    description: string;
    image: string;
    longDescription: string;
    address: string;
    eventType: string;
    isEnabled: boolean = true;

    private constructor(props: EventItem) {
      Object.assign(this, props);
    }
    static fromDomain(domain: Model.EventItem) {
      return new EventItem({
        name: domain.name,
        date: domain.date.formatWith('LL'),
        day: domain.date.formatWith('DD'),
        dayOfWeek: domain.date.formatWith('ddd'),
        monthName: domain.date.formatWith('MMM'),
        time: domain.time.formatWith('HH:mm'),
        image: domain.image,
        description: domain.description,
        longDescription: domain.longDescription,
        address: domain.address,
        eventType: domain.eventType,
        isEnabled: domain.isEnabled,
      });
    }
  }
}

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
    date: Datetime;
    // dateCustom:
    //   | {
    //       day: string;
    //       dayOfWeek: string;
    //       month: string;
    //     }
    //   | undefined;
    // date: string = '';
    // timeRaw: Datetime | undefined;
    time: Datetime;
    // time: string = '';
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
