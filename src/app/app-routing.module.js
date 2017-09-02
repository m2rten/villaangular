var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminStartComponent } from './adminstart/admin-start.component';
import { FileUploadComponent } from './adminstart/fileupload/file-upload.component';
import { SisestaNoueComponent } from './nouded/sisesta-noue/sisesta-noue.component';
var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'adminstart', component: AdminStartComponent },
    { path: 'nouded', component: SisestaNoueComponent },
    { path: 'panksisse', component: FileUploadComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/app-routing.module.js.map