import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reason-add',
  templateUrl: './reason-add.component.html',
  styleUrls: ['./reason-add.component.css']
})
export class ReasonAddComponent implements OnInit {
  addForm: FormGroup
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ReasonAddComponent>) {
    this.addForm = this.fb.group({
      "reason": ['', [Validators.required]],
    })
  }
  get add() {
    return this.addForm.controls
  }
  ngOnInit(): void {
  }
  submitBtn() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched()
    }else{
      this.dialogRef.close();
    }
  }
  cancelBtn(){
    this.dialogRef.close();
  }
}
