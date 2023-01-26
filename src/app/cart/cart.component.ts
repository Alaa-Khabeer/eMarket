import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { CartproService } from '../services/cartpro.service';
import { CounterService } from '../services/counter.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
counter:number = 0;
objs: any = [];
itemCount: number = 0;
products: Array<Product> = [];
constructor(private counterService: CounterService, private cartproService: CartproService, private ProductService: ProductService){}
ngOnInit(): void {
  this.counterService.counterValue.subscribe((count) => this.counter = count);
  this.cartproService.proValue.subscribe((pro) => this.objs = pro);
  this.ProductService.getProducts().subscribe((res:any) => this.products = res);
}
increaseCounter(Id:string, price:string){
  this.counterService.changeCounter(++this.counter)
  this.cartproService.updatePro(++this.objs.find((item:any) => item.id == Id).count, Id);
  this.cartproService.totalPrice(Number(price));
  this.total = this.cartproService.tPrice;
}
decreaseCounter(Id:string, price:string){
  if(this.objs.find((item:any) => item.id == Id).count > 0){
    this.counterService.changeCounter(--this.counter);
    this.cartproService.updatePro(--this.objs.find((item:any) => item.id == Id).count, Id);
    this.cartproService.decTotalPrice(Number(price));
    this.total = this.cartproService.tPrice;
  }
  else{
    this.remove(Id, 0, '');
  }
}
remove(Id:string, Count:number, price:string){
  this.cartproService.removePro(Id);
  this.counterService.changeCounter(this.counter - Count);
  this.cartproService.decrTotalPrice(Count,Number(price));
  this.total = this.cartproService.tPrice;

}
total = this.cartproService.tPrice;
}
