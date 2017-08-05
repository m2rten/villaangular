import { Component, OnInit } from '@angular/core' ;
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms' ;
import { states, statuses } from './data.model';
import { MemberService } from '../_services/member.service';

@Component({
selector: 'add-member',
templateUrl: './add-member.component.html',
})


export class AddMemberComponent implements OnInit {
memberForm : FormGroup;
statuses : statuses[];

constructor (private fb : FormBuilder, private memberService:MemberService)
{
  this.createForm();
};

ngOnInit():void{
 this.memberService.getStatuses().then(statuses => this.statuses = statuses
 );
}

createForm () {
this.memberForm = this.fb.group({
  name:['', Validators.required] ,
  state:[''],
})

}

}
