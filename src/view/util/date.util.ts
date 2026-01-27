import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat'; // ES 2015
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.locale('pt-br');

/**
 * Dayjs Adapter
 */
export class Datetime {
  public value: Dayjs;
  constructor(valueString: string = '', templateFormat: string = '') {
    this.value = dayjs(valueString, templateFormat);
  }
  formatWith(templateFormat: string) {
    return this.value.format(templateFormat);
  }
}
