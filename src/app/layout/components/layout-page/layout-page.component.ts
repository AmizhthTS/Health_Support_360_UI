import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { ReasonAddComponent } from 'src/app/reason-master/components/reason-add/reason-add.component';
import { ResetpasswordPageComponent } from '../resetpassword-page/resetpassword-page.component';
declare var $:any;
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {


  constructor(private router: Router,public dialog: MatDialog) { }
  role:any;
  ngOnInit(): void {
    this.role=sessionStorage.getItem('role')
  }
  logoutBtn() {
    this.router.navigateByUrl('/login')
  }
  // modal(){
  //   $('#myModal').on('shown.bs.modal', function () {
  //     $('#myInput').trigger('focus')
  //   })
  // }
  addpage(){    
    const dialogRef = this.dialog.open(ResetpasswordPageComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
