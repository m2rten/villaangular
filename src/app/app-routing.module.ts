import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminStartComponent }   from './adminstart/admin-start.component';
import {FileUploadComponent } from './adminstart/fileupload/file-upload.component';
import { SisestaNoueComponent } from './nouded/sisesta-noue/sisesta-noue.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'adminstart',  component: AdminStartComponent },
  { path: 'nouded', component: SisestaNoueComponent},
  { path: 'panksisse',  component: FileUploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
