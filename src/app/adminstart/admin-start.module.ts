import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from'@angular/forms';
//import { AdminStartService } from './_services/admin-start.service';
import { AdminStartComponent } from './admin-start.component';
import {StatusPipe } from './statuspipe';
import { SaldoComponent } from '../adminstart/saldo/saldo.component';
import { FileUploadComponent } from '../adminstart/fileupload/file-upload.component';
import { FileUploadNativeComponent } from '../adminstart/file-upload-native/file-upload-native.component';
import { SaldoFilterComponent } from '../adminstart/saldofilter/saldo-filter.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { AddMemberComponent } from './add-member/add-member.component'
import { MaterialModule} from '@angular/material';
import { DataTableModule } from 'angular2-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberService } from './_services/member.service';
import { AdminStartService } from './_services/admin-start.service';
import { DialogResultExampleDialog }from '../adminstart/saldo/DialogResultExampleDialog'
//import { filters } from '../_reducers/saldo-filter.reducer';
//import { FilterService } from '../_services/filter.service';

@NgModule ({

  imports:[CommonModule, FormsModule, MaterialModule, DataTableModule, ReactiveFormsModule],
  declarations: [StatusPipe, AdminStartComponent, SaldoComponent, FileUploadComponent, FileUploadNativeComponent,
  SaldoFilterComponent, FileSelectDirective, AddMemberComponent, DialogResultExampleDialog],
  providers: [MemberService, AdminStartService],
  entryComponents:[DialogResultExampleDialog],
  exports: [AdminStartComponent],
})

export class AdminStartModule {}
