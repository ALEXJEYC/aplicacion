import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard , AnimationController} from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;

  menuArray:Menu[]=[];
  loading:boolean = true;

  constructor(
    private router:Router,
    private animationCtrl: AnimationController
    ) { }

    ngAfterViewInit() {
      this.animation = this.animationCtrl
        .create()
        .addElement(document.querySelectorAll(".cardTwo"))
        .duration(1500)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
    }


    


  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    console.table(this.menuArray);
    console.error("Soy un error!!!!")    
    console.log("inicio del componente");
  }

  ionViewWillEnter(){
    console.log("Entrando a la vista");
  }

  ionViewDidEnter(){
    console.log("Vista cargada");
  }

  ionViewWillLeave(){
    console.log("Abandonando la vista");
  }

  ionViewDidLeave(){
    console.log("Abandonó la vista");
  }




  logOut(){
    this.router.navigateByUrl("login");
  }


  menuUno(){
    this.router.navigateByUrl("menu-uno");
  }

  menuDos(){
    this.router.navigateByUrl("menu-dos");
  }
  menuSeis(){
    this.router.navigateByUrl("menu-seis");
  }

}
