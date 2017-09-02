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
import { FormBuilder } from '@angular/forms';
import { MemberService } from '../_services/member.service';
import { AdminStartService } from '../_services/admin-start.service';
import { Member } from '../../_models/member';
var AddMemberComponent = (function () {
    function AddMemberComponent(fb, adminStartService, memberService) {
        this.fb = fb;
        this.adminStartService = adminStartService;
        this.memberService = memberService;
        this.savedMember = new Member();
        this.member = new Member();
        this.submitted = false;
    }
    ;
    AddMemberComponent.prototype.announce = function () { this.adminStartService.announceMember("Announcing a POST message"); };
    AddMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getStatuses().then(function (statuses) {
            _this.memberStatuses = statuses;
            _this.member.status = _this.memberStatuses[0].status;
        });
        this.memberService.getTypes().then(function (types) { _this.memberTypes = types; _this.member.type = _this.memberTypes[0].type; });
    };
    AddMemberComponent.prototype.onSubmit = function () {
        var _this = this;
        this.memberService.saveMember(this.member).then(function (response) { return _this.savedMember = response; });
        this.submitted = true;
        this.member = new Member();
        this.announce();
    };
    ;
    AddMemberComponent = __decorate([
        Component({
            selector: 'add-member',
            templateUrl: './add-member.component.html',
            styleUrls: ['./add-member.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, AdminStartService,
            MemberService])
    ], AddMemberComponent);
    return AddMemberComponent;
}());
export { AddMemberComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/add-member/add-member.component.js.map