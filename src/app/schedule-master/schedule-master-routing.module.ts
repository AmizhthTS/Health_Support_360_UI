import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';

const routes: Routes = [
  {
    path: '', component: SchedulePageComponent, data: { title: '' },
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: ScheduleListComponent, data: { title: 'List' }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleMasterRoutingModule { }
