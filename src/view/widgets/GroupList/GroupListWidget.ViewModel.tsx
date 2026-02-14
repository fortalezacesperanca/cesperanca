import { Model } from '../../../domain/model';
import { UiModel } from '../../../domain/uimodel';
import { useJSON } from '../../hooks/useJSON';

export class JSONData {
  description: string = '';
  data: any[] = [];
}

export function useGroupListViewModel({ json }: { json: string }) {
  var [raw] = useJSON<JSONData>({ json, defaultValue: new JSONData() });

  const description = raw.description;

  const groups = raw.data
    .map((i) => new Model.Group(i))
    .filter((i) => i.isEnabled)
    .map((i) => new UiModel.Group(i));

  return { groups, description };
}
