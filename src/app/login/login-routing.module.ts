import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomePageComponent, data: { title: 'Health Support 360' } },
  { path: 'login', component: LoginPageComponent, data: { title: 'Health Support 360 | Login' } },
  { path: 'register', component: RegisterPageComponent, data: { title: 'Health Support 360 | Register' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
