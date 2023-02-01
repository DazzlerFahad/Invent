import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registration = new Registration();
  msg = '';
  public loginForm!: FormGroup
  email: string | undefined;
  password: string | undefined;
  constructor(private formBuilder : FormBuilder,  private _router:Router, private _service : RegistrationService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login() : void {
    this._service.loginUserFromRemote(this.registration).subscribe(
      data => {
        console.log("respose received");
        this._router.navigate(['/loginsuccess'])
      },
      error =>{
        console.log("Exception occured"),
        this.msg ="*Enter valid Email/Password";
      } 
    )
    }

}


