import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "";
  email: string = "";
  password: string = "";
   register(){
   
    let registerValues = {
        name: this.name,
        email: this.email,
        password: this.password
    };
    console.log(registerValues);
    if(this.email =="" || this.email == null || this.email.trim() == ""){
        alert("invalid email");
    }
    else if(this.password.length <= 6){
            alert ("password is too short");
        }
        else{
            const url="https://product-mock-api.herokuapp.com/mobilesalesapp/api/v1/auth/register"
        axios.post(url,registerValues).then(res=>{
            alert("register successful");
            window.location.href="/login";
        }).catch(err=>{
            alert("registration failed");
        });               
        }
}
}
