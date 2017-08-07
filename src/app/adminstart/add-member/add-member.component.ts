import { Component, OnInit } from '@angular/core' ;
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms' ;
import { states, memberType, memberStatus } from './data.model';
import { MemberService } from '../_services/member.service';
import { Member } from '../../_models/member'

@Component({
selector: 'add-member',
templateUrl: './add-member.component.html',
})
export class AddMemberComponent implements OnInit {
memberForm : FormGroup;
memberStatuses : memberStatus[];
memberTypes : memberType[];
//member:Member;
savedMember:Member;
member = new Member ();
submitted= false;
constructor (private fb : FormBuilder, private memberService:MemberService)
{};

ngOnInit():void{
 this.memberService.getStatuses().then(statuses => this.memberStatuses = statuses);
 this.memberService.getTypes().then(types => this.memberTypes = types);
}

onSubmit (){
  console.log(this.member);
  this.memberService.saveMember(this.member).then(response =>
    this.savedMember = response)
    this.submitted = true;
    this.member = new Member();
  };

}
