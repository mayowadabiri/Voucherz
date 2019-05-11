import { AuthService } from './Auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    // if (this.authService.isAuthenticated()) {
    //   return true
    // }
    // else{
    //   this.router.navigate(["/signin"])
    //   return false
    // }
    return  true
  }

}

