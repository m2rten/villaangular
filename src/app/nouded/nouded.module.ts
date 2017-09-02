import { NgModule } from '@angular/core';
import { EnteredNoudedComponent } from './entered-nouded/entered-nouded.component';
import { SisestaNoueComponent } from './sisesta-noue/sisesta-noue.component';
import { FormsModule } from'@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule ({
  imports: [FormsModule, CommonModule],
  declarations: [EnteredNoudedComponent, SisestaNoueComponent],
})
export class NoudedModule {}
