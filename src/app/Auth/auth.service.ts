import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from "firebase"
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


export interface Response{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered: string,
  status: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=";
  signInUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="
  apiKey = "AIzaSyDrKVdIzQnenxOyDz7kMrv0xkgpar-ivkQ"
  errorMessage: string
  constructor(private route: Router, private toastr: ToastrService, private http: HttpClient, ) { }


  signUpUser(email: string, password: string): Observable<Response> {

    return this.http.post<Response>(`${this.signUpUrl}${this.apiKey}`, JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })).pipe(
        map(res => {
          console.log(res)
          if(res.idToken){
            this.route.navigate(["/signin"])
          }
          return res
        }),
      )
  }

  signInUser(email: string, password: string): Observable<Response>{
   return   this.http.post<Response>(`${this.signInUrl}${this.apiKey}`, JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })).pipe(
       map((res) =>{
         console.log(res)
         if(res.idToken){
           localStorage.setItem("token", res.idToken);
           this.route.navigate(["dashboard/overview"])
         }
         return res
        }),
      )
  }

    logOut() {
      localStorage.removeItem("token")
      this.route.navigate(["/signin"])
    }

    isAuthenticated(): boolean {
      return localStorage.getItem("token") ? true : false
    }


}






