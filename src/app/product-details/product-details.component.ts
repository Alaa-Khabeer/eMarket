import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/Product';
import productData from '../../assets/data/products.json'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | any = {
    "createdAt": '',
    "name": '',
    "image": '',
    "rate": 0,
    "count": 0,
    "description": '',
    "price": '',
    "reviews": [],
    "id":''
  };
  constructor(private activatedRoute : ActivatedRoute, private ProductService: ProductService){}

  ngOnInit(): void {
   // this.product = productData.find((product: Product) => product.id == this.activatedRoute.snapshot.params['id'])
    this.ProductService.getProductDetails(this.activatedRoute.snapshot.params['id']).subscribe((res) => this.product = res)
  }
}
