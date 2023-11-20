import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: ReportsPageComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full', canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    ReportsPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ReportsModule { }
