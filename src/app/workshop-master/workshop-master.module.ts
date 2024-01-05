import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopMasterRoutingModule } from './workshop-master-routing.module';
import { WorkshopListComponent } from './components/workshop-list/workshop-list.component';
import { WorkshopPageComponent } from './components/workshop-page/workshop-page.component';
import { WorkshopAddComponent } from './components/workshop-add/workshop-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CustomerMasterRoutingModule } from '../customer-master/customer-master-routing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [WorkshopListComponent, WorkshopPageComponent, WorkshopAddComponent],
  imports: [
    CommonModule,
    WorkshopMasterRoutingModule,
    // CommonModule,
    CustomerMasterRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgxMaterialTimepickerModule,
  ]
})
export class WorkshopMasterModule { }
