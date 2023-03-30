import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addProfile() {
    this.router.navigateByUrl('/admin/customer/member')
  }
  profileEdit() {
    this.router.navigateByUrl('/admin/customer/member/profile')
  }
  notesEdit() {
    this.router.navigateByUrl('/admin/customer/member/notes')
  }
  scheduleEdit() {
    this.router.navigateByUrl('/admin/customer/member/schedule/list')
  }
  wordEdit() {
    this.router.navigateByUrl('/admin/customer/member/workshop/list')
  }
}
