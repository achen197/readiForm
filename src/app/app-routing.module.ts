import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './form/personal/personal.component';
import { DegreeComponent } from './form/degree/degree.component';
import { CapabilitiesComponent } from './form/capabilities/capabilities.component';
import { ResultComponent } from './form/result/result.component';
import { SplashComponent } from './form/splash/splash.component';
import { FormComponent } from './form/form/form.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'degree', component: DegreeComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full'},
  { path: 'form', component: FormComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
