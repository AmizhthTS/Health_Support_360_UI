import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopPageComponent } from './components/workshop-page/workshop-page.component';
import { WorkshopListComponent } from './components/workshop-list/workshop-list.component';
import { WorkshopAddComponent } from './components/workshop-add/workshop-add.component';

const routes: Routes = [
  {
    path: '', component: WorkshopPageComponent, data: { title: '' },
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: WorkshopListComponent, data: { title: 'List' }
      },
      {
        path: 'add', component: WorkshopAddComponent, data: { title: 'Add' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopMasterRoutingModule { }
