import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertController:AlertController) { }

    sumar(val1:number,val2:number){
      var result = val1 + val2;
      return result;
    }
    async showAlert(message: string, title: string) {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: ['OK'],
      });
  
      await alert.present();
    }  
}
