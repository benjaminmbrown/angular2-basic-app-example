import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template:` 
  <div class="app">
   <h1 [innerHTML]="title+ '!'"></h1>
   <div>
   <button (click) = "handleClick(username.value)" >Get username Val</button>
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
  </div> 
  ` 
})
export class AppComponent {

  title:string;
  logo:string = 'img/bike.jpg';
  name:string = 'Ben';

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