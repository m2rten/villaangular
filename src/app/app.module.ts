import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { MaterialModule} from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { filters } from './reducers/saldo-filter.reducer';
import { AppComponent }  from './app.component';
import { AdminStartService } from './adminstart/admin-start.service';
import { AdminStartComponent } from './adminstart/admin-start.component';
import { AppRoutingModule }     from './app-routing.module';
import { DataTableModule } from 'angular2-datatable';
import { HeaderComponent } from './layout/header/header.component';
import { SaldoComponent } from './adminstart/saldo/saldo.component';
import { FileUploadComponent } from './adminstart/fileupload/file-upload.component';
import { FileUploadNativeComponent } from './adminstart/file-upload-native/file-upload-native.component';
import { SaldoFilterComponent } from './adminstart/saldofilter/saldo-filter.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { StatusPipe } from './statuspipe';
//import { CampaignComponent } from './resources/campaign/campaign.component';
//import { CampaignCountComponent } from './resources/campaign/count.component';

import { FilterService } from './_services/filter.service';
//import { campaigns } from './_reducers/campaign.reducer';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule,  FormsModule, DataTableModule,
  StoreModule.provideStore({ filters}),
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
  MaterialModule,     HttpModule],
  declarations: [ StatusPipe, AppComponent, AdminStartComponent, HeaderComponent, SaldoComponent, SaldoFilterComponent, FileUploadComponent,
    FileUploadNativeComponent, FileSelectDirective],
  bootstrap:    [ AppComponent],
  providers:    [AdminStartService,  FilterService]
})
export class AppModule { }
