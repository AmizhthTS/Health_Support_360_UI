import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
// import { CostomerPageComponent } from './components/costomer-page/costomer-page.component';
// import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomerLayoutPageComponent } from './components/customer-layout-page/customer-layout-page.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
// import { MatMenuModule } from '@angular/material/menu/menu-module';


@NgModule({
  declarations: [CustomerLayoutPageComponent],
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule,
    // CommonModule,
    // LayoutRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgxMaterialTimepickerModule,
    // MatMenuModule
  ]
})
export class CustomerLayoutModule { }
