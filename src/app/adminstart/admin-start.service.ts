import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Liige } from '../liige';

@Injectable()
export class AdminStartService {

private villaUrl = 'http://localhost:3010/api/v1/saldo'
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

   getLiikmed(): Promise<Liige []> {
  return this.http.get(this.villaUrl)
             .toPromise()
             .then(response => { return response.json() as Liige[]})
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
