import {Component} from'@angular/core';
import {Noue} from '../_models/noue';
import { FormControl, FormGroup } from '@angular/forms' ;
import { Member } from '../../_models/member';
import { NoudedService } from '../_services/nouded.service'
@Component ({
    selector: 'sisesta-noue',
    templateUrl: './sisesta-noue.component.html',
    styleUrls:['./sisesta-noue.component.css']
  }
)

export class SisestaNoueComponent {
noue:Noue;
liikmed:Member[];
liige:Member;
enteredNoue:Noue;
constructor(private ns:NoudedService)
{
  this.noue = new  Noue ();
  this.noue.summa=45;
  this.liige={"firstname":"test","lastname":"best","id":12,"status":"student","type":"active"};
  this.liikmed =[this.liige];
  let kpv = new Date (2017,12,12);
  this.enteredNoue={"maksja":1,"summa":12,"tekkekpv":kpv,"kaup":"test"};
}
saveNoue()
{
this.ns.saveNoue(this.noue);
console.log("Saving");
this.enteredNoue.kaup=this.noue.kaup;
console.log(this.noue);
}

}
