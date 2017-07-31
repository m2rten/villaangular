var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// const URL = '/api/';
var FileUploadNativeComponent = (function () {
    function FileUploadNativeComponent(http) {
        this.http = http;
        this.URL = 'http://localhost:3010/api/v1/upload';
    }
    FileUploadNativeComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new Headers();
            /** No need to include Content-Type in Angular 4 */
            //headers.append('encType', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new RequestOptions({ headers: headers });
            this.http.post("" + this.URL, formData, options)
                .catch(function (error) { return Observable.throw(error); })
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
    };
    FileUploadNativeComponent = __decorate([
        Component({
            selector: 'file-upload-native',
            templateUrl: './file-upload-native.component.html'
        }),
        __metadata("design:paramtypes", [Http])
    ], FileUploadNativeComponent);
    return FileUploadNativeComponent;
}());
export { FileUploadNativeComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/file-upload-native/file-upload-native.component.js.map