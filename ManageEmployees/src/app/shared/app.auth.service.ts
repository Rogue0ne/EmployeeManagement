import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/do';
import 'rxjs/add/observable/delay';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    //store the url to navigate the user after logging in.
    redirectUrl: string;

    login(): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): void{
        this.isLoggedIn = false;
    }
}
