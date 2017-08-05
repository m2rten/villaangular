import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminStartComponent }   from './adminstart/admin-start.component';
import {FileUploadComponent } from './adminstart/fileupload/file-upload.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'adminstart',  component: AdminStartComponent },
  { path: 'panksisse',  component: FileUploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
