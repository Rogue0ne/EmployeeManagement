import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../shared/app.auth.service';
@Component({
    selector: 'my-app',
    templateUrl:'./templates/login.html'
})

export class LoginComponent {
    message: string;
    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + this.authService.isLoggedIn ? 'in' : 'out';
    }

    login() {
        this.message = 'Trying to log in...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                  
            let navigationExtras: NavigationExtras = {
                queryParamsHandling: 'preserve',
                preserveFragment:true
            };

            this.router.navigate([redirect], navigationExtras);
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}