
import {NgModule} from '@angular/core'; 
import {BrowserModule} from '@angular/platform-browser'; 
import {FormsModule} from '@angular/forms'; 
import {RouterModule,Routes} from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component'; 



let userRoutes:Routes=[
    {path:'login', component: UserLoginComponent },
    {path:'register',component:UserRegisterComponent}
]



@NgModule({

    imports:[
       // BrowserModule,
        RouterModule.forChild(userRoutes)  //these routes will be added to Main Module
    ],

    declarations:[
    UserLoginComponent,
    UserRegisterComponent
    ],

    exports:[
        UserLoginComponent,
        UserRegisterComponent
    ]

})
export class UserManagementModule{

}