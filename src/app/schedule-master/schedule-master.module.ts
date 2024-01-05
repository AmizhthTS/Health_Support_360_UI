import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleMasterRoutingModule } from './schedule-master-routing.module';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ScheduleAddComponent } from './components/schedule-add/schedule-add.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CustomerMasterRoutingModule } from '../customer-master/customer-master-routing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ScheduleListComponent, ScheduleAddComponent, SchedulePageComponent],
  imports: [
    CommonModule,
    ScheduleMasterRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgxMaterialTimepickerModule,
    CustomerMasterRoutingModule,
  ]
})
export class ScheduleMasterModule { }
