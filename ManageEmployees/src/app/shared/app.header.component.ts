import { Component, Input, OnInit } from '@angular/core';
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
    selected: boolean = false;

    constructor(private commonService: AppCommonServices) { }

    showSelected() {
        this.selected = !this.selected;
    };

    Logout(): void {
        this.commonService
            .Logout()
            .then(resp => {
                if (resp.Status === "Success") {
                    window.location.href = this.commonService.configData["HomePage"];
                }
                else {
                    alert('Error occured in logout.');
                }
            });
    };

    ngOnInit() {
        this.commonService.GetAppSettings()
            .then(resp => {
                if (resp != null) {
                    this.HomeUrl = resp.AppSettings[this.commonService.configData["HomeUrl"]].SETTING_VALUE;
                }
                else {
                    this.HomeUrl = '';
                }

            });
    }
}


