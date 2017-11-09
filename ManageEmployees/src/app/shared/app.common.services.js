"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var AppCommonServices = (function () {
    function AppCommonServices(http, router) {
        this.http = http;
        this.router = router;
    }
    AppCommonServices.prototype.Logout = function () {
        return this.http
            .get('api/Common/Logout')
            .toPromise()
            .then(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
    };
    AppCommonServices.prototype.GetConfigData = function () {
        return this.http.get('./Config.json')
            .toPromise()
            .then(function (resposne) {
            var data = resposne.json();
            return data;
        })
            .catch(this.handleError);
    };
    ;
    AppCommonServices.prototype.GetAppSettings = function () {
        return this.http.get('api/GetApplicatinSettings')
            .toPromise()
            .then(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
    };
    ;
    AppCommonServices.prototype.handleError = function (error) {
        //console.error('An error occured',error);
        window.location.href = 'Home/Error?statusText=' + error.statusText;
        return Promise.reject(error.message || error);
    };
    ;
    return AppCommonServices;
}());
AppCommonServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AppCommonServices);
exports.AppCommonServices = AppCommonServices;
//# sourceMappingURL=app.common.services.js.map