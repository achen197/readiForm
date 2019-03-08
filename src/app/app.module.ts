import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent, BottomSheetOverviewExampleSheet } from './form/form/form.component';
import { SplashComponent } from './form/splash/splash.component';

import { MatButtonModule, MatRadioModule,
         MatInputModule, MatStepperModule,
         MatIconModule, MatCardModule,
         MatBottomSheetModule, MatSelectModule,
         MatCheckboxModule, MatListModule,
         MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    FormComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, 
    BrowserAnimationsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatExpansionModule
  ],
  entryComponents: [FormComponent, BottomSheetOverviewExampleSheet],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
