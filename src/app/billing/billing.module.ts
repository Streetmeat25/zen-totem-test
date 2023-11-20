import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: BillingPageComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full', canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    BillingPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BillingModule { }
