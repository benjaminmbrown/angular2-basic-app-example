import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDashboardComponent} from './containers/user-dashboard/user-dashboard.component';
import {UserCountComponent} from './components/user-count/user-count.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';

@NgModule({
    declarations: [
        UserDashboardComponent,
        UserCountComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        UserDashboardComponent
    ]
})

export class UserDashboardModule {}