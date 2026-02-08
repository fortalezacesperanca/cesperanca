import { Model, UiModel } from '../../../domain/model';
import { JsonService } from '../../../infra/services/json.service';
import { useJSON } from '../../hooks/useJSON';
import { Datetime } from '../../util/date.util';

/**
 * infra
 */

export class EventMapper {
  map(item: Record<string, any>) {
    const [day, month, year] = item['date'].split('/');
    const date = new Datetime(`${year}-${month}-${day}`, 'YYYY-MM-DD');

    const [hour, minute] = item['time'].split(':');
    const time = new Datetime(`${hour}-${minute}`, 'HH-mm');

    return new Model.Event({
      date: date,
      time: time,
      name: item['name'],
      description: item['description'],
      longDescription: item['longDescription'],
      address: item['address'],
      image: item['image'],
      eventType: item['eventType'],
      isEnabled: item['isEnabled'],
    });
  }
}

const JSON = 'db/events.json';
export function getEventList() {
  var service = JsonService.getInstance();
  const data = service.getByPath<any[]>(JSON);

  var events = data.map((item) => new EventMapper().map(item));

  events = events.sort((a, b) => {
    return a.date?.value.valueOf()! - b.date?.value.valueOf()!;
  });

  events = events.filter((event) => event.isEnabled);
}

export function getEventByName() {}

/**
 * view
 */
export const useEventListViewModel = ({ json }: any) => {
  var [data] = useJSON<any[]>({ json, defaultValue: [] });

  var events = data.map((item) => {
    /**
     * ideally, this conversion step must be on infra layer
     * but since the json is just key string and value string, this is being done
     * here directly to the domain
     */
    const [day, month, year] = item['date'].split('/');
    const date = new Datetime(`${year}-${month}-${day}`, 'YYYY-MM-DD');

    const [hour, minute] = item['time'].split(':');
    const time = new Datetime(`${hour}-${minute}`, 'HH-mm');

    return new Model.Event({
      date: date,
      time: time,
      name: item['name'],
      description: item['description'],
      longDescription: item['longDescription'],
      address: item['address'],
      image: item['image'],
      eventType: item['eventType'],
      isEnabled: item['isEnabled'],
    });
  });
  events = events.sort((a, b) => {
    return a.date?.value.valueOf()! - b.date?.value.valueOf()!;
  });

  events = events.filter((event) => event.isEnabled);

  const uiEvents = events.map((d) => UiModel.Event.fromDomain(d));

  return { uiEvents };
};
