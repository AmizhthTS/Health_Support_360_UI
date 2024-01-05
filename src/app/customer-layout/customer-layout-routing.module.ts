import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLayoutPageComponent } from './components/customer-layout-page/customer-layout-page.component';
import { CustomerdetailMasterModule } from '../customerdetail-master/customerdetail-master.module';

const routes: Routes = [

  {
    path: '', component: CustomerLayoutPageComponent, data: { title: 'Health Support 360' },
    children: [
     
      {
        path: 'customerdetail', loadChildren: '../customerdetail-master/customerdetail-master.module#CustomerdetailMasterModule', data: { title: 'Customer' }
      },
      // {
      //   path: 'customerdetail', loadChildren: '../customerdetail-master/customerdetail-master.module#CustomerdetailMasterModule', data: { title: 'Customerdetail' }
      // },
      // {
      //   path: 'document', loadChildren: '../document-master/document-master.module#DocumentMasterModule', data: { title: 'Document' }
      // },
      // {
      //   path: 'reason', loadChildren: '../reason-master/reason-master.module#ReasonMasterModule', data: { title: 'Reason' }
      // },
      // {
      //   path: 'workshop', loadChildren: '../workshop-master/workshop-master.module#WorkshopMasterModule', data: { title: 'Workshop' }
      // },
      // {
      //   path: 'schedule', loadChildren: '../schedule-master/schedule-master.module#ScheduleMasterModule', data: { title: 'schedule' }
      // },
    ]
  },
 
];
CustomerdetailMasterModule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLayoutRoutingModule { }
