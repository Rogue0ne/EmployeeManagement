import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'messagemodal',
    templateUrl: './templates/app.messagemodal.template.html'
})

export class AppModalMessageComponent {
    private message: string;
    messageflag: boolean;

    ShowMessage(msg: string) {
        this.message = msg;
        this.messageflag = true;
    }

    HideMessage() {
        this.messageflag = false;
    }

}