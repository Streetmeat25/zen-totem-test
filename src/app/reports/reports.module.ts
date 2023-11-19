import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReportsPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
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
