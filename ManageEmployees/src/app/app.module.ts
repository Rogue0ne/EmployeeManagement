import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/home.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap:[HomeComponent]
})

export class AppModule { }