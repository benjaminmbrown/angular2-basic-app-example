import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:` <div>{{title}}</div> `
})
export class AppComponent {
  title:string;

  constructor(){
    this.title = "Basic Angular App";
  }
}