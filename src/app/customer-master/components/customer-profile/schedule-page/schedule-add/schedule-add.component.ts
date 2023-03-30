import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Router } from '@angular/router';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class ScheduleAddComponent implements OnInit {
  date = new Date();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cancelBtn(){
    this.router.navigateByUrl('/admin/customer/member/schedule/list')
  }
  submitBtn(){
    this.router.navigateByUrl('/admin/customer/member/schedule/list')
  }
}
