import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerMasterRoutingModule } from './customer-master-routing.module';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { ProfilePageComponent } from './components/customer-profile/profile-page/profile-page.component';
import { NotesPageComponent } from './components/customer-profile/notes-page/notes-page.component';
import { SchedulePageComponent } from './components/customer-profile/schedule-page/schedule-page.component';
import { WorkshopPageComponent } from './components/customer-profile/workshop-page/workshop-page.component';
import { ScheduleListComponent } from './components/customer-profile/schedule-page/schedule-list/schedule-list.component';
import { ScheduleAddComponent } from './components/customer-profile/schedule-page/schedule-add/schedule-add.component';
import { WorkshopAddComponent } from './components/customer-profile/workshop-page/workshop-add/workshop-add.component';
import { WorkshopListComponent } from './components/customer-profile/workshop-page/workshop-list/workshop-list.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DocumentPageComponent } from './components/customer-profile/document-page/document-page.component';
import { VideoPageComponent } from './components/customer-profile/video-page/video-page.component';

@NgModule({
  declarations: [CustomerPageComponent, CustomerListComponent, CustomerProfileComponent, ProfilePageComponent, NotesPageComponent, SchedulePageComponent, WorkshopPageComponent, ScheduleListComponent, ScheduleAddComponent, WorkshopAddComponent, WorkshopListComponent, DocumentPageComponent, VideoPageComponent],
  imports: [
    CommonModule,
    CustomerMasterRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgxMaterialTimepickerModule,
  ]
})
export class CustomerMasterModule { }
