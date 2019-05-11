import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { DashboardService } from '../../dashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  submitting= false
  createVoucher: FormGroup
  constructor(private fb: FormBuilder, private create: DashboardService, private toastr: ToastrService) { }

  ngOnInit() {
    console.log(this.submitting)
    this.createVoucher = this.fb.group({
      category: ["", [Validators.required]],
      suffix: ["", [Validators.required, Validators.minLength(4)]],
      prefix: ["", [Validators.required, Validators.minLength(4)]],
      type: ["", [Validators.required]],
      number: ["", [Validators.required]],
      value: ["", [Validators.required]]
    })
  }

  get ctrl() {
    return this.createVoucher.controls
  }
  onSubmit() {
    this.submitting = true;
    console.log(this.submitting)
    if (this.createVoucher.invalid) {
      return;
    } else {
      this.create.createVoucher(this.createVoucher.value)
        .subscribe(
          res => {
            console.log(res)
            this.toastr.success("Created Successfully")
          },
          err => { this.toastr.error(err.statusText, "Creating Vouchers...") }
        )
    }
  }

}
