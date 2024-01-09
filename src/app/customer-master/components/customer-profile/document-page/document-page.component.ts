import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.css']
})
export class DocumentPageComponent implements OnInit {

  constructor(private router: Router) { }

  role: any;
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
  }
  addPage() {
    this.router.navigateByUrl('/admin/document/add')
  }
}
