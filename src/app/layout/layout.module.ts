import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutPageComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class LayoutModule { }
