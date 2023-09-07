import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  email: string = '';
  contrasena: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }
   
  registrar(){
    this.router.navigate(['/registrar']);
  }
  
  recuperar(){
    this.router.navigate(['/recuperar']);
  }
  login(){
    this.router.navigate(['/login']);
  }
  
  

}

