import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template:` 
  <div class="app">
    <input type="text" [value]="name"/>
    <h1 [innerHTML]="title+ '!'"></h1>
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

}