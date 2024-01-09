import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  constructor(private router: Router) { }

  role: any;
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
  }
  addPage() {
    this.router.navigateByUrl('/admin/customer/member/schedule/add')
  }
}
