import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrls: ['./edit-voucher.component.css']
})
export class EditVoucherComponent implements OnInit {
  editVouchers: FormGroup;
  id: any
  constructor(private fb: FormBuilder, private toastr: ToastrService, private route: ActivatedRoute, private location: Location, private update: DashboardService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.route.snapshot.paramMap)
    this.editVouchers = this.fb.group({
      category: ["", [Validators.required]],
      suffix: ["", [Validators.required, Validators.minLength(4)]],
      prefix: ["", [Validators.required, Validators.minLength(4)]],
      type: ["", [Validators.required]],
      number: ["", [Validators.required]],
      value: ["", [Validators.required]]
    })
  }

  get ctrl (){
    return  this.editVouchers.controls
  }

  goback(){
    this.location.back()
  }
  onSubmit(){
    this.update.updateVoucher(this.id, this.editVouchers.value)
      .subscribe(
        res =>{
          console.log(res)
          this.toastr.success("Created Successfully")
        },
        err =>{this.toastr.error(err.statusText, "Creating Vouchers...")}
      )
    }
}
