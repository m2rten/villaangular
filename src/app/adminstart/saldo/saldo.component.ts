import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Liige }         from '../../liige';
import { AdminStartService }  from '../admin-start.service';

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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private adminStartService: AdminStartService
  ) {}

  ngOnInit(): void {
    console.log("AdminStartComponent init");
this.getLiikmed();
  }
  getLiikmed(): void {
	this.adminStartService.getLiikmed().then(returnedliikmed => this.liikmed = returnedliikmed);
	  console.log(this.liikmed);
	}
}
