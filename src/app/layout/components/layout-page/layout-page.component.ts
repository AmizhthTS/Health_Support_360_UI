import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logoutBtn() {
    this.router.navigateByUrl('/login')
  }
}
