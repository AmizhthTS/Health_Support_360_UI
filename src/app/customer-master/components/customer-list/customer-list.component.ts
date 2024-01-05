import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  position: number;
  name: string;
  mobile: number;
  email: string;
  country: string;
  icon:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name:'Jhone Stephen', email:'john.stephen@gmail.com', mobile:1234567899, country:'India',icon:'img'},
  {position: 2, name:'Jhone Stephen', email:'john.stephen@gmail.com', mobile:1234567899, country:'India',icon:'img'},
  {position: 3, name:'Jhone Stephen', email:'john.stephen@gmail.com', mobile:1234567899, country:'India',icon:'img'},
  {position: 4, name:'Jhone Stephen', email:'john.stephen@gmail.com', mobile:1234567899, country:'India',icon:'img'},
  {position: 5, name:'Jhone Stephen', email:'john.stephen@gmail.com', mobile:1234567899, country:'India',icon:'img'},
  {position: 6, name:'Jhone Stephen', email:'john.stephen@gmail.com', mobile:1234567899, country:'India',icon:'img'},
 
];
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'mobile', 'email','country','addicon','editicon','deleteicon'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router,) { }

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
  profileEdit2()
  {
    this.router.navigateByUrl('/admin/customer/member/profile')
  }
  documentEdit()
  {
    this.router.navigateByUrl('/admin/customer/member/document')
  }
  videoEdit()
  {
    this.router.navigateByUrl('/admin/customer/member/video')
  }
  login(){
    this.router.navigateByUrl('/auth/register-page/register-page')
  }
}