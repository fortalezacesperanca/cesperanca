import { Model } from '../../../domain/model';
import { UiModel } from '../../../domain/uimodel';
import { JsonService } from '../../../infra/services/json.service';
import { useAction } from '../../hooks/useAction';

async function listGroups() {
  /**
   * infra
   */
  var service = JsonService.getInstance();
  var data = service
    .getByPath<Model.Group[]>('db/grupos.json')
    .map((i) => new Model.Group(i))
    .filter((i) => i.isEnabled);

  /**
   * view
   */
  return data.map((i) => new UiModel.Group(i));
}

async function getGroupsMeta() {
  var service = JsonService.getInstance();
  return service.getByPath<{ name: string; description: string }>(
    'db/grupos_meta.json',
  );
}

export function useGroupListViewModel() {
  var [groups] = useAction(listGroups, []);
  var [meta] = useAction(getGroupsMeta, {} as any);

  var { name, description } = meta;

  return { groups, name, description };
}
