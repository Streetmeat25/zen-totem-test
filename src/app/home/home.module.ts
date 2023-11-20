import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'
import { HomePageComponent } from './pages/home-page.component';
import { AuthGuard } from 'app/guard/auth.guard'


const routes: Routes = [
    { path: '', component: HomePageComponent, canActivate:[AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full', canActivate:[AuthGuard] }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomeModule { }
