import { Component, OnInit } from '@angular/core' ;
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms' ;
import { states, memberType, memberStatus } from './data.model';
import { MemberService } from '../_services/member.service';
import { AdminStartService}  from '../_services/admin-start.service';
import { Member } from '../../_models/member'
import { Liige }  from '../_models/Liige';
import { Observable } from 'rxjs';

@Component({
selector: 'add-member',
templateUrl: './add-member.component.html',
styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
memberStatuses : memberStatus[];
memberTypes : memberType[];
savedMember=new Member ();
member = new Member ();
submitted= false;
liikmed : Observable<Liige[]>;

constructor (private fb : FormBuilder, private adminStartService : AdminStartService,
   private memberService:MemberService)
{ };
announce() {this.adminStartService.announceMember("Announcing a POST message");}

ngOnInit():void{
 this.memberService.getStatuses().then(
   statuses =>{ this.memberStatuses = statuses;
   this.member.status = this.memberStatuses[0].status;})
 this.memberService.getTypes().then(
   types => {this.memberTypes = types; this.member.type = this.memberTypes[0].type});

}
onSubmit (){
  this.memberService.saveMember(this.member).then(response => this.savedMember = response)
    this.submitted = true;
    this.member = new Member();
    this.announce();
  };
}
