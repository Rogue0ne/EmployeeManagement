import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/components/home.component';
import { LoginComponent } from '../app/login/components/login.component';
import { PageNotFoundComponent } from '../app/shared/not-found.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HomeComponent
    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    bootstrap:[HomeComponent]
})

export class AppModule { }