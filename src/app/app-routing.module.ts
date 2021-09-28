import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { TrackComponent } from './track/track.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tracking/:id', component: TrackingComponent},  
  {path: 'terms', component: TermsComponent}, 
  {path: 'privacy', component: PrivacyComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent},
  {path: 'track', component: TrackComponent}, 
  {path: 'contact-us', component: ContactComponent}, 
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
