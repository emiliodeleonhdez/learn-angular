import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private router: Router,
    private formBuiler: FormBuilder
    ) {



     }

  ngOnInit(): void {
    this.formGroup = this.formBuiler.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  async submitLogin(): Promise<void> {

    const identifier = this.formGroup.value.userName
    const password = this.formGroup.value.password

    // const identifier = this.loginForm.userName
    try{
      const response = await axios.post("http://localhost:1337/api/auth/local",{
        identifier,
        password
      })
      if(response.status = 200){
        this.router.navigate(["home"])
        console.log(response.status)
      }
    }catch(error){
      console.error(error)
      alert("Something went wrong!")
    }


  }

}
