import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form/form.component';
import { SplashComponent } from './form/splash/splash.component';

import { MatButtonModule, MatRadioModule,
         MatInputModule, MatStepperModule,
         MatIconModule, MatCardModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, 
    BrowserAnimationsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
