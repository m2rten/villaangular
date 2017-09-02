var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/switchMap';
import { Component, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdminStartService } from '../_services/admin-start.service';
import { FilterService } from '../../_services/filter.service';
import { UserService } from '../../auth/user.service';
import { MdDialog } from '@angular/material';
import { DialogResultExampleDialog } from './DialogResultExampleDialog';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var SaldoComponent = (function () {
    function SaldoComponent(userService, dialog, route, location, adminStartService, filterService, zone, ref, appRef) {
        var _this = this;
        this.userService = userService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.adminStartService = adminStartService;
        this.filterService = filterService;
        this.zone = zone;
        this.ref = ref;
        this.appRef = appRef;
        //  liikmed: Liige[];
        this.rowsOnPage = 10;
        this.sortBy = "lastname";
        this.sortOrder = "asc";
        this.teststring = "Test";
        this.filters = filterService.filters;
        this.display = Object.keys(this.filters).filter(function (key) { return _this.filters[key]; });
        this.subscription = adminStartService.memberAnnounced$.subscribe(function (member) {
            console.log(member);
            setTimeout(function () { return _this.liikmed = _this.getLiikmed(); }, 0);
        });
    }
    SaldoComponent.prototype.openDialog = function (memberToEdit) {
        var _this = this;
        console.log(memberToEdit);
        var dialogRef = this.dialog.open(DialogResultExampleDialog, {
            data: memberToEdit,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
            if (result == "changed") {
                setTimeout(function () { return _this.liikmed = _this.getLiikmed(); }, 0);
            }
        });
    };
    SaldoComponent.prototype.ngOnInit = function () {
        console.log("ngInit");
        this.liikmed = this.getLiikmed();
        this.canEditUsers = this.userService.getPermission(['Admin']);
    };
    SaldoComponent.prototype.getLiikmed = function () {
        console.log("getting liikmed");
        return this.adminStartService.getLiikmed();
    };
    SaldoComponent = __decorate([
        Component({
            selector: 'saldo',
            templateUrl: './saldo.component.html',
        }),
        __metadata("design:paramtypes", [UserService, MdDialog, ActivatedRoute, Location, AdminStartService,
            FilterService, NgZone, ChangeDetectorRef, ApplicationRef])
    ], SaldoComponent);
    return SaldoComponent;
}());
export { SaldoComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/saldo/saldo.component.js.map