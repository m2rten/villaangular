import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Liige }         from './_models/liige';
import { AdminStartService }  from './_services/admin-start.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css'],
  providers:[AdminStartService]
})
export class AdminStartComponent implements OnInit {
  liige: Liige;
  liikmed = new Array<Liige>() ;
  public rowsOnPage = 10;
  public sortBy = "lastname";
  public sortOrder = "asc";
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private adminStartService: AdminStartService
  ) {

  }

  ngOnInit(): void {
  }
}
