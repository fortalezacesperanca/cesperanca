import { Model } from '../../../domain/model';
import { UiModel } from '../../../domain/uimodel';
import { useJSON } from '../../hooks/useJSON';

/**
 * view
 */
export const useEventListViewModel = ({ json }: any) => {
  var [data] = useJSON<any[]>({ json, defaultValue: [] });

  var events = data.map((item) => new Model.Event(item));

  events = events.sort((a, b) => {
    return a.date?.value.valueOf()! - b.date?.value.valueOf()!;
  });

  events = events.filter((event) => event.isEnabled);

  const uiEvents = events.map((d) => new UiModel.Event(d));

  return { uiEvents };
};
