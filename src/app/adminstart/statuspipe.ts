import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Liige } from './_models/liige';
import { FilterService } from '../_services/filter.service';
import { Filter } from '../_models/filtersaldo';
@Pipe({
  name: 'statusPipe',
  pure: false })

export class StatusPipe implements PipeTransform {

  filters: Observable<Array<Filter>>;
  statusToDisplay:any[];
    constructor(
      private filterService: FilterService
    ) {
      this.filters = filterService.filters ;

    }

  transform(liikmed: Liige[]) {
    this.filters.subscribe(res => {
   this.statusToDisplay=Object.keys(res[0]).filter(key=>res[0][key]);
});

    return liikmed.filter(liige =>this.statusToDisplay.indexOf(liige.status)>-1);
  }
}
