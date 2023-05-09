import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        FormsModule,
        ReactiveFormsModule ,
        BrowserModule,
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule ,
      BrowserModule,
    ],


})
export class SharedModule { }
