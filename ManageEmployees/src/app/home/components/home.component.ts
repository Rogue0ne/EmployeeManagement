import { Component, Input, ElementRef } from '@angular/core';
import { AppCommonServices } from '../../shared/app.common.services';

@Component({
    selector: 'my-app',
    templateUrl:'./templates/home.html'
})

export class HomeComponent {
    constructor(private elementRef: ElementRef, private commonService: AppCommonServices) { }
    username: string = this.elementRef.nativeElement.getAttribute('username')
}