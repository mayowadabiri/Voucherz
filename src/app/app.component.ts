import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase"
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

constructor(private route: Router){}
  // ngOnInit(){
  //     firebase.initializeApp({
  //       apiKey: "AIzaSyDrKVdIzQnenxOyDz7kMrv0xkgpar-ivkQ",
  //       authDomain: "voucherz-a14f1.firebaseapp.com",
  //     })
  //   if(localStorage.getItem("token")){
  //     // console.log("seen")
  //       this.route.navigate(["/dashboard/overview"])
  //   }
  //   // this.route.navigate(["/signin"])
  // }
}
