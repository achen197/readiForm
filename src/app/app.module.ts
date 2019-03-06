import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PersonalComponent } from './form/personal/personal.component';
import { DegreeComponent } from './form/degree/degree.component';
import { CapabilitiesComponent } from './form/capabilities/capabilities.component';
import { ResultComponent } from './form/result/result.component';
import { ProgressbarComponent } from './form/progressbar/progressbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormDataService } from './form-data.service';
import { SplashComponent } from './form/splash/splash.component';

import { MatButtonModule, MatRadioModule,
         MatInputModule, MatStepperModule,
         MatIconModule } from '@angular/material';
import { FormComponent } from './form/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    DegreeComponent,
    CapabilitiesComponent,
    ResultComponent,
    ProgressbarComponent,
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
    MatIconModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
