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
import { Noue } from '../_models/noue';
import { NoudedService } from '../_services/nouded.service';
var SisestaNoueComponent = (function () {
    function SisestaNoueComponent(ns) {
        this.ns = ns;
        this.noue = new Noue();
        this.noue.summa = 45;
        this.liige = { "firstname": "test", "lastname": "best", "id": 12, "status": "student", "type": "active" };
        this.liikmed = [this.liige];
        var kpv = new Date(2017, 12, 12);
        this.enteredNoue = { "maksja": 1, "summa": 12, "tekkekpv": kpv, "kaup": "test" };
    }
    SisestaNoueComponent.prototype.saveNoue = function () {
        this.ns.saveNoue(this.noue);
        console.log("Saving");
        this.enteredNoue.kaup = this.noue.kaup;
        console.log(this.noue);
    };
    SisestaNoueComponent = __decorate([
        Component({
            selector: 'sisesta-noue',
            templateUrl: './sisesta-noue.component.html',
            styleUrls: ['./sisesta-noue.component.css']
        }),
        __metadata("design:paramtypes", [NoudedService])
    ], SisestaNoueComponent);
    return SisestaNoueComponent;
}());
export { SisestaNoueComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/nouded/sisesta-noue/sisesta-noue.component.js.map