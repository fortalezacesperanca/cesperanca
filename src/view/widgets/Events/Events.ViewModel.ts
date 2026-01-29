import { useEffect } from 'react';
import {
  LoadEventsUseCase,
  type LoadEventsInput,
  type LoadEventsOutput,
} from '../../../app/usecase/loadEventsUseCase';
import { Model, UiModel } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';
import { useUseCase } from '../../hooks/useUseCase';
import { Datetime } from '../../util/date.util';

export const useEventsViewModelDeprecated = ({ json }: any) => {
  let [events, execute] = useUseCase<LoadEventsInput, LoadEventsOutput>(
    LoadEventsUseCase,
  );

  const uiEvents = events.map((d) => UiModel.EventItem.fromDomain(d));

  useEffect(() => {
    execute({ json });
  }, []);

  return { uiEvents };
};
export const useEventsViewModel = ({ json }: any) => {
  var [data] = useJSON<any[]>({ path: json, defaultValue: [] });

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
