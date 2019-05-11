import { map } from 'rxjs/operators';
// import {User, GqlService } from './../../../gql.service';
import { Apollo } from 'apollo-angular';
import { HttpEvent } from '@angular/common/http';
import { Component, OnInit, HostListener, Host } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { CreateVoucher } from '../create/create.model';
import {  Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
// import "apollo-cache-control"


const getUsers = gql`
    query JSONUser{
      users{
          id
          name
          username
          email
      }

    }`

const create = gql`
      mutation CreateUser{
        createUser(user:{name:"Olawale", email:"dabs@gmail.com", username:"maowa"}){
          name
          email
          username
        }
      }`

@Component({
	selector: 'app-vouchers',
	templateUrl: './vouchers.component.html',
	styleUrls: [ './vouchers.component.css' ]
})
export class VouchersComponent implements OnInit {
  emptyMessage: string
	voucherId: Array<any>;
  vouchers: CreateVoucher[];
  // user : Observable<User[]>

  constructor(private dashboardService: DashboardService, private router: Router,
     private route: ActivatedRoute, private apollo: Apollo) {}

	ngOnInit() {
		this.dashboardService.getVouchers().subscribe((voucher: CreateVoucher[]) => {
      if(voucher === null){
        this.emptyMessage = "You haven't created any voucher yet"
        console.log("null")
      }else{
        this.vouchers = Object.values(voucher);
        console.log(this.vouchers);
      }
    });
    this.apollo.watchQuery<any>({
      query: getUsers
    }).valueChanges.subscribe(res =>{
      console.log(res.data)
    })
  //  this.apollo.watch()
  //     .valueChanges
  //     .subscribe(
  //       res => console.log(res.data.users)
  //     )

  }
  onClick(){
    this.router.navigate(["../create"],    {relativeTo: this.route})
    this.apollo.mutate({
      mutation: create
    }).subscribe(res => console.log(res.data))
  }
}

