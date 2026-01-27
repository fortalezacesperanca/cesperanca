import { injectable } from 'inversify';
import { Model } from '../../domain/model';
import { JsonService } from '../../infra/services/json.service';
import { Datetime } from '../../view/util/date.util';
import type { IUseCase } from '../iusecase';

export type LoadEventsInput = {
  json: string;
};

export type LoadEventsOutput = Model.Events;

@injectable()
export class LoadEventsUseCase
  implements IUseCase<LoadEventsInput, LoadEventsOutput>
{
  execute(
    input: LoadEventsInput = { json: 'db/events.json' },
  ): LoadEventsOutput {
    const service = JsonService.getInstance();
    let data = service.getByPath(input.json) as unknown as Array<any>;
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
    return events;
  }
}
