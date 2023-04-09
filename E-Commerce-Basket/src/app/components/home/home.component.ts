import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:ProductModel[]=[

  ]

    ngOnInit(): void {
      this.setProducts();
    }
    setProducts(){
      for(let i=0;i<100;i++){
          let product = new ProductModel();
          product.id=i;
          product.name=`Product${i}`;
          product.unitPrice=80;
          product.stock=100+i*10;
          this.products.push(product);
      }
    }




}
