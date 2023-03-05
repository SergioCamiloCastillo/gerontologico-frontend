import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private router: Router) {}
  login() {
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    this.router.navigateByUrl('/dashboard');
  }
  fieldIsNotValid(field: string) {
    return (
      this.myForm.controls[field].valueChanges &&
      this.myForm.controls[field].touched &&
      this.myForm.controls[field].errors
    );
  }
}
