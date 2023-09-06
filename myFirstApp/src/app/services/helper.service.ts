import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController) { }

    sumar(val1:number,val2:number){
      var result = val1 + val2;
      return result;
    }


    async showAlert(msg:string,title:string){
      var alert = await this.alertService.create({cssClass:"alertClass",header:title,message:msg,subHeader:"Hola" ,buttons:['Aceptar']})
      await alert.present();
      return alert;
    }

}
