import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signIn: FormGroup
  submitting : boolean = false
  error: string
  httpError: string
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.signIn = this.fb.group({
       email: ["", [Validators.email, Validators.required]],
       password: ["", [Validators.required]],
    })
  }
  get f(){
    return this.signIn.controls
  }
  onSubmit(){
    this.submitting = true
    const email = this.f.email.value;
    const password = this.f.password.value
    if(this.signIn.invalid){
      return;
    }else{
      this.authService.signInUser(email, password)
        .subscribe(
          (res) =>{
            console.log(res)
            },
          (err) =>{
            console.error(err.error.error)
            this.httpError = err.error.error.message
            this.toastr.error(err.error.error.message)
          }
        )
      // this.router.navigate(["/dashboard/overview"])
    }
    this.error = this.authService.errorMessage;
  }
}
