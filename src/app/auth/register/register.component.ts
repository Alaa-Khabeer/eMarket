import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {faUser, faEnvelope, faLock, faKey} from'@fortawesome/free-solid-svg-icons';
import { ConfirmedValidator } from './Confirm_Validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faE=faEnvelope; 
  faL=faLock; 
  faU=faUser;
  faK=faKey;

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      UserName: ['', [Validators.required, Validators.pattern("^[^ ]+$")]],
      Password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}")]],
      ConfirmPassword: ['', [Validators.required]]
    },
    { 
      validator: ConfirmedValidator('Password', 'ConfirmPassword')
    });
  }
  
  get registerFormControls() {
    return this.registerForm.controls;
  }

  registerSubmit(){
    console.log(this.registerForm)
  }

}
