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
      productID: ['', Validators.required],
      productTitle: ['', Validators.required],
      productDescription: ['', Validators.required],
      productAvailability: [Number, Validators.required],
      productImageUrl: ['', Validators.required],
    });
  }

  async submitNewProduct(): Promise<void> {
    const productID = this.formGroup.value.productID;
    const productTitle = this.formGroup.value.productTitle;
    const productDescription = this.formGroup.value.productDescription;
    const productAvailability = this.formGroup.value.productID;
    const productImageUrl = this.formGroup.value.productImageUrl;

    try {
      const response = await axios.post('http://localhost:1337/api/products', {
        data: {
          productID,
          productTitle,
          productDescription,
          productAvailability,
          productImageUrl
        },
      })
      if(response.status = 200){
        alert("Product added")
      }

    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  }
}
