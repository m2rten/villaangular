var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { AdminStartService } from './_services/admin-start.service';
import { AdminStartComponent } from './admin-start.component';
import { StatusPipe } from './statuspipe';
import { SaldoComponent } from '../adminstart/saldo/saldo.component';
import { FileUploadComponent } from '../adminstart/fileupload/file-upload.component';
import { FileUploadNativeComponent } from '../adminstart/file-upload-native/file-upload-native.component';
import { SaldoFilterComponent } from '../adminstart/saldofilter/saldo-filter.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { AddMemberComponent } from './add-member/add-member.component';
import { MaterialModule } from '@angular/material';
import { DataTableModule } from 'angular2-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberService } from './_services/member.service';
import { AdminStartService } from './_services/admin-start.service';
import { DialogResultExampleDialog } from '../adminstart/saldo/DialogResultExampleDialog';
//import { filters } from '../_reducers/saldo-filter.reducer';
//import { FilterService } from '../_services/filter.service';
var AdminStartModule = (function () {
    function AdminStartModule() {
    }
    AdminStartModule = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule, MaterialModule, DataTableModule, ReactiveFormsModule],
            declarations: [StatusPipe, AdminStartComponent, SaldoComponent, FileUploadComponent, FileUploadNativeComponent,
                SaldoFilterComponent, FileSelectDirective, AddMemberComponent, DialogResultExampleDialog],
            providers: [MemberService, AdminStartService],
            entryComponents: [DialogResultExampleDialog],
            exports: [AdminStartComponent],
        })
    ], AdminStartModule);
    return AdminStartModule;
}());
export { AdminStartModule };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/admin-start.module.js.map