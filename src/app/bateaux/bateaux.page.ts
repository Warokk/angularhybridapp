import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  boatDeLaBrise = {
    name: 'De La Brise',
    imgUrl: 'assets/deLaBrise.png'
  };
  saphir = {
    name: 'Saphir',
    imgUrl: 'assets/saphir.png'
  };
  gastMicher = {
    name: 'Gast Micher',
    imgUrl: 'assets/gastMicher.png'
  };
  aquilon = {
    name: 'Aquilon',
    imgUrl: 'assets/aquilon.png'
  };

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  openBoatWithNameDeLaBrise() {
    this.dataService.setData(0, this.boatDeLaBrise);
    this.router.navigateByUrl('/bateau/0');
  }
  openBoatWithNameSaphir() {
    this.dataService.setData(1, this.saphir);
    this.router.navigateByUrl('/bateau/1');
  }
  openBoatWithNameGastMicher() {
    this.dataService.setData(2, this.gastMicher);
    this.router.navigateByUrl('/bateau/2');
  }
  openBoatWithNameAquilon() {
    this.dataService.setData(3, this.aquilon);
    this.router.navigateByUrl('/bateau/3');
  }
}
