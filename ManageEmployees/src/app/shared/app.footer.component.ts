import { Component, OnInit, Input } from '@angular/core';
import { PopoverModule } from 'ngx-popover';
import { AppCommonServices } from './app.common.services';

@Component({
    selector: 'page-footer',
    templateUrl: './templates/app.footer.template.html',
    providers: [AppCommonServices]
})

export class AppFooterComponent {
    ContactContent: string;

    constructor(private appCommonService: AppCommonServices) {

    };

    ngOnInit() {
        this.appCommonService.GetAppSettings()
            .then(resp => {
                this.ContactContent = resp != null ? resp.AppSettings[this.appCommonService.GetConfigData['ContactId']].SETTING_VALUE
                                                   : '';

            });
    };
}