import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { MaterialModule} from '@angular/material';

import { AppComponent }  from './app.component';
import { AdminStartService } from './adminstart/admin-start.service';
import { AdminStartComponent } from './adminstart/admin-start.component';
import { AppRoutingModule }     from './app-routing.module';
import { DataTableModule } from 'angular2-datatable';
import { HeaderComponent } from './layout/header/header.component';
import { SaldoComponent } from './adminstart/saldo/saldo.component';
import { SaldoFilterComponent } from './adminstart/saldofilter/saldo-filter.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule,  FormsModule, DataTableModule, MaterialModule],
  declarations: [ AppComponent, AdminStartComponent, HeaderComponent, SaldoComponent, SaldoFilterComponent ],
  bootstrap:    [ AppComponent],
  providers:    [AdminStartService]
})
export class AppModule { }
