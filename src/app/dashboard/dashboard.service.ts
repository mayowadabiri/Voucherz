import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CreateVoucher } from './pages/create/create.model';
import { Observable, Subject, throwError } from 'rxjs';
import { AuthService } from '../Auth/auth.service';
import {map, catchError, retry, toArray} from "rxjs/operators"
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag"

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl : string ="https://voucherz-a14f1.firebaseio.com/post.json/";
  vouchersChanged = new Subject<CreateVoucher[]>()

  constructor(private http: HttpClient, private authService: AuthService,
     private toastr: ToastrService, private route: Router, private apollo: Apollo) { }

  createVoucher(voucher): Observable<CreateVoucher[]>{
    return this.http.post<CreateVoucher[]>(this.baseUrl, JSON.stringify(voucher), {
    }).pipe(
      map(res => {
        if(res){
          this.route.navigate(["/dashboard/vouchers"])
          return res
        }
      })
    )
  }



  getVouchers(): Observable<CreateVoucher[]>{
    return this.http.get<CreateVoucher[]>(this.baseUrl,{
      // responseType: "json"
    })
  }


  updateVoucher(id, voucher): Observable<CreateVoucher[]>{
    return this.http.put<CreateVoucher[]>(this.baseUrl, JSON.stringify(voucher))
  }
  deleteVoucher(){
    return this.http.delete(this.baseUrl)
  }
}
