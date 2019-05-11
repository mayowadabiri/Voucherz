import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';


@NgModule({
    declarations: [SigninComponent,
                    SignupComponent,
                    AuthComponent],
    imports: [CommonModule,
            AuthRoutingModule,
            ReactiveFormsModule,
            HttpClientModule
          ],
    providers:[AuthService]
})

export class AuthModule { }
