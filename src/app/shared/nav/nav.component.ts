import { Component, OnInit } from '@angular/core';
import {faBars,faShoppingCart} from'@fortawesome/free-solid-svg-icons';
import {faTwitter,faInstagram} from'@fortawesome/free-brands-svg-icons';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    faB=faBars; 
    faS=faShoppingCart; 
    faT=faTwitter; 
    faI=faInstagram;
  constructor(private counterService: CounterService) {}
    counter: number = 0;
  ngOnInit(): void {
    this.counterService.counterValue.subscribe((count) => this.counter = count);
  }
}
