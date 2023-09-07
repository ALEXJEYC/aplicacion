import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dos',
  templateUrl: './menu-dos.page.html',
  styleUrls: ['./menu-dos.page.scss'],
})
export class MenuDosPage {
  ubicacionPartida: string = ''; // Define la propiedad 'ubicacionPartida'
  ubicacionDestino: string = ''; // Define la propiedad 'ubicacionDestino'
  costoEstimado: number = 0; // Define la propiedad 'costoEstimado'

  constructor(private router:Router) {}

  menuSeis(){
    this.router.navigateByUrl("menu-seis");
  }
}