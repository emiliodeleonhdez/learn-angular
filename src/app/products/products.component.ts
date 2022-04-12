import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      productTitle: ['', Validators.required],
      productDescription: ['', Validators.required],
      productAvailability: [Number, Validators.required],
      productImageUrl: ['', Validators.required],
    });
  }

  async submitNewProduct(): Promise<void> {
    const productTitle = this.formGroup.value.productTitle;
    const productDescription = this.formGroup.value.productDescription;
    const productAvailability = this.formGroup.value.productAvailability;
    const productImageUrl = this.formGroup.value.productImageUrl;

    const jwt = sessionStorage.getItem('jwt')

    try {
      // const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5Nzk4NjAyLCJleHAiOjE2NTIzOTA2MDJ9.tRJPbrQKpjm_7HaD-kQHDn4CTNytxESsejl1jrMI_-c"
      const response = await axios.post('http://localhost:1337/api/products', {
        data: {
            productTitle,
            productDescription,
            productAvailability,
            productImageUrl

        }
      },
      {
        headers:{
          Authorization: `Bearer ${jwt}`
        }
      }
      )
      if(response.status = 200){
        alert("Product added")
      }

    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }

  }
}
