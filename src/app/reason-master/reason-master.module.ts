import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonMasterRoutingModule } from './reason-master-routing.module';
import { ReasonPageComponent } from './components/reason-page/reason-page.component';
import { ReasonListComponent } from './components/reason-list/reason-list.component';
import { ReasonAddComponent } from './components/reason-add/reason-add.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReasonPageComponent, ReasonListComponent, ReasonAddComponent],
  imports: [
    CommonModule,
    ReasonMasterRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    ReasonAddComponent
  ]
})
export class ReasonMasterModule { }
