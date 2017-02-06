import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {UserDashboardModule} from './user-dashboard/user-dashboard-module';

@NgModule({
  declarations:[
    AppComponent
    ],
    imports:[
      BrowserModule,
      CommonModule,
      //Custom modules
      UserDashboardModule
    ],
  bootstrap:[
    AppComponent
    ]
})

export class AppModule{

}