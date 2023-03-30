import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentMasterRoutingModule } from './document-master-routing.module';
import { DocumentPageComponent } from './components/document-page/document-page.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentAddComponent } from './components/document-add/document-add.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DocumentPageComponent, DocumentListComponent, DocumentAddComponent],
  imports: [
    CommonModule,
    DocumentMasterRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class DocumentMasterModule { }
