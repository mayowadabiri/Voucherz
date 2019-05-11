import { AuthService } from './../../../Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {FormGroup} from "@angular/forms"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authservice.logOut()
    // this.router.navigate(["/signin"])
  }

}
