import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { AdminStartService } from './adminstart/admin-start.service';
import { AdminStartComponent } from './adminstart/admin-start.component';
import { AppRoutingModule }     from './app-routing.module';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule,  FormsModule, DataTableModule],
  declarations: [ AppComponent, AdminStartComponent ],
  bootstrap:    [ AppComponent],
  providers:    [AdminStartService]
})
export class AppModule { }
