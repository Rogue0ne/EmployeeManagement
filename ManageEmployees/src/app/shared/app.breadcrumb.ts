import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import 'rxjs/add/operator/filter';

interface IBreadCrumb {
    label: string;
    params?: Params;
    url: string;
}

@Component({
    selector: 'breadcrumb',
    templateUrl: './templates/app.breadcrumb.template.html',
    styleUrls:['/Content/breadcrumb.css']
})

export class AppBreadcrumb implements OnInit {
   
    public breadcrumbs: IBreadCrumb[];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
         this.breadcrumbs = [];
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
        //get the child routes
        let childRoutes: ActivatedRoute[] = route.children;

        //return if there are no more childern
        if (childRoutes.length === 0) {
            return breadcrumbs;
        }

        //iterate over each child routes
        for (let childRoute of childRoutes) {
            //verify primary route
            if (childRoute.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            //verify the custom data property "breadcrumb" is specified on the route
            if (!childRoute.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(childRoute, url, breadcrumbs);
            }

            //Get the route's URL segment
            let routeURL: string = childRoute.snapshot.url.map(segment => segment.path).join('/');

            //append route URL to URL
            url += '/$[routeURL]';

            //Add Breadcrumb
            let breadcrumb: IBreadCrumb = {
                label: childRoute.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: childRoute.snapshot.params,
                url:url
            };

            breadcrumbs.push(breadcrumb);

            return this.getBreadcrumbs(childRoute, url, breadcrumbs);
        }

        return breadcrumbs;
    };

    ngOnInit(): void {

        //subscribe to navigationend event
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            //set breadcrumbs
            let root: ActivatedRoute = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
        });
    }

};

