import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartproService {
 private proCart = new BehaviorSubject<any>([]);
 proValue = this.proCart.asObservable();
 arr: any = [];
 tPrice:number = 0;
  constructor() { }

  addPro(newPro: any){
    this.arr.push(newPro)
    this.proCart.next(this.arr);
  }

  updatePro(Count:number, Id:string){
     this.arr.find((item:any) => item.id == Id).count = Count;
  }

  removePro(Id:string){
    const delItem = this.arr.indexOf(this.arr.find((item:any) => item.id == Id))
    //this.arr = this.arr.filter((i:any) => i != delItem);
    this.arr.splice(delItem, 1);
  }

  totalPrice(price:number){
   this.tPrice += price;
   return this.tPrice;
  }
  decTotalPrice(price:number){
    this.tPrice -= price;
    return this.tPrice;
  }
  decrTotalPrice(count:number,price:number){
      this.tPrice -= count * price;
      return this.tPrice;
  }
}
