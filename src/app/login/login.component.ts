import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:string="";
password:string="";

login(){
  if (this.name == ""){
    alert("name cannot be blank");
  }
  else{
    alert("register successfull");
    window.location.href="home";
  }
}
}
