import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  addForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.addForm = this.fb.group({
      "username": ['', [Validators.required]],
      "password": ['', [Validators.required]],
      "confirmPassword": ['', [Validators.required]],
      "address": ['', [Validators.required]],
      "country": ['', [Validators.required]],
      "mobileNumber": ['', [Validators.required]],
      "email": ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  public showConfirmPassword: boolean = false;
  public toggleconfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  get add() {
    return this.addForm.controls
  }
  loginBtn() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched()
    } else {
      this.router.navigate(['admin', {}]);
    }
  }
  signInBtn() {
    this.router.navigateByUrl('/login')
  }
}
