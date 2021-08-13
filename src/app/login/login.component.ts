import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "";
  password: string = "";

  login() {
    let loginValue = {
      email: this.name,
      password: this.password
    }
    if (this.name == "" || this.name == null || this.name.trim() == "") {
      alert("name cannot be blank");
    }
    else if (this.password.length <= 6) {
      alert("password is too short");
  }
    else {
      const url = "https://product-mock-api.herokuapp.com/mobilesalesapp/api/v1/auth/login"
      axios.post(url, loginValue).then(res => {
        console.log(res);
        let user = res.data;
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res.data));
        alert("login successfull");
        window.location.href = "/home";
      }).catch(err => {
        console.log(err);
        alert("unable to login");
      });
    }
  }
}

