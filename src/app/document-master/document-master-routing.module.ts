import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentAddComponent } from './components/document-add/document-add.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentPageComponent } from './components/document-page/document-page.component';

const routes: Routes = [
  {
    path: '', component: DocumentPageComponent, data: { title: '' },
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: DocumentListComponent, data: { title: 'List' }
      },
      {
        path: 'add', component: DocumentAddComponent, data: { title: 'Add' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentMasterRoutingModule { }
