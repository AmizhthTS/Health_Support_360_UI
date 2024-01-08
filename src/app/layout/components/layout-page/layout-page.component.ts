import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {


  constructor(private router: Router) { }
  role:any;
  ngOnInit(): void {
    this.role=sessionStorage.getItem('role')
  }
  logoutBtn() {
    this.router.navigateByUrl('/login')
  }
}
