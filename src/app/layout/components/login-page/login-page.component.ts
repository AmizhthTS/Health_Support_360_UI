import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      "email": ['', [Validators.required]],
      "password": ['', [Validators.required]],
    })
  }
  get add() {
    return this.loginForm.controls
  }
  ngOnInit(): void {

  }
  registerPage() {
    this.router.navigateByUrl('/register')
  }
  login() {
    var getform = this.loginForm.value
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      
    } else {
      if (getform.email === 'admin@gmail.com') {
        this.router.navigateByUrl('/admin')
        sessionStorage.setItem('role','Admin')
      } else {
        this.router.navigateByUrl('/customer')
        sessionStorage.setItem('role','Customer')
      }
    }
  }
}
