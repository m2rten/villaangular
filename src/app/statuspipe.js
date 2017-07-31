var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
import { FilterService } from './_services/filter.service';
var StatusPipe = (function () {
    function StatusPipe(filterService) {
        this.filterService = filterService;
        this.filters = filterService.filters;
    }
    StatusPipe.prototype.transform = function (liikmed) {
        var _this = this;
        this.filters.subscribe(function (res) {
            console.log(res[0]);
            _this.statusToDisplay = Object.keys(res[0]).filter(function (key) { return res[0][key]; });
        });
        console.log("transform");
        console.log(this.statusToDisplay);
        return liikmed.filter(function (liige) { return _this.statusToDisplay.indexOf(liige.status) > -1; });
    };
    StatusPipe = __decorate([
        Pipe({
            name: 'statusPipe',
            pure: false
        }),
        __metadata("design:paramtypes", [FilterService])
    ], StatusPipe);
    return StatusPipe;
}());
export { StatusPipe };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/statuspipe.js.map