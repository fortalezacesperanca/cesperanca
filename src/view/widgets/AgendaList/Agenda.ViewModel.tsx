import { Model } from '../../../domain/model';
import { JSONService } from '../../../infra/services/json.provider';
import { useAction } from '../../hooks/useAction';
import { UiModel } from '../../model/uimodel';

function listAgenda() {
  const service = new JSONService();
  const agenda = service.getArray('db/agenda_cultos.json', Model.Agenda);
  return agenda.filter((i) => i.isEnabled);
}

export function useAgendaListViewModel() {
  const [agenda] = useAction(listAgenda, []);

  const uiAgenda = agenda.map((a) => new UiModel.Agenda(a));

  return { uiAgenda };
}
