import 'rxjs/add/operator/switchMap';
import { Component}        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Liige }         from '../_models/liige';
import { AdminStartService }  from '../_services/admin-start.service';
import { FilterService } from '../../_services/filter.service';
import { Filter } from '../../_models/filtersaldo';
import { OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'saldo',
  templateUrl: './saldo.component.html'
})
export class SaldoComponent implements OnInit {
  liige: Liige;
  liikmed: Liige[];
  public rowsOnPage = 10;
public sortBy = "lastname";
public sortOrder = "asc";
// Redux based variables
filters: Observable<Array<Filter>>;
display:{};
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private adminStartService: AdminStartService,
    private filterService: FilterService
  ) {
    this.filters = filterService.filters ;
    this.display=Object.keys(this.filters).filter(key=> this.filters[key]);

  }

  ngOnInit(): void {
this.getLiikmed();
  }
  getLiikmed(): void {
	this.adminStartService.getLiikmed().then(returnedliikmed => {
    this.liikmed = returnedliikmed;
     console.log(this.liikmed);
  });

	}
}
