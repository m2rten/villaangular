
import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Liige } from'../_models/liige';
import { MemberService } from '../_services/member.service';
import { states, memberType, memberStatus } from '../../_models/data.model';
import { Member } from '../../_models/member';
import { AdminStartService } from '../_services/admin-start.service';

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  member = new Member();
  memberStatuses : memberStatus[];
  memberTypes : memberType[];
 submitted = false;
 savedMember= new Member();

  constructor(private adminStartService:AdminStartService, private memberService:MemberService, @Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<DialogResultExampleDialog>) {
console.log(data.firstname);
  this.member.firstname = data.firstname;
  this.member.lastname = data.lastname;
  this.member.type = data.type;
  this.member.id = data.maksja;
  this.member.status = data.status ;
  }
  announce() {
    this.adminStartService.announceMember("Announcing a POST message");
   }
  onSubmit (){
    this.memberService.updateMember(this.member).then(response =>
      {
        this.savedMember = response; console.log(this.savedMember)})
      this.submitted = true;
    this.dialogRef.close('changed');
    //  this.announce();
    };
  ngOnInit():void{
   this.memberService.getStatuses().then(statuses => this.memberStatuses = statuses);
   this.memberService.getTypes().then(types => this.memberTypes = types);
  }

}
