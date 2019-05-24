import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppHttpInterceptors implements HttpInterceptor {

  constructor(private toastr: ToastrService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const headers= new HttpHeaders({
        //     "Content-Type": "application/json"
        // })
        const clone = req.clone({
            // setHeaders:{
            //   "Authorization": `Bearer ${localStorage.getItem("token")}`
            // }
        })

        return next.handle(clone).pipe(
          map((event: HttpEvent<any>)=>{
            if(event instanceof HttpResponse){
              console.log(event)
              return event
            }
          }),
            catchError(this.handleError)
          );
    }
    handleError(error: HttpErrorResponse){
        console.error("This is error",error)
        return throwError(error)
      }
}
