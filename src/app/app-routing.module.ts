import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './form/splash/splash.component';
import { FormComponent } from './form/form/form.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full'},
  { path: 'form', component: FormComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
