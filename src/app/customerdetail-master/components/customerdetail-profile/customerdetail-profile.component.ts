import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetail-profile',
  templateUrl: './customerdetail-profile.component.html',
  styleUrls: ['./customerdetail-profile.component.css']
})
export class CustomerdetailProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var val = this.router.url.split('/')[6]
    this.getName(val)
  }
  titleName = ''
  getName(name) {
    this.titleName = name
  }
}
