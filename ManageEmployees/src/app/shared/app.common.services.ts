import { Injectable, OnInit } from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppCommonServices {

    constructor(private http: Http, private router: Router) {

    }

    public Logout(): Promise<boolean> {
        return this.http
            .get('api/Common/Logout')
            .toPromise()
            .then(response => {
                let data = response.json();
                return data;
            })
            .catch(this.handleError);
                    
    }
}