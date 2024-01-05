import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetail-list',
  templateUrl: './customerdetail-list.component.html',
  styleUrls: ['./customerdetail-list.component.css']
})
export class CustomerdetailListComponent implements OnInit {

 
  constructor(private router: Router) { }
  // constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addProfile() {
    this.router.navigateByUrl('/admin/customer/member')
  }
  profileEdit() {
    alert('')
    this.router.navigateByUrl('/customer/customer/member/profile')
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
  videoEdit(){
    this.router.navigateByUrl('/admin/customer/member/video')
  }
  docEdit(){
    this.router.navigateByUrl('customer/customer/member/document')
  }
}
