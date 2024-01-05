import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addPage(){
    this.router.navigateByUrl('/admin/customer/member/workshop/add')
  }
}

