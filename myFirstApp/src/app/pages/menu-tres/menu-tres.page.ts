// menu-tres.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tres',
  templateUrl: './menu-tres.page.html',
  styleUrls: ['./menu-tres.page.scss'],
})
export class MenuTresPage {
  origen: string = ''; // Define la propiedad origen
  destino: string = ''; // Define la propiedad destino
  costoTotal: number = 0; // Define la propiedad costoTotal

  constructor(private router: Router) {}

  confirmarViaje() {
    // Lógica para confirmar el viaje
    // Esto puede incluir la lógica de pago y otras acciones
    // Redirecciona al usuario a la página "Gracias por Viajar con Nosotros"
    this.router.navigate(['/menu-tres']);
  }
}
