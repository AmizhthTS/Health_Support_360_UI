import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor(private router:Router) { }
  role:any
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
  }
  addPage() {
    this.router.navigateByUrl('/admin/customer/member/document/add')
  }
}
