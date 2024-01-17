import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReasonAddComponent } from 'src/app/reason-master/components/reason-add/reason-add.component';

@Component({
  selector: 'app-resetpassword-page',
  templateUrl: './resetpassword-page.component.html',
  styleUrls: ['./resetpassword-page.component.css']
})
export class ResetpasswordPageComponent implements OnInit {
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
