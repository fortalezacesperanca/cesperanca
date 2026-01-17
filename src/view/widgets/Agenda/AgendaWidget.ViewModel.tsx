import { Model } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';
import { groupBy } from '../../util/util';

export function useAgendaViewModel({ json }: { json: string }) {
  var [agenda] = useJSON<Model.Agenda>({ path: json, defaultValue: [] });

  const groupedAgenda = groupBy<Model.AgendaItem>(agenda, 'dayOfWeek').map(
    (item) => {
      return new Model.GroupedAgenda(item[0], item[1]);
    },
  );

  return { groupedAgenda, agenda };
}
