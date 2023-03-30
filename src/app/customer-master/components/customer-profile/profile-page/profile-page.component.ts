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
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class ProfilePageComponent implements OnInit {
  date = new Date();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitBtn(){
    this.router.navigateByUrl('/admin/customer/list')
  }
  cancelBtn(){
    this.router.navigateByUrl('/admin/customer/list')
  }
}
