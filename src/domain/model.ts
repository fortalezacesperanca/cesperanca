import { Type } from 'class-transformer';
import 'reflect-metadata'; // Required for decorators to work
import { Datetime } from '../view/util/date.util';

/**
 * EventType
 */

export type EventType =
  | 'common'
  | 'variant'
  | 'special'
  | 'teen'
  | 'men'
  | 'women'
  | 'kids';

export namespace Model {
  /**
   * Navigation
   */
  export type MenuItem = {
    text: string;
    link?: string;
    children?: MenuItem[];
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

  export class Consent {
    consent: 'accepted' | 'declined' | 'none' = 'none';
    constructor(consent: 'accepted' | 'declined' | 'none' = 'none') {
      this.consent = consent;
    }
    accept() {
      this.consent = 'accepted';
    }
    decline() {
      this.consent = 'declined';
    }
    none() {
      this.consent = 'none';
    }
  }
  export class Privacy {
    @Type(() => Consent)
    map: Consent = new Consent();

    @Type(() => Consent)
    analytics: Consent = new Consent();
  }
  export class Config {
    @Type(() => Privacy)
    privacy: Privacy = new Privacy();

    async hash() {
      const str = JSON.stringify(this, Object.keys(this).sort());

      // 2. Codificar como UTF-8
      const msgBuffer = new TextEncoder().encode(str);

      // 3. Hash do buffer
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

      // 4. Converter ArrayBuffer para Hex string
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    }
  }

  export class GroupMeta {
    name: string;
    description: string;

    constructor(props: GroupMeta) {
      Object.assign(this, props);
    }
  }

  export class Group {
    name: string;
    dayOfWeek: string;
    frequency: string;
    target: string;
    time: string;
    address: string;
    type: string;
    image: string;
    description: string;
    longDescription: string;
    isEnabled: boolean;

    constructor(props: Group) {
      Object.assign(this, props);
    }
  }

  /**
   * Recurring Agenda
   */

  export class Agenda {
    dayOfWeek: string;
    time: string;
    image: string;
    name: string;
    description: string;
    longDescription: string;
    eventType: EventType;
    isEnabled: boolean;

    constructor(props: Agenda) {
      Object.assign(this, props);
    }
  }

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
    constructor(item?: any) {
      const [day, month, year] = item['date'].split('/');
      const date = new Datetime(`${year}-${month}-${day}`, 'YYYY-MM-DD');

      const [hour, minute] = item['time'].split(':');
      const time = new Datetime(`${hour}-${minute}`, 'HH-mm');

      this.date = date;
      this.time = time;
      this.name = item['name'];
      this.description = item['description'];
      this.longDescription = item['longDescription'];
      this.address = item['address'];
      this.image = item['image'];
      this.eventType = item['eventType'];
      this.isEnabled = item['isEnabled'];
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
