var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var MemberService = (function () {
    function MemberService(http) {
        this.http = http;
        this.villaUrl = 'http://localhost:3010/api/v1/statuses';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    MemberService.prototype.getStatuses = function () {
        return this.http.get(this.villaUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MemberService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MemberService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], MemberService);
    return MemberService;
}());
export { MemberService };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/_services/member.service.js.map