import { Injectable }  from '@angular/core';
import {  Http, Headers } from '@angular/http';
import { statuses } from '../add-member/data.model';
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class MemberService {
private villaUrl='http://localhost:3010/api/v1/statuses' ;
private headers = new Headers({'Content-Type': 'application/json'});
constructor (private http:Http ){}

getStatuses():Promise <statuses[]>{
return this.http.get(this.villaUrl)
          .toPromise()
          .then(response => response.json() as statuses[])
          .catch(this.handleError);

}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
