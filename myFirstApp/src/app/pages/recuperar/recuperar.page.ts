import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  emailOrPhone: string = ''; // Define la propiedad 'emailOrPhone'

  constructor(private router: Router) { }

  revisar() {
    // Aquí puedes agregar la lógica para revisar el correo o número de teléfono y enviar el correo de recuperación

    // Después de enviar el correo, navega a la página de confirmación
    this.router.navigate(['/revisar']);
  }
}
