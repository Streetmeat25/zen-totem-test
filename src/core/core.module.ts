import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
    ]
})
export class CoreModule { }
