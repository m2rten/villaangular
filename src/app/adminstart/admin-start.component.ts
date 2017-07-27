import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Liige }         from '../liige';
import { AdminStartService }  from './admin-start.service';

@Component({
  selector: 'admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css']
})
export class AdminStartComponent implements OnInit {
  liige: Liige;
  liikmed: Liige[];

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