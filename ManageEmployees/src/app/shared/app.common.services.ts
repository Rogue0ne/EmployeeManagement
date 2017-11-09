import { Injectable, OnInit } from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppCommonServices {

    configData: any[];

    constructor(private http: Http, private router: Router) {

    }

    public Logout(): Promise<any> {
        return this.http
            .get('api/Common/Logout')
            .toPromise()
            .then(response => {
                let data = response.json();
                return data;
            })
            .catch(this.handleError);
                    
    }

    public GetConfigData(): Promise<object> {
        return this.http.get('./Config.json')
            .toPromise()
            .then(resposne => {
                let data = resposne.json();
                return data;
            })
            .catch(this.handleError);
            
    };

    public GetAppSettings(): Promise<any> {
        return this.http.get('api/GetApplicatinSettings')
            .toPromise()
            .then(response => {
                var data = response.json();
                return data;
            })
            .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        //console.error('An error occured',error);
        window.location.href = 'Home/Error?statusText=' + error.statusText;
        return Promise.reject(error.message || error);
    };
}