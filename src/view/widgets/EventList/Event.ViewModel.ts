import { Model } from '../../../domain/model';
import { JSONService } from '../../../infra/services/json.service';
import { useAction } from '../../hooks/useAction';
import { UiModel } from '../../model/uimodel';

async function listEvents() {
  const s = JSONService.getInstance();
  const raw = s.getByPath<any[]>('db/events.json');
  let events = raw.map((i) => new Model.Event(i));
  events = events
    .sort((a, b) => {
      return a.date?.value.valueOf()! - b.date?.value.valueOf()!;
    })
    .filter((event) => event.isEnabled);

  return events.map((d) => new UiModel.Event(d));
}

/**
 * view
 */
export const useEventListViewModel = () => {
  var [events] = useAction(listEvents, []);

  return { events };
};
