import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReasonAddComponent } from './components/reason-add/reason-add.component';
import { ReasonListComponent } from './components/reason-list/reason-list.component';
import { ReasonPageComponent } from './components/reason-page/reason-page.component';

const routes: Routes = [
  {
    path: '', component: ReasonPageComponent, data: { title: '' },
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: ReasonListComponent, data: { title: 'List' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReasonMasterRoutingModule { }
