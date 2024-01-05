import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerMasterModule } from '../customer-master/customer-master.module';
import { DocumentMasterModule } from '../document-master/document-master.module';
import { ReasonMasterModule } from '../reason-master/reason-master.module';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent, data: { title: 'Login' },
  },
  {
    path: 'register', component: RegisterPageComponent, data: { title: 'Register' },
  },
  {
    path: 'admin', component: LayoutPageComponent, data: { title: 'Health Support 360' },
    children: [
      {
        path: '', redirectTo: 'customer', pathMatch: 'full'
      },
      {
        path: 'customer', loadChildren: '../customer-master/customer-master.module#CustomerMasterModule', data: { title: 'Customer' }
      },
      {
        path: 'document', loadChildren: '../document-master/document-master.module#DocumentMasterModule', data: { title: 'Document' }
      },
      {
        path: 'reason', loadChildren: '../reason-master/reason-master.module#ReasonMasterModule', data: { title: 'Reason' }
      },
    ]
  },
  {
    path: 'customer', component: LayoutPageComponent, data: { title: 'Health Support 360' },
    children: [     
      {
        path: '', loadChildren: '../customer-master/customer-master.module#CustomerMasterModule', data: { title: 'Customer' }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
