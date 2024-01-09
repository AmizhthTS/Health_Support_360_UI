import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerMasterModule } from '../customer-master/customer-master.module';
import { DocumentMasterModule } from '../document-master/document-master.module';
import { ReasonMasterModule } from '../reason-master/reason-master.module';
import { WorkshopMasterModule } from '../workshop-master/workshop-master.module';
import { ScheduleMasterModule } from '../schedule-master/schedule-master.module';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CustomerLayoutPageComponent } from '../customer-layout/components/customer-layout-page/customer-layout-page.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent, data: { title: 'Login' },
  },
  {
    path: 'register', component: RegisterPageComponent, data: { title: 'Register' },
  },
  {
    path: 'login', component: LoginPageComponent, data: { title: 'Register' },
  },
  // {
  //   path: 'customer', component: CustomerLayoutPageComponent, data: { title: 'Register' },
  // },
  // {
  //   path: 'customer', component: CustomerLayoutPageComponent, data: { title: 'Customer' },
  //   children: [
    
  //     {
  //       path: 'customerdetail', loadChildren: '../customerdetail-master/customerdetail-master.module#CustomerdetailMasterModule', data: { title: 'Customerdetail' }
  //     },
  //     {
  //       path: 'customerlist', loadChildren: '../customerdetail-master/customerdetail-master.module#customerDetailMasterModule', data: { title: 'Customerdetail' }
  //     },
  //     {
  //       path: 'document', loadChildren: '../document-master/document-master.module#DocumentMasterModule', data: { title: 'Document' }
  //     },
  //     {
  //       path: 'reason', loadChildren: '../reason-master/reason-master.module#ReasonMasterModule', data: { title: 'Reason' }
  //     },
  //     {
  //       path: 'workshop', loadChildren: '../workshop-master/workshop-master.module#WorkshopMasterModule', data: { title: 'Workshop' }
  //     },
  //     {
  //       path: 'schedule', loadChildren: '../schedule-master/schedule-master.module#ScheduleMasterModule', data: { title: 'schedule' }
  //     },
  //   ]
  // },
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
        path: 'consulting', loadChildren: '../reason-master/reason-master.module#ReasonMasterModule', data: { title: 'Reason' }
      },
      {
        path: 'workshop', loadChildren: '../workshop-master/workshop-master.module#WorkshopMasterModule', data: { title: 'Workshop' }
      },
      {
        path: 'schedule', loadChildren: '../schedule-master/schedule-master.module#ScheduleMasterModule', data: { title: 'schedule' }
      },
    ]
  },
  {
    path: 'customer', component: LayoutPageComponent, data: { title: 'Health Support 360' },
    children: [
      // {
      //   path: '', redirectTo: '', pathMatch: 'full'
      // },
      {
        path: '', loadChildren: '../customer-master/customer-master.module#CustomerMasterModule', data: { title: 'Customer' }
      },
    ]
  }
  // {
  //   path: 'customer', component: CustomerLayoutPageComponent, data: { title: 'Health Support 360' },
    
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
