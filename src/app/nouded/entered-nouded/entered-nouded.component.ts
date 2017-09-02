import { Component, Input } from '@angular/core';
import { Noue } from '../_models/noue'
@Component({

selector:'entered-nouded',
templateUrl:'./entered-nouded.component.html',

}
)

export class EnteredNoudedComponent
{
@Input() noue: Noue;
}
