var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FilterService } from '../../_services/filter.service';
var SaldoFilterComponent = (function () {
    function SaldoFilterComponent(filterService) {
        this.filterService = filterService;
        this.active = true;
        this.deactive = true;
        this.mahakantud = false;
        this.filters = filterService.filters;
    }
    SaldoFilterComponent.prototype.updateCheckedOptions = function () {
        this.filterService.setSaldoFilters({ "active": this.active, "deactive": this.deactive, "mahakantud": this.mahakantud });
    };
    SaldoFilterComponent.prototype.ngOnInit = function () {
        this.subscription = this.filters
            .subscribe(function (filters) {
            console.log(filters);
        }, function (error) {
            // Do something with error
        });
        this.updateCheckedOptions();
    };
    SaldoFilterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SaldoFilterComponent = __decorate([
        Component({
            selector: 'saldo-filter',
            templateUrl: './saldo-filter.component.html',
            providers: [FilterService],
        }),
        __metadata("design:paramtypes", [FilterService])
    ], SaldoFilterComponent);
    return SaldoFilterComponent;
}());
export { SaldoFilterComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/saldofilter/saldo-filter.component.js.map