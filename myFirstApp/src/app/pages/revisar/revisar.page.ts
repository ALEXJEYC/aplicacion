import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.page.html',
  styleUrls: ['./revisar.page.scss'],
})
export class RevisarPage {

  constructor(private router: Router) { }

  volver() {
    // Aquí puedes agregar la lógica para la función 'volver' cuando el usuario hace clic en el botón 'Volver'
    this.router.navigate(['/recuperar']); // Puedes navegar de vuelta a la página de recuperación
  }
}