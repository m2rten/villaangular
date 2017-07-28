"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var admin_start_service_1 = require("./adminstart/admin-start.service");
var admin_start_component_1 = require("./adminstart/admin-start.component");
var app_routing_module_1 = require("./app-routing.module");
var angular2_datatable_1 = require("angular2-datatable");
var header_component_1 = require("./layout/header/header.component");
var saldo_component_1 = require("./adminstart/saldo/saldo.component");
var saldo_filter_component_1 = require("./adminstart/saldofilter/saldo-filter.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, angular2_datatable_1.DataTableModule],
        declarations: [app_component_1.AppComponent, admin_start_component_1.AdminStartComponent, header_component_1.HeaderComponent, saldo_component_1.SaldoComponent, saldo_filter_component_1.SaldoFilterComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [admin_start_service_1.AdminStartService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map