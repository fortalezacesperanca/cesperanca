import type { EventType, Model } from './model';

export namespace UiModel {
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

    constructor(domain: Model.Group) {
      this.name = domain.name;
      this.dayOfWeek = domain.dayOfWeek;
      this.frequency = domain.frequency;
      this.target = domain.target;
      this.time = domain.time;
      this.address = domain.address;
      this.type = domain.type;
      this.image = domain.image;
      this.description = domain.description;
      this.longDescription = domain.longDescription;
      this.isEnabled = domain.isEnabled;
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

    constructor(domain: Model.Agenda) {
      this.dayOfWeek = domain.dayOfWeek;
      this.time = domain.time;
      this.image = domain.image;
      this.name = domain.name;
      this.description = domain.description;
      this.longDescription = domain.longDescription;
      this.eventType = domain.eventType;
    }
  }
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
    eventType: EventType;
    isEnabled: boolean = true;

    constructor(domain: Model.Event) {
      this.name = domain.name;
      this.date = domain.date.formatWith('LL');
      this.day = domain.date.formatWith('DD');
      this.dayOfWeek = domain.date.formatWith('ddd');
      this.monthName = domain.date.formatWith('MMM');
      this.time = domain.time.formatWith('HH:mm');
      this.image = domain.image;
      this.description = domain.description;
      this.longDescription = domain.longDescription;
      this.address = domain.address;
      this.eventType = domain.eventType;
      this.isEnabled = domain.isEnabled;
    }
  }
}
