import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  position: number;
  name: string;
  mobile: number;
  email: string;
  country: string;
  icon: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
  { position: 2, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
  { position: 3, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
  { position: 4, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
  { position: 5, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
  { position: 6, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },

];
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  dataSource = [
    { position: 1, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
    { position: 2, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
    { position: 3, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
    { position: 4, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
    { position: 5, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },
    { position: 6, name: 'Jhone Stephen', email: 'john.stephen@gmail.com', mobile: 1234567899, country: 'India', icon: 'img' },

  ];;
  constructor(private router: Router,) { }

  role: any;
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
  }
  addProfile() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member')
    } else {
      this.router.navigateByUrl('/customer/member')
    }

  }
  profileEdit() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/profile')
    } else {
      this.router.navigateByUrl('/customer/member/profile')
    }
  }
  notesEdit() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/notes')
    }else{
      this.router.navigateByUrl('/customer/member/notes')
    }
  }
  scheduleEdit() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/schedule/list')
    }else{
      this.router.navigateByUrl('/customer/member/schedule/list')
    }
  }
  wordEdit() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/workshop/list')
    }else{
      this.router.navigateByUrl('/customer/member/workshop/list')
    }
  }
  profileEdit2() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/profile')
    }else{
      this.router.navigateByUrl('/customer/member/profile')
    }
  }
  documentEdit() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/document')
    }else{
      this.router.navigateByUrl('/customer/member/document')
    }
  }
  videoEdit() {
    if (this.role == 'Admin') {
      this.router.navigateByUrl('/admin/customer/member/video')
    }else{
      this.router.navigateByUrl('/customer/member/video')
    }
  }
}