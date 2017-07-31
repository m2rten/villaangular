import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Liige } from './liige';
import { FilterService } from './_services/filter.service';
import { Filter } from './_models/filtersaldo';
@Pipe({
  name: 'statusPipe',
  pure: false })

export class StatusPipe implements PipeTransform {

  filters: Observable<Array<Filter>>;
  statusToDisplay:[];
    constructor(
      private filterService: FilterService
    ) {
      this.filters = filterService.filters ;

    }

  transform(liikmed: Liige[]) {
    this.filters.subscribe(res => {
   console.log(res[0]);
   this.statusToDisplay=Object.keys(res[0]).filter(key=>res[0][key]);
});
    console.log("transform");
    console.log(this.statusToDisplay);
    return liikmed.filter(liige =>this.statusToDisplay.indexOf(liige.status)>-1);
  }
}
