import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Liige }         from './_models/liige';
import { AdminStartService }  from './_services/admin-start.service';

@Component({
  selector: 'admin-start',
  templateUrl: './admin-start.component.html'
})
export class AdminStartComponent implements OnInit {
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
this.getLiikmed();
  }
  getLiikmed(): void {
	this.adminStartService.getLiikmed().then(returnedliikmed => this.liikmed = returnedliikmed);
	}
}
