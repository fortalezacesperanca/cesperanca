import { Model } from '../../../domain/model';
import { JSONService } from '../../../infra/services/json.service';
import { useAction } from '../../hooks/useAction';
import { UiModel } from '../../model/uimodel';

function listAgenda() {
  const s = JSONService.getInstance();
  const raw = s.getByPath<any[]>('db/agenda_cultos.json');

  const agenda = raw.map((i) => new Model.Agenda(i)).filter((i) => i.isEnabled);
  return agenda.map((a) => new UiModel.Agenda(a));
}

export function useAgendaListViewModel() {
  const [uiAgenda] = useAction(listAgenda, []);

  return { uiAgenda };
}
