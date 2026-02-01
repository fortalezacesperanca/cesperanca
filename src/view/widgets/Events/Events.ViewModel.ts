import { Model, UiModel } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';
import { Datetime } from '../../util/date.util';

const json = 'db/events.json';

export const useEventListViewModel = () => {
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

    return new Model.EventItem({
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

  const uiEvents = events.map((d) => UiModel.EventItem.fromDomain(d));

  return { uiEvents };
};
