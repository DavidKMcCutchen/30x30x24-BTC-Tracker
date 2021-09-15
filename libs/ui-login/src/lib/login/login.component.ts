import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'bitcoin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.router.navigate(['/v1/bpi/currentprice.json']);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
}