import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageEditComponent } from './profile-page-edit/profile-page-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './phone-mask.directive';
import { AuthGuard } from 'app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: ProfilePageComponent, canActivate:[AuthGuard] },
  { path: 'edit', component: ProfilePageEditComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full', canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfilePageEditComponent,
    PhoneMaskDirective,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
