import { Model } from '../../../domain/model';
import { UiModel } from '../../../domain/uimodel';
import { JSONService } from '../../../infra/services/json.provider';
import { useAction } from '../../hooks/useAction';

async function listGroups() {
  const s = new JSONService();
  var groups = s.getArray('db/grupos.json', Model.Group);

  return groups.map((i) => new UiModel.Group(i));
}

async function getGroupsMeta() {
  const s = new JSONService();
  return s.getObject('db/grupos_meta.json', Model.GroupMeta);
}

export function useGroupListViewModel() {
  var [groups] = useAction(listGroups, []);
  var [meta] = useAction(getGroupsMeta, {} as any);

  var { name, description } = meta;

  return { groups, name, description };
}
