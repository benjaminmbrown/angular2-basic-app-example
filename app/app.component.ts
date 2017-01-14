import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template:` 
  <div class="app">
   <h1 [innerHTML]="title+ '!'"></h1>
   <div>
   <button (click) = "handleClick()">Revert Name</button>
    <input 
      type="text" 
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)"
    ></div>
    <img [src]="logo"/>
   
    {{name}}
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
  handleClick(){
    this.name="Ben Again";
  }

}