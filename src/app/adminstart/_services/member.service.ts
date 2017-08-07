import { Injectable }  from '@angular/core';
import {  Http, Headers, RequestOptions, Response } from '@angular/http';
import { memberStatus, memberType } from '../add-member/data.model';
import { Observable } from 'rxjs'
import { Member } from '../../_models/member';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class MemberService {
private statusUrl='http://localhost:3010/api/v1/statuses' ;
private typeUrl ='http://localhost:3010/api/v1/types';
private saveMemberUrl ='http://localhost:3010/api/v1/liikmed';
private headers = new Headers({'Content-Type': 'application/json'});
private options = new RequestOptions({ headers: this.headers });

constructor (private http:Http ){}

getStatuses():Promise <memberStatus[]>{
return this.http.get(this.statusUrl)
          .toPromise()
          .then(response => response.json() as memberStatus[])
          .catch(this.handleError);

}


getTypes():Promise <memberType[]>{
  return this.http.get(this.typeUrl)
    .toPromise()
    .then(response => response.json() as memberType[] )
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


saveMember(member:Member):Promise<Member>{
  return this.http.post(this.saveMemberUrl, member, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleError)
}
private extractData(res: Response) {
let body = res.json();
    return body.data || {};
}

}
