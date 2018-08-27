import {Pipe} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/fr';


@Pipe({
  name: 'monthName'
})
export class monthName {
  transform(value, args) {
    var lang = moment().locale('fr);
    return lang.localeData().months(moment([2012, value - 1]));
  }
}
