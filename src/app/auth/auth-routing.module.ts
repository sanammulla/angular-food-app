import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

const authRoutes: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(authRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AuthRoutingModule{

}