import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageEditComponent } from './profile-page-edit/profile-page-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './phone-mask.directive';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'edit', component: ProfilePageEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
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
