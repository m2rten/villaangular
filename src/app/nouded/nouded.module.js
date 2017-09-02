var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { EnteredNoudedComponent } from './entered-nouded/entered-nouded.component';
import { SisestaNoueComponent } from './sisesta-noue/sisesta-noue.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
var NoudedModule = (function () {
    function NoudedModule() {
    }
    NoudedModule = __decorate([
        NgModule({
            imports: [FormsModule, CommonModule],
            declarations: [EnteredNoudedComponent, SisestaNoueComponent],
        })
    ], NoudedModule);
    return NoudedModule;
}());
export { NoudedModule };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/nouded/nouded.module.js.map