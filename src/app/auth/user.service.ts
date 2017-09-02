import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  userName = "EstonVilla";

  getPermission(allowedGroups):boolean{
    console.log("Getting permissions:" + allowedGroups);
    console.log(allowedGroups.length);
    return true;
  }
}
