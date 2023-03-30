import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  addForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.addForm = this.fb.group({
      "username": ['', [Validators.required]],
      "password": ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
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
  signupBtn() {
    this.router.navigateByUrl('/register')
  }
}
