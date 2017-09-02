import { Injectable }    from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import {  BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { Liige } from '../_models/liige';

@Injectable()
export class AdminStartService {

private villaUrl = 'http://localhost:3010/api/v1/saldo'
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

   getLiikmed(): Observable<Liige []> {
  return this.http.get(this.villaUrl)
             .map(this.extractData)
}



private extractData(response: Response) {
  let body = response.json(); // parse JSON string into JavaScript objects
  console.log ("body:");
  return body;
}
// Observable string sources
 private memberAnnouncedSource = new BehaviorSubject<string>("dummy");
 //private membersAnnouncedSource = new Subject<Liige[]>();
 // Observable string streams
 memberAnnounced$ = this.memberAnnouncedSource.asObservable();

 // Service message commands
 announceMember(member: string) {
   this.memberAnnouncedSource.next(member);
 }

// announceMembers(members: Liige[]) {
//   this.membersAnnouncedSource.next(members);
// }

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
