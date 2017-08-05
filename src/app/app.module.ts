import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { MaterialModule} from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { filters } from './_reducers/saldo-filter.reducer';
import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { DataTableModule } from 'angular2-datatable';
import { HeaderComponent } from './layout/header/header.component';


import {  AdminStartModule } from './adminstart/admin-start.module'
import { UserService } from './auth/user.service';
import { FilterService } from './_services/filter.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule,  FormsModule, DataTableModule,
  StoreModule.provideStore({ filters}),
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
  MaterialModule,     HttpModule, AdminStartModule],
  declarations: [ AppComponent, HeaderComponent],
  bootstrap:    [ AppComponent],
  providers:    [ FilterService, UserService]
})
export class AppModule { }
