import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-layout-page',
  templateUrl: './customer-layout-page.component.html',
  styleUrls: ['./customer-layout-page.component.css']
})
export class CustomerLayoutPageComponent implements OnInit {

  role:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logoutBtn() {
    this.router.navigateByUrl('/login')
  }
}
