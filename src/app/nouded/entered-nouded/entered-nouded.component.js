var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Noue } from '../_models/noue';
var EnteredNoudedComponent = (function () {
    function EnteredNoudedComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Noue)
    ], EnteredNoudedComponent.prototype, "noue", void 0);
    EnteredNoudedComponent = __decorate([
        Component({
            selector: 'entered-nouded',
            templateUrl: './entered-nouded.component.html',
        })
    ], EnteredNoudedComponent);
    return EnteredNoudedComponent;
}());
export { EnteredNoudedComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/nouded/entered-nouded/entered-nouded.component.js.map