import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';



const authRoutes: Routes = [
    {
        path: "", component: AuthComponent, children: [
            {path: "", redirectTo: "/signin", pathMatch: "full"},
            { path: "signin", component: SigninComponent },
            { path: "signup", component: SignupComponent }
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }