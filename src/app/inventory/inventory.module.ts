import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: InventoryPageComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full', canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    InventoryPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InventoryModule { }
