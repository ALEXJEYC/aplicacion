import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-seis',
  templateUrl: './menu-seis.page.html',
  styleUrls: ['./menu-seis.page.scss'],
})
export class MenuSeisPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigateByUrl("menu");
  }

}
