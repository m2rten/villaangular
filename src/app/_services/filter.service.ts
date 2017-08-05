import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Filter } from '../_models/filtersaldo';


import { AppStore } from '../app.store';

@Injectable()
export class FilterService {

    // Redux based variables
  filters: Observable<Array<Filter>>;
    constructor(
        private store: Store<AppStore>
    ){this.filters = store.select('filters');}

    setSaldoFilters(payload)
    {
   return this.store.dispatch({type: 'ADD_FILTERS', payload:[payload]});
  };
}
