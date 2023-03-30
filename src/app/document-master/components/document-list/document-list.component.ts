import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addPage() {
    this.router.navigateByUrl('/admin/document/add')
  }
}
