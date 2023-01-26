import { Component } from '@angular/core';
import {faEnvelope,faLock} from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faE=faEnvelope; 
  faL=faLock; 
  constructor() {}
  loginSubmit(login:any){
    console.log(login)
  }
}
