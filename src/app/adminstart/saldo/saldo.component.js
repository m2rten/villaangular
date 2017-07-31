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
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdminStartService } from '../admin-start.service';
import { FilterService } from '../../_services/filter.service';
var SaldoComponent = (function () {
    function SaldoComponent(route, location, adminStartService, filterService) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.adminStartService = adminStartService;
        this.filterService = filterService;
        this.rowsOnPage = 10;
        this.sortBy = "lastname";
        this.sortOrder = "asc";
        this.filters = filterService.filters;
        console.log(this.filters);
        this.display = Object.keys(this.filters).filter(function (key) { return _this.filters[key]; });
    }
    SaldoComponent.prototype.ngOnInit = function () {
        console.log("AdminStartComponent init");
        this.getLiikmed();
    };
    SaldoComponent.prototype.getLiikmed = function () {
        var _this = this;
        this.adminStartService.getLiikmed().then(function (returnedliikmed) { return _this.liikmed = returnedliikmed; });
        console.log(this.liikmed);
    };
    SaldoComponent = __decorate([
        Component({
            selector: 'saldo',
            templateUrl: './saldo.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Location,
            AdminStartService,
            FilterService])
    ], SaldoComponent);
    return SaldoComponent;
}());
export { SaldoComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/saldo/saldo.component.js.map