import { Component } from '@angular/core';
import { OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Filter } from '../../_models/filtersaldo';

import { FilterService } from '../../_services/filter.service';
@Component({
  selector: 'saldo-filter',
  templateUrl:'./saldo-filter.component.html',
  providers: [FilterService],
})
export class SaldoFilterComponent  implements OnInit, OnDestroy {

    // Redux based variables

    filters: Observable<Array<Filter>>;

    private subscription: Subscription;
    active = true;
    deactive = true;
    mahakantud = false;
    constructor(
        private filterService: FilterService
    ) {
      this.filters = filterService.filters;
    }
    updateCheckedOptions(){
          this.filterService.setSaldoFilters({"active":this.active,"deactive":this.deactive,"mahakantud":this.mahakantud});
    }

    ngOnInit() {

      this.subscription = this.filters
                  .subscribe(filters => {
                      console.log(filters);
                  }, error => {
                      // Do something with error
                  });
     this.updateCheckedOptions();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
