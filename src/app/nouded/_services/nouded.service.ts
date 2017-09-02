import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Noue } from '../_models/noue';

export class NoudedService
{
  constructor (private http:Http)
  {}
saveNoue(noue:Noue)
{ this.http.post("http://localhost:3010/api/v1/noue", noue)
.toPromise()
.then(response => console.log(response))

}

}
