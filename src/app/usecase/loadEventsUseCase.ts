import { injectable } from 'inversify';
import { Model } from '../../domain/model';
import { JsonService } from '../../infra/services/json.service';
import type { IUseCase } from '../iusecase';

@injectable()
export class LoadEventsUseCase implements IUseCase<undefined, Model.Events> {
  execute(): Model.Events {
    const path = 'db/events.json';
    const service = JsonService.getInstance();
    let data = service.getByPath(path) as unknown as Array<any>;
    var events = data.map((item) => {
      // console.log({ item });
      return new Model.EventItem({
        date: item['date'],
        time: item['time'],
        name: item['name'],
        description: item['description'],
        longDescription: item['longDescription'],
        address: item['address'],
        image: item['image'],
        eventType: item['eventType'],
        isEnabled: item['isEnabled'],
      });
    });
    console.log({ events });
    // events.sort((a, b) => {
    //   // Concatena data e hora para criar uma data completa (ex: "2023-10-25T14:30")
    //   // const dateA = new Date(`${a.date}T${a.time}`);
    //   // const dateB = new Date(`${b.date}T${b.time}`);
    //   // const dateA = new Datetime("01/01/2026")
    //   // Ordena de forma ascendente (mais antiga para mais nova)
    //   // return dateA.getTime() - dateB.getTime();
    // });
    return events;
  }
}
