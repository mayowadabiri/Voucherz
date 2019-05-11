import { EditVoucherComponent } from './pages/edit-voucher/edit-voucher.component';
import { AuthGuard } from './../auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/create/create.component';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { RedeemComponent } from './pages/redeem/redeem.component';
import { DashboardComponent } from './dashboard.component';


const dashboardRoutes: Routes = [
    {path: "", component: DashboardComponent, canActivate:[AuthGuard], children:[
        {path: "", redirectTo: "overview", pathMatch: "full"},
        {path: "overview", component: OverviewComponent, canActivate:[AuthGuard]},
        {path: "profile", component: ProfileComponent, canActivate:[AuthGuard]},
        {path: "create", component: CreateComponent, canActivate:[AuthGuard]},
        {path: "vouchers", component: VouchersComponent, canActivate:[AuthGuard]},
        {path: "vouchers/:id/edit", component: EditVoucherComponent, canActivate: [AuthGuard]},
        {path: "redeem", component: RedeemComponent, canActivate:[AuthGuard]}
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(dashboardRoutes)],
    exports:[RouterModule]
})
export class DashboardRoutingModule{}
