import { Model } from '../../../domain/model';
import { UiModel } from '../../../domain/uimodel';
import { useJSONData } from '../../hooks/useJSON';

export function useGroupListViewModel() {
  var data = useJSONData<Model.Group[]>('db/grupos.json', []);
  var meta = useJSONData<{ name: string; description: string }>(
    'db/grupos_meta.json',
    [],
  );

  var { name, description } = meta;

  const groups = data
    .map((i) => new Model.Group(i))
    .filter((i) => i.isEnabled)
    .map((i) => new UiModel.Group(i));

  return { groups, name, description };
}
