import { Model } from '../../../domain/model';
import { UiModel } from '../../../domain/uimodel';
import { useJSON } from '../../hooks/useJSON';

export function useAgendaListViewModel({ json }: { json: string }) {
  var [data] = useJSON<any[]>({ json: json, defaultValue: [] });

  // const groupedAgenda = groupBy<Model.Agenda>(agenda, 'dayOfWeek').map(
  //   (item) => {
  //     return new Model.GroupedAgenda(item[0], item[1]);
  //   },
  // );

  const agenda = data.map((r) => new Model.Agenda(r));

  const uiAgenda = agenda.map((a) => new UiModel.Agenda(a));

  return { uiAgenda };
}
