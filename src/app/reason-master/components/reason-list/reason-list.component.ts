import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReasonAddComponent } from '../reason-add/reason-add.component';
declare var $: any
@Component({
  selector: 'app-reason-list',
  templateUrl: './reason-list.component.html',
  styleUrls: ['./reason-list.component.css']
})
export class ReasonListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addPage() {    
    const dialogRef = this.dialog.open(ReasonAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
