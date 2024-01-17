import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { NotesPageComponent } from './components/customer-profile/notes-page/notes-page.component';
import { ProfilePageComponent } from './components/customer-profile/profile-page/profile-page.component';
import { ScheduleAddComponent } from './components/customer-profile/schedule-page/schedule-add/schedule-add.component';
import { ScheduleListComponent } from './components/customer-profile/schedule-page/schedule-list/schedule-list.component';
import { SchedulePageComponent } from './components/customer-profile/schedule-page/schedule-page.component';
import { WorkshopAddComponent } from './components/customer-profile/workshop-page/workshop-add/workshop-add.component';
import { WorkshopListComponent } from './components/customer-profile/workshop-page/workshop-list/workshop-list.component';
import { WorkshopPageComponent } from './components/customer-profile/workshop-page/workshop-page.component';
import { DocumentPageComponent } from './components/customer-profile/document-page/document-page.component';
import { VideoPageComponent } from './components/customer-profile/video-page/video-page.component';
import { NotesListComponent } from './components/customer-profile/notes-page/notes-list/notes-list.component';
import { NotesAddComponent } from './components/customer-profile/notes-page/notes-add/notes-add.component';
import { DocumentListComponent } from './components/customer-profile/document-page/document-list/document-list.component';
import { DocumentAddComponent } from './components/customer-profile/document-page/document-add/document-add.component';
// import { NotesListComponent } from '../notes-master/components/notes-list/notes-list.component';
// import { NotesAddComponent } from '../notes-master/components/notes-add/notes-add.component';
// import { SheduleAddComponent } from '../shedule-master/components/shedule-add/shedule-add.component';
// import { SheduleListComponent } from '../shedule-master/components/shedule-list/shedule-list.component';
// import { ShedulePageComponent } from '../shedule-master/components/shedule-page/shedule-page.component';

const routes: Routes = [
  {
    path: '', component: CustomerPageComponent, data: { title: '' },
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: CustomerListComponent, data: { title: 'List' }
      },
      {
        path: 'member', component: CustomerProfileComponent, data: { title: 'Member' },
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: ProfilePageComponent,data: { title: 'Profile' }},
          // { path: 'notes', component: NotesPageComponent,data: { title: 'Notes' } },
          
          { path: 'video', component: VideoPageComponent,data: { title: 'Video' } },
          // { path: 'schedule', component: SchedulePageComponent,data: { title: 'Schedule' } },
          {
             path: 'document', component: DocumentPageComponent,data: { title: 'Document' },
            children:[
              {path:'', redirectTo:'list',pathMatch: 'full'},
              { path: 'list', component: DocumentListComponent,data: { title: 'List' } },
              { path: 'add', component: DocumentAddComponent,data: { title: 'Add' } }
            ]
            },
          {
            path: 'schedule', component: SchedulePageComponent,data: { title: 'Schedule' },
            children: [
              { path: '', redirectTo: 'list', pathMatch: 'full' },
              { path: 'list', component: ScheduleListComponent,data: { title: 'List' } },
              { path: 'add', component: ScheduleAddComponent,data: { title: 'Add' } }
            ]
          },
          {
            path: 'notes', component: NotesPageComponent,data: { title: 'Notes' },
            children: [
              { path: '', redirectTo: 'list', pathMatch: 'full' },
              { path: 'list', component:  NotesListComponent,data: { title: 'List' } },
              { path: 'add', component:  NotesAddComponent,data: { title: 'Add' } }
            ]
          },
         
          {
            path: 'workshop', component: WorkshopPageComponent,data: { title: 'Workshop' },
            children: [
              { path: '', redirectTo: 'list', pathMatch: 'full' },
              { path: 'list', component: WorkshopListComponent,data: { title: 'List' } },
              { path: 'add', component: WorkshopAddComponent,data: { title: 'Add' } }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMasterRoutingModule { }
