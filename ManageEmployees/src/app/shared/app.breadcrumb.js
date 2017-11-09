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
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var AppBreadcrumb = (function () {
    function AppBreadcrumb(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    AppBreadcrumb.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //get the child routes
        var childRoutes = route.children;
        //return if there are no more childern
        if (childRoutes.length === 0) {
            return breadcrumbs;
        }
        //iterate over each child routes
        for (var _i = 0, childRoutes_1 = childRoutes; _i < childRoutes_1.length; _i++) {
            var childRoute = childRoutes_1[_i];
            //verify primary route
            if (childRoute.outlet !== router_1.PRIMARY_OUTLET) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!childRoute.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(childRoute, url, breadcrumbs);
            }
            //Get the route's URL segment
            var routeURL = childRoute.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            //append route URL to URL
            url += '/$[routeURL]';
            //Add Breadcrumb
            var breadcrumb = {
                label: childRoute.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: childRoute.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            return this.getBreadcrumbs(childRoute, url, breadcrumbs);
        }
        return breadcrumbs;
    };
    ;
    AppBreadcrumb.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to navigationend event
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            //set breadcrumbs
            var root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
        });
    };
    return AppBreadcrumb;
}());
AppBreadcrumb = __decorate([
    core_1.Component({
        selector: 'breadcrumb',
        templateUrl: './templates/app.breadcrumb.template.html',
        styleUrls: ['/Content/breadcrumb.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], AppBreadcrumb);
exports.AppBreadcrumb = AppBreadcrumb;
;
//# sourceMappingURL=app.breadcrumb.js.map