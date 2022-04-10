import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private router: Router, private formBuiler: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuiler.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  async submitSignUp(): Promise<void> {
    const username = this.formGroup.value.username;
    const email = this.formGroup.value.email;
    const password = this.formGroup.value.password;

    try {
      const response = await axios.post(
        'http://localhost:1337/api/users',
        {
          username,
          email,
          password,
          confirmed: true
        }
      );
      if ((response.status = 201)) {
        this.router.navigate(['login']);
      }
    } catch (error) {
      alert("Something went wrong!")
    }
  }
}
