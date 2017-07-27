"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <style>\n  .navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n\n.navbar-nav li a:hover {\n    color: #1abc9c !important;\n}\n  </style>\n<html>\n<body>\n<div>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <a href=\"#\" class=\"navbar-right\"><img style=\"max-height:50px; margin-right:30px\" src=\"../../assets/villa.jpg\"></a>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\" style=\"color:blue\">Eston Villa</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">Home</a></li>\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Valikud<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n                <li><a ui-sref=\"app.saldo\">Saldo</a></li>\n                <li><a ui-sref=\"app.player\">Player</a></li>\n                <li><a ui-sref=\"app.sisestamine\">N\u00F5ude sisestamine</a></li>\n                <li><a ui-sref=\"app.sulalaekumine\">Sula Laekumine</a></li>\n                <li><a ui-sref=\"app.sulamakse\">Sula Makse</a></li>\n                <li><a ui-sref=\"app.kokku\">Kokkuv\u00F5te</a></li>\n                <li><a ui-sref=\"app.sulaliikumised\">Sula liikumised</a></li>\n                <li><a ui-sref=\"app.pangaliikumised\">Panga liikumised</a></li>\n                <li><a ui-sref=\"app.sisestapank\">Sisesta Pank</a></li>\n                <li><a ui-sref=\"app.saajad\">Saajad</a></li>\n          </ul>\n        </li>\n      </ul>\n  </nav>\n  </div>\n  <div>  <router-outlet></router-outlet></div>\n  </body>\n  </html>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map