import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup
  loading : boolean = false

  constructor(private fb : FormBuilder , private router : Router){
    this.form = this.fb.group({
      email : ['' ,Validators.required ,Validators.email],
      password : ['' , Validators.required]
    })
  }

  ngOnInit(): void {
      
  }

  connection(){
    const email = this.form.value.email
    const password = this.form.value.password


    if (email == 'user' && password == 'user'){
      //Redirection to home page
      this.loading = true 
      
      setTimeout(() => {
        this.loading = false
        this.router.navigate(['home'])
      }, 2000);

    }else {
      //
      this.router.navigate(['login'])
      this.form.reset()
    }
  }



}
