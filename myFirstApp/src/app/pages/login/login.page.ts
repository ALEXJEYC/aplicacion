import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(private router:Router,private helperService:HelperService) { }

  ngOnInit() {
    console.log("Resultado suma ---> ", this.helperService.sumar(50,100));
    
  }


  login(){
    if (this.email == "") {
      alert("Debe ingresar un email.");
      return;
    }
    if (this.contrasena == "") {
      //alert("Debe ingresar una contraseña.")
      this.helperService.showAlert("Debe ingresar una contraseña.","Error");
      return;
    }
    
    if (this.email == "micorreo" && this.contrasena == "123") {
      //alert("Login correcto.");
      this.router.navigateByUrl("menu");
    }else{
      alert("Crdeneciales no validas.");
    }
    
  }

}
