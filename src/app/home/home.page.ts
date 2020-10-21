import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ContactPage } from './header/header.page.ts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public contactPage: ContactPage) {}

}
