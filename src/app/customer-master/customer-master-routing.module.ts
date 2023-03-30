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
          { path: 'notes', component: NotesPageComponent,data: { title: 'Notes' } },
          {
            path: 'schedule', component: SchedulePageComponent,data: { title: 'Schedule' },
            children: [
              { path: '', redirectTo: 'list', pathMatch: 'full' },
              { path: 'list', component: ScheduleListComponent,data: { title: 'List' } },
              { path: 'add', component: ScheduleAddComponent,data: { title: 'Add' } }
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
