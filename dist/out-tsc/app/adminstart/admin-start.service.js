var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import 'rxjs/add/operator/toPromise';
var AdminStartService = (function () {
    function AdminStartService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.villaUrl = 'http://localhost:3010/api/v1/saldo';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    AdminStartService.prototype.getLiikmed = function () {
        return this.http.get(this.villaUrl)
            .toPromise()
            .then(function (response) { console.log(response.json()); return response.json(); })
            .catch(this.handleError);
    };
    AdminStartService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AdminStartService = __decorate([
        NgModule({
            imports: [DataTableModule]
        }),
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AdminStartService);
    return AdminStartService;
}());
export { AdminStartService };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/admin-start.service.js.map