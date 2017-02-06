import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.interface';


@Component({
    selector: 'user-dashboard',
    styleUrls: ['user-dashboard.component.scss'],
    template: `
   <div>
 
   <user-detail *ngFor='let user of users;' [detail]='user'></user-detail>   
   <user-count[items]='users'></user-count>

   <div>
    <button (click) = "handleClick(username.value)" >Get username Val</button>
    <br/>
      <input 
        type="text" 
        [value] = "name"
        #username
        (input) = "handleChange($event.target.value)">
    <div *ngIf="name.length > 2">
      Searching for ...{{name}}
    </div>
  </div> 
    `
})

export class UserDashboardComponent implements OnInit {

  title:string;
  logo:string = 'img/bike.jpg';
  name:string = 'Ben';

  users: User[];
  
  constructor(){this.title = "Basic Angular App";}
  
  ngOnInit(){
    console.log("ngOnInit");
    this.users =  [{
    id:1,
    name: "Ben",
    checkedIn: true,
    checkedInDate: 1485740653000,
    children:[{name:"Ben Jr.", age:12 }, {name:"Benita", age:9}]
  },{
    id:2,
    name: "Becca",
    checkedIn: true,
    checkedInDate: 1485049453000,
    children: null
  },{
    id:3,
    name: "Kaiser",
    checkedIn: false
  },
  {
    id:4,
    name: "Cookie",
    checkedIn: false
  }];

  console.log("Users: ", this.users);

}

  handleBlur(event:any){
    this.name = event.target.value;
    console.log(event);
  }
   handleInput(event:any){
    this.name = event.target.value;
    console.log(event);
  }
  handleClick(value:string){
  console.log(value);
  }

  handleChange(value:string){
    this.name=value;
  }

}