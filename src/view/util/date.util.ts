import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.extend(customParseFormat);
dayjs.locale('pt-br');

/**
 * Dayjs Adapter
 */
export class Datetime {
  public datetime: Dayjs;
  constructor(
    public value: string = '',
    public templateFormat: string = '',
  ) {
    this.datetime = dayjs(value, templateFormat);
  }
  formatWith(templateFormat: string) {
    return this.datetime.format(templateFormat);
  }
}
