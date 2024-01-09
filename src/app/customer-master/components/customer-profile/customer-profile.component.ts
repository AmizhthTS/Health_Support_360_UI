import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  role: any;
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
    var val = this.router.url.split('/')[4]
    this.getName(val)
    debugger
  }
  titleName = ''
  getName(name) {
    this.titleName = name
  }
}
