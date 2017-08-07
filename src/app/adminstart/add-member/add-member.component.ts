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
member:Member;
savedMember:Member;

constructor (private fb : FormBuilder, private memberService:MemberService)
{
  this.createForm();
};

ngOnInit():void{
 this.memberService.getStatuses().then(statuses => this.memberStatuses = statuses);
 this.memberService.getTypes().then(types => this.memberTypes = types);
}

onSubmit (){
 this.member = this.memberForm.value;
 console.log(this.member);
 console.log(this.memberForm.status);
  this.memberService.saveMember(this.member).then(response => {this.savedMember = response});
  console.log(this.savedMember);
}

createForm () {
this.memberForm = this.fb.group({
  firstname:['', Validators.required] ,
  lastname:['', Validators.required],
  status:[''],
  type:['']
})

}

}
