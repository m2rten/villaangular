import 'rxjs/add/operator/switchMap';
import { Component, ChangeDetectorRef, ApplicationRef, NgZone }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChangeDetectionStrategy,  SimpleChanges } from '@angular/core';
import { Location }                 from '@angular/common';
import { Liige }         from '../_models/liige';
import { AdminStartService }  from '../_services/admin-start.service';
import { FilterService } from '../../_services/filter.service';
import { Filter } from '../../_models/filtersaldo';
import { OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription'
import { UserService } from '../../auth/user.service'
import { MdDialog, MdDialogRef} from '@angular/material';
import { DialogResultExampleDialog } from './DialogResultExampleDialog';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'saldo',
  templateUrl: './saldo.component.html',
//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaldoComponent implements OnInit {
  liige: Liige;
//  liikmed: Liige[];
  public rowsOnPage = 10;
public sortBy = "lastname";
public sortOrder = "asc";
private subscription : Subscription;
private selectedOption:string;

teststring = "Test"
// Redux based variables
filters: Observable<Array<Filter>>;
display:{};
liikmed : Observable<Liige[]> ;
canEditUsers:boolean;

  constructor(private userService:UserService, public dialog: MdDialog, private route: ActivatedRoute,    private location: Location,    private adminStartService: AdminStartService,
    private filterService: FilterService, private zone: NgZone, private ref : ChangeDetectorRef, private appRef: ApplicationRef )
     {
    this.filters = filterService.filters ;
    this.display=Object.keys(this.filters).filter(key=> this.filters[key]);
    this.subscription = adminStartService.memberAnnounced$.subscribe(
       member => {
         console.log(member);
setTimeout(
      ()=>this.liikmed =   this.getLiikmed(), 0)
    });

  }
  openDialog(memberToEdit) {
    console.log(memberToEdit)
    let dialogRef = this.dialog.open(DialogResultExampleDialog, {
    data: memberToEdit,
});
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      if (result=="changed")
{
      setTimeout(
            ()=>this.liikmed =   this.getLiikmed(), 0)
}
    });
  }
  ngOnInit(): void {
    console.log("ngInit");
    this.liikmed =   this.getLiikmed();
    this.canEditUsers = this.userService.getPermission(['Admin']);
   }

  getLiikmed() {
    console.log("getting liikmed");
	return this.adminStartService.getLiikmed()

	}

}
