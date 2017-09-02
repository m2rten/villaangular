var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialogRef } from '@angular/material';
import { MemberService } from '../_services/member.service';
import { Member } from '../../_models/member';
import { AdminStartService } from '../_services/admin-start.service';
var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog(adminStartService, memberService, data, dialogRef) {
        this.adminStartService = adminStartService;
        this.memberService = memberService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.member = new Member();
        this.submitted = false;
        this.savedMember = new Member();
        console.log(data.firstname);
        this.member.firstname = data.firstname;
        this.member.lastname = data.lastname;
        this.member.type = data.type;
        this.member.id = data.maksja;
        this.member.status = data.status;
    }
    DialogResultExampleDialog.prototype.announce = function () {
        this.adminStartService.announceMember("Announcing a POST message");
    };
    DialogResultExampleDialog.prototype.onSubmit = function () {
        var _this = this;
        this.memberService.updateMember(this.member).then(function (response) {
            _this.savedMember = response;
            console.log(_this.savedMember);
        });
        this.submitted = true;
        this.dialogRef.close('changed');
        //  this.announce();
    };
    ;
    DialogResultExampleDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getStatuses().then(function (statuses) { return _this.memberStatuses = statuses; });
        this.memberService.getTypes().then(function (types) { return _this.memberTypes = types; });
    };
    DialogResultExampleDialog = __decorate([
        Component({
            selector: 'dialog-result-example-dialog',
            templateUrl: './dialog-result-example-dialog.html',
        }),
        __param(2, Inject(MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [AdminStartService, MemberService, Object, MdDialogRef])
    ], DialogResultExampleDialog);
    return DialogResultExampleDialog;
}());
export { DialogResultExampleDialog };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/saldo/DialogResultExampleDialog.js.map