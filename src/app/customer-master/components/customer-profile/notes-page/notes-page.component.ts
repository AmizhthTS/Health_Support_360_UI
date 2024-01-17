import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {
  role: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
  }
  // addPage() {
  //   this.router.navigateByUrl('/admin/notes/add')
  // }
}
