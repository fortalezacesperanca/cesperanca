import { Model } from '../../../domain/model';
import { JSONService } from '../../../infra/services/json.service';
import { useAction } from '../../hooks/useAction';
import { UiModel } from '../../model/uimodel';

async function listGroups() {
  const service = JSONService.getInstance();
  const raw = service.getByPath<any[]>('db/grupos.json');
  const groups = raw.map((i) => new Model.Group(i));

  return groups.map((i) => new UiModel.Group(i));
}

async function getGroupsMeta() {
  const service = JSONService.getInstance();
  const raw = service.getByPath('db/grupos_meta.json');
  return new UiModel.GroupMeta(new Model.GroupMeta(raw));
}

export function useGroupListViewModel() {
  var [groups] = useAction(listGroups, []);
  var [meta] = useAction(getGroupsMeta, {} as any);

  var { name, description } = meta;

  return { groups, name, description };
}
