import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() titleText!: string;

  constructor(
  ) { }

  ngOnInit(): void {


  }

  logout(){
    sessionStorage.clear()
  }

}
