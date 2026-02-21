import { Model } from '../../../domain/model';
import { JSONService } from '../../../infra/services/json.provider';
import { useAction } from '../../hooks/useAction';
import { UiModel } from '../../model/uimodel';

async function listEvents() {
  const s = new JSONService();
  let events = s.getArray('db/events.json', Model.Event);

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
