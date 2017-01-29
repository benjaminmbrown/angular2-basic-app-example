import { Component } from '@angular/core';
//virtual object to describe users ("schema")
interface User {
  id:number,
  name: string,
  checkedIn:boolean
}


@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template:` 
  <div class="app">
   <h1 [innerHTML]="title+ '!'"></h1>
   <div>
   
   <button (click) = "handleClick(username.value)" >Get username Val</button>
   <br/>
    <input 
      type="text" 
      [value] = "name"
      #username
      (input) = "handleChange($event.target.value)"
    >
    </div>
    
    <div *ngIf="name.length > 2">
      Searching for ...{{name}}
    </div>


    <div>
        <h3>Users</h3>
        <ul>
          <li *ngFor="let user of users; let i = index;">{{i}}: {{user.name}} - {{user.checkedIn}}</li>
        </ul>
        
    </div>

  </div> 
  ` 
})

export class AppComponent {

  title:string;
  logo:string = 'img/bike.jpg';
  name:string = 'Ben';

  users: User[] = [{
    id:1,
    name: "Ben",
    checkedIn: true
  },{
    id:2,
    name: "Becca",
    checkedIn: true
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

  constructor(){
    this.title = "Basic Angular App";
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