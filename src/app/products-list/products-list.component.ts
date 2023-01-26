import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
//import productData from '../../assets/data/products.json'
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  //products: Array<Product> = productData;
  products: Array<Product> = [];

  constructor(private ProductService: ProductService){}
   
   ngOnInit(): void{
    this.ProductService.getProducts().subscribe((res:any) => this.products = res);
   }
}
