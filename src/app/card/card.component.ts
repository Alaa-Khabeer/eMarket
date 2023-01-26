import { Component,OnInit, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { CartproService } from '../services/cartpro.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
@Input() productItem: any = {}
constructor(private counterService: CounterService, private cartproService: CartproService){}
counter: number = 0;
items:any=[]
itemCount:number = 1;
  ngOnInit(): void {
    this.counterService.counterValue.subscribe((count) => this.counter = count);
    this.cartproService.proValue.subscribe((pro) => this.items = pro);
  }
  increaseCounter(){
    this.counterService.changeCounter(++this.counter)
  }
  sendData(Id:string){
      let found = this.items.find((item:any) => item.id == Id);
      if(found == null){
        this.cartproService.addPro({'id':Id, 'count':this.itemCount});
      }
      else{
        this.cartproService.updatePro(++this.itemCount, Id);
      }
  }


  callFuncs(id:string, price:string){
    this.increaseCounter()
    this.sendData(id)
    console.log(this.items)
    this.cartproService.totalPrice( Number(price));
  }
}
