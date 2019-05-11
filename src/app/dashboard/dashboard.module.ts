import { AuthGuard } from './../auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/create/create.component';
import { RedeemComponent } from './pages/redeem/redeem.component';
import { HeaderComponent } from './pages/header/header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { VoucherComponent } from './pages/vouchers/voucher/voucher.component';
import { EditVoucherComponent } from './pages/edit-voucher/edit-voucher.component';


@NgModule({
    declarations: [
        DashboardComponent,
        SidemenuComponent,
        OverviewComponent,
        VouchersComponent,
        ProfileComponent,
        CreateComponent,
        RedeemComponent,
        HeaderComponent,
        VoucherComponent,
        EditVoucherComponent
      ],
    imports: [CommonModule,
            ReactiveFormsModule,
            DashboardRoutingModule,
            HttpClientModule,
            FormsModule],
    providers:[AuthGuard]
})

export class DashboardModule { }
