import {Component, Input} from '@angular/core';
import {User} from '../../models/user.interface';

@Component({
    selector: 'user-count',
    template: `
    <h3>Users</h3>
    <div> Total checkt in Users: {{checkedInCount()}} / {{items.length}} </div>
    `
})

export class UserCountComponent{
    @Input()
    items: User[];
    constructor(){}

    checkedInCount(): number{
        if(!this.items) return;
            return this.items.filter((user:User) => user.checkedIn).length;
    
    }
}