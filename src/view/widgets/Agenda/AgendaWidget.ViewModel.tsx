import { Model, UiModel } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';

export function useAgendaListViewModel({ json }: { json: string }) {
  var [agenda] = useJSON<Model.Agenda[]>({ json: json, defaultValue: [] });

  // const groupedAgenda = groupBy<Model.Agenda>(agenda, 'dayOfWeek').map(
  //   (item) => {
  //     return new Model.GroupedAgenda(item[0], item[1]);
  //   },
  // );

  const uiAgenda = agenda.map((d) => UiModel.Agenda.fromDomain(d));

  return { uiAgenda };
}
