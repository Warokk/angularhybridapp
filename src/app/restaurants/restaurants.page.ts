import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  bistrotDesGascons = {
    name: 'Bistrot Des Gascons',
    imgUrl: 'assets/desGascons.png'
  };
  lesFousDeLile = {
    name: "Les Fous De L'île",
    imgUrl: 'assets/fousDeLIle.png'
  };
  bistrotLandais = {
    name: 'Bistrot Landais',
    imgUrl: 'assets/bistrotLandais.png'
  };
  villa9Trois = {
    name: 'Villa 9-Trois',
    imgUrl: 'assets/villa9Trois.png'
  };
  bistrotDuSommelier = {
    name: 'Bistrot Du Sommelier',
    imgUrl: 'assets/duSommelier.png'
  };

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  openRestaurantWithNameBistrotDesGascons() {
    this.dataService.setData(8, this.bistrotDesGascons);
    this.router.navigateByUrl('/restaurant/8');
  }
  openRestaurantWithNameLesFousDeLile() {
    this.dataService.setData(9, this.lesFousDeLile);
    this.router.navigateByUrl('/restaurant/9');
  }
  openRestaurantWithNameBistrotLandais() {
    this.dataService.setData(10, this.bistrotLandais);
    this.router.navigateByUrl('/restaurant/10');
  }
  openRestaurantWithNameVilla9Trois() {
    this.dataService.setData(11, this.villa9Trois);
    this.router.navigateByUrl('/restaurant/11');
  }
  openRestaurantWithNameBistrotDuSommelier() {
    this.dataService.setData(12, this.bistrotDuSommelier);
    this.router.navigateByUrl('/restaurant/12');
  }
}
