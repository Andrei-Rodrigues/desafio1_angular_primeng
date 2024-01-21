import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        ImageModule
      )
    ],
  }
).catch((err) => console.error(err));