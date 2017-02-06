import {Component, Input} from '@angular/core';
import {User} from '../../models/user.interface';

@Component({
    selector: 'user-detail',
    styleUrls: ['user-detail.component.scss'],
    template: `
          <span 
            class="status" 
            [class.checked-in] = "detail.checkedIn"></span>
            {{detail.name}} 
           <div class="date">
           Check in date:
                {{detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase): 'Not checked in'}}
           </div>
           <div  class="children">
                Children: {{ detail.children?.length || 0}}
           </div>
     
    `
})

export class UserDetailComponent{
    @Input()
    detail: User;
    constructor(){}
}