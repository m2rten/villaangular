import { Component } from '@angular/core';
import {FileUploader, FileItem, ParsedResponseHeaders} from "ng2-file-upload";
// const URL = '/api/';
const URL = 'http://localhost:3010/api/v1/upload' ;

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
  successMessage = '';
  public uploader:FileUploader = new FileUploader({url: URL});
  ngOnInit(): void {
          this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
          this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
      }
  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
      //let data = JSON.parse(response); //success server response
      console.log("Upload success");
      console.log(response);
      console.log(status);
      this.successMessage = "Fail on serverisse üles laetud";
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
      let error = JSON.parse(response); //error server response
      console.log(error);
  }
}
