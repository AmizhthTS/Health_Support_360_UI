import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cancelBtn(){
    this.router.navigateByUrl('/admin/customer/member/document/list')
  }
  submitBtn(){
    this.router.navigateByUrl('/admin/customer/member/document/list')
  }
}
