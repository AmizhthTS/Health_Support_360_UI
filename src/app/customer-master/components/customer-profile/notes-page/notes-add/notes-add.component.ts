import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  constructor(private router:Router) { }
  date = new Date();
  ngOnInit(): void {
  }
  cancelBtn(){
    this.router.navigateByUrl('/admin/document/list')
  }
  submitBtn(){
    this.router.navigateByUrl('/admin/customer/member/notes')
  }

}
