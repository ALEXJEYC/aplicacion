import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cuatro',
  templateUrl: './menu-cuatro.page.html',
  styleUrls: ['./menu-cuatro.page.scss'],
})
export class MenuCuatroPage {
  constructor(private router: Router) {}

  volverAlMenuPrincipal() {
    // Redirecciona al usuario de vuelta al menú principal
    this.router.navigate(['/menu']);
  }
}