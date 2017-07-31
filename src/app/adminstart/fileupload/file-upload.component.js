var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
// const URL = '/api/';
var URL = 'http://localhost:3010/api/v1/upload';
var FileUploadComponent = (function () {
    function FileUploadComponent() {
        this.successMessage = '';
        this.uploader = new FileUploader({ url: URL });
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    };
    FileUploadComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        //let data = JSON.parse(response); //success server response
        console.log("Upload success");
        console.log(response);
        console.log(status);
        this.successMessage = "Fail on serverisse üles laetud";
    };
    FileUploadComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    FileUploadComponent = __decorate([
        Component({
            selector: 'file-upload',
            templateUrl: './file-upload.component.html'
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}());
export { FileUploadComponent };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/fileupload/file-upload.component.js.map