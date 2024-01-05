import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerdetailMasterRoutingModule } from './customerdetail-master-routing.module';
import { CustomerdetailProfileComponent } from './components/customerdetail-profile/customerdetail-profile.component';
// import { ProfilePageComponent } from './components/customerdetail-profile/profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MaterialModule } from '../material.module';
import { CustomerdetailListComponent } from './components/customerdetail-list/customerdetail-list.component';
import { CustomerdetailPageComponent } from './components/customerdetail-page/customerdetail-page.component';
import { ProfilePageComponent } from './components/customerdetail-profile/profile-page/profile-page.component';
// import { ProfilePageComponent } from './components/profile-page/profile-page.component';
// import { CustomerdetailListComponent } from './components/customerdetail-profile/components/customerdetail-list/customerdetail-list.component';
// import { CustomerdetailPageComponent } from './components/customerdetail-profile/customerdetail-page/customerdetail-page.component';
// import { CustomerdetailListComponent } from './components/customerdetail-profile/customerdetail-list/customerdetail-list.component';
// import { CustomerdetailPageComponent } from './components/customerdetail-profile/customerdetail-page/customerdetail-page.component';


@NgModule({
  declarations: [CustomerdetailProfileComponent,CustomerdetailListComponent, CustomerdetailPageComponent, ProfilePageComponent],
  imports: [
    CommonModule,
    CustomerdetailMasterRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgxMaterialTimepickerModule,
  ]
})
export class CustomerdetailMasterModule { }
