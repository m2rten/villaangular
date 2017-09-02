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
import { Headers, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
var AdminStartService = (function () {
    function AdminStartService(http) {
        this.http = http;
        this.villaUrl = 'http://localhost:3010/api/v1/saldo';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        // Observable string sources
        this.memberAnnouncedSource = new BehaviorSubject("dummy");
        //private membersAnnouncedSource = new Subject<Liige[]>();
        // Observable string streams
        this.memberAnnounced$ = this.memberAnnouncedSource.asObservable();
    }
    AdminStartService.prototype.getLiikmed = function () {
        return this.http.get(this.villaUrl)
            .map(this.extractData);
    };
    AdminStartService.prototype.extractData = function (response) {
        var body = response.json(); // parse JSON string into JavaScript objects
        console.log("body:");
        return body;
    };
    // Service message commands
    AdminStartService.prototype.announceMember = function (member) {
        this.memberAnnouncedSource.next(member);
    };
    // announceMembers(members: Liige[]) {
    //   this.membersAnnouncedSource.next(members);
    // }
    AdminStartService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AdminStartService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AdminStartService);
    return AdminStartService;
}());
export { AdminStartService };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/_services/admin-start.service.js.map