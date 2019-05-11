import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from './../../../dashboard.service';
import { Component, OnInit, Input } from '@angular/core';
import { CreateVoucher } from '../../create/create.model';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  @Input() myVoucher: CreateVoucher
  @Input() myKey: Array<any>
  // emptyMesage: string

  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute, private location : Location) { }

  ngOnInit() {
    // if(this.myVoucher === []){
    // // console.log(this.myKey)
    // this.emptyMesage = "You haven't created any Voucher yet"
    // }
  }

  deleteVoucher(){
    this.dashboardService.deleteVoucher()
      .subscribe(
        (res)=>{
          console.log(res)
        },
        (err)=> console.log(err)
      )
      window.location.reload()
  }

  onLoad(id : number){
    this.router.navigate(["./", id, "edit"], { relativeTo: this.route})
  }

}
