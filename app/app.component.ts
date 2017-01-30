import { Component } from '@angular/core';
//virtual object to describe users ("schema")
interface Child {
  name: string,
  age: number
}
interface User {
  id:number,
  name: string,
  checkedIn:boolean,
  checkedInDate? : number,
  children?: Child[]
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

    
    <div *ngIf="name.length > 2">
      Searching for ...{{name}}
    </div>

    <div>
        <h3>Users</h3>
        
        <ul>
        using [class.checked-in] = 
          <li *ngFor="let user of users; let i = index;">
          <span class="status" [class.checked-in] = "user.checkedIn"></span>
           {{user.name}} 
           <div class="date">
           Check in date:
           {{user.checkedInDate ? (user.checkedInDate | date: 'yMMMMd' | uppercase): 'Not checked in'}}
           </div>
           <div class="children">
           Children: {{ user.children?.length || 0}}
           </div>
          </li>
        </ul>
    </div>
<!--
      <div>
        <h3>Users</h3>
        <ul>using ng-class [ngClass] = 
          <li *ngFor="let user of users; let i = index;">
          <span class="status" [ngClass] = "{'checked-in': user.checkedIn,'checked-out':user.checkedIn}"></span>
           {{user.name}} - {{user.checkedIn}}
          </li>
        </ul>
    </div>


      <div>
        <h3>Users</h3>
        <ul>using style binding ([style.backgroundColor])
          <li *ngFor="let user of users; let i = index;">
          <span class="status" 
          [style.backgroundColor] = "(user.checkedIn?'#2ecc71':'#c0392b')">
          </span>
           {{user.name}} - {{user.checkedIn}}
          </li>
        </ul>
    </div>


      <div>
        <h3>Users</h3>
        <ul>using  [ngStyle] = 
          <li *ngFor="let user of users; let i = index;">
          <span class="status" 
          [ngStyle] = "{
            backgroundColor:(user.checkedIn?'#2ecc71':'#c0392b')
            }">
          </span>
           {{user.name}} - {{user.checkedIn}}
          </li>
        </ul>
    </div>-->

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