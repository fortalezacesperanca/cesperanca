import type { Datetime } from '../view/util/date.util';

export type EventType =
  | 'common'
  | 'variant'
  | 'special'
  | 'teen'
  | 'men'
  | 'women'
  | 'kids';

export namespace UiModel {
  export class Event {
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

    private constructor(props: Event) {
      Object.assign(this, props);
    }
    static fromDomain(domain: Model.Event) {
      return new Event({
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

  export class Agenda {
    dayOfWeek: string;
    time: string;
    image: string;
    name: string;
    description: string;
    longDescription: string;
    eventType: EventType;

    private constructor(props: Agenda) {
      Object.assign(this, props);
    }
    static fromDomain(domain: Model.Agenda) {
      return new Agenda({
        dayOfWeek: domain.dayOfWeek,
        time: domain.time,
        image: domain.image,
        name: domain.name,
        description: domain.description,
        longDescription: domain.longDescription,
        eventType: domain.eventType,
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

  export type Agenda = {
    dayOfWeek: string;
    time: string;
    image: string;
    name: string;
    description: string;
    longDescription: string;
    eventType: EventType;
  };

  export class GroupedAgenda {
    constructor(
      public dayOfWeek: string,
      public events: Agenda[],
    ) {}
  }

  /**
   * Schedule Agenda
   */
  export class Event {
    date: Datetime;
    time: Datetime;
    name: string = '';
    description: string = '';
    longDescription: string = '';
    address: string = '';
    image: string = '';
    eventType: EventType = 'common';
    isEnabled: boolean = true;
    constructor(props?: Partial<Event>) {
      Object.assign(this, props);
    }
  }
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
