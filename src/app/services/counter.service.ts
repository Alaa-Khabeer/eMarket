import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  counterValue = this.counter.asObservable();
  
  constructor() { }
  
  changeCounter(newCount: number){
    this.counter.next(newCount);
  }
}
 