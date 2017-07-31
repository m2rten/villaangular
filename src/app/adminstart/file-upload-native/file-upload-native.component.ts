import { Component } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// const URL = '/api/';

@Component({
  selector: 'file-upload-native',
  templateUrl: './file-upload-native.component.html'
})


export class FileUploadNativeComponent {
constructor(private http: Http) { }
URL = 'http://localhost:3010/api/v1/upload' ;
fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        //headers.append('encType', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.URL}`, formData, options)
        //    .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}
}
