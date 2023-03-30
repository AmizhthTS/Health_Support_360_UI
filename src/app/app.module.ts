import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './AppHttpInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LayoutModule } from './layout/layout.module';
import { ApiService } from './services/api.service';
import { ValueService } from './services/value.service';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [
    ApiService, ValueService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
