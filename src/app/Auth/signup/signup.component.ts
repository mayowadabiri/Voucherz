import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from "../_helper/must_match.validator"
import { AuthService } from '../auth.service';
// import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitting: boolean = false
  signup: FormGroup;
  httpError: string
  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.signup = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, {
        validators: MustMatch("password", "confirmPassword")
      })
  }

  get f() {
    return this.signup.controls
  }
  onSubmit() {
    this.submitting = true;
    if (this.signup.invalid) {
      return;
    } else {
      const email = this.f.email.value;
      const password = this.f.password.value
      this.authService.signUpUser(email, password)
        .subscribe(
          (res)=> console.log(res),
          (err)=>{
            console.error(err.error.error)
            this.httpError = err.error.error.message
            this.toastr.error(err.error.error.message)
          }
        )
      // this.error = this.authService.errorMessage;
    }
  }
}
