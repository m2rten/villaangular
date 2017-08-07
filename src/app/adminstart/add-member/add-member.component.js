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
import { FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../_services/member.service';
var AddMemberComponent = (function () {
    function AddMemberComponent(fb, memberService) {
        this.fb = fb;
        this.memberService = memberService;
        this.createForm();
    }
    ;
    AddMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getStatuses().then(function (statuses) { return _this.memberStatuses = statuses; });
        this.memberService.getTypes().then(function (types) { return _this.memberTypes = types; });
    };
    AddMemberComponent.prototype.onSubmit = function () {
        var _this = this;
        this.member = this.memberForm.value;
        console.log(this.member);
        console.log(this.memberForm.status);
        this.memberService.saveMember(this.member).then(function (response) { _this.savedMember = response; });
        console.log(this.savedMember);
    };
    AddMemberComponent.prototype.createForm = function () {
        this.memberForm = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            status: [''],
            type: ['']
        });
    };
    AddMemberComponent = __decorate([
        Component({
            selector: 'add-member',
            templateUrl: './add-member.component.html',
        }),
        __metadata("design:paramtypes", [FormBuilder, MemberService])
    ], AddMemberComponent);
    return AddMemberComponent;
}());
export { AddMemberComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/add-member/add-member.component.js.map