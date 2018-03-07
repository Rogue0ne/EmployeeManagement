import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login.component';
import { AuthService } from '../../shared/app.auth.service';

const loginRoutes: Routes = [
    {path:'login',component:LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(loginRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService
    ]
})

export class LoginRoutingModule { }