var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { filters } from './reducers/saldo-filter.reducer';
import { AppComponent } from './app.component';
import { AdminStartService } from './adminstart/admin-start.service';
import { AdminStartComponent } from './adminstart/admin-start.component';
import { AppRoutingModule } from './app-routing.module';
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule, DataTableModule,
                StoreModule.provideStore({ filters: filters }),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
                MaterialModule, HttpModule],
            declarations: [StatusPipe, AppComponent, AdminStartComponent, HeaderComponent, SaldoComponent, SaldoFilterComponent, FileUploadComponent,
                FileUploadNativeComponent, FileSelectDirective],
            bootstrap: [AppComponent],
            providers: [AdminStartService, FilterService]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/app.module.js.map