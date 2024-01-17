import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
role:any;
isExpanded: boolean = false;
isExpanded2: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
  }
  addPage() {
    this.router.navigateByUrl('/admin/customer/member/notes/add')
  }
  toggleCard() {
    this.isExpanded = !this.isExpanded;
  }

}
