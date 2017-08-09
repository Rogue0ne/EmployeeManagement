import { Component, Input } from '@angular/core';
import { AppCommonServices } from '../shared/app.common.services';

@Component({
    selector: 'page-header',
    templateUrl: './template/app.header.template.html',
    providers: [AppCommonServices]
})

export class AppHeaderComponent {
    HelpContent: string;
    HomeUrl: string;
    @Input() username: string;

    constructor(private commonService: AppCommonServices) { }

    Logout(): void {
        this.commonService
    }

}


