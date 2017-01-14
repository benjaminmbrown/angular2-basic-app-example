import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template:` 
  <div class="app">
  <div>{{title + '!' }}</div>
  <div> {{numberOne}}</div>
  <div>  {{numberTwo}}</div>
  <div> {{numberOne + numberTwo}} </div>
  <div> {{isHappy ? ':)':':('}} </div>
  </div> 
  `
})
export class AppComponent {
  title:string;
  numberOne:number = 1;
  numberTwo:number = 2;
  isHappy:boolean = false;
  constructor(){
    this.title = "Basic Angular App";
  }
}