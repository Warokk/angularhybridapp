import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  homard = {
    name: 'Homard',
    imgUrl: 'assets/homardRecette.png'
  };
  stJacques = {
    name: 'St Jacques',
    imgUrl: 'assets/saintJacques.png'
  };
  bar = {
    name: 'Bar',
    imgUrl: 'assets/barRecette.png'
  };
  tourteau = {
    name: 'Tourteau',
    imgUrl: 'assets/poulpe.png'
  };
  
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  openRecipeWithNameHomard() {
    this.dataService.setData(4, this.homard);
    this.router.navigateByUrl('/recette/4');
  }
  openRecipeWithNameStJacques() {
    this.dataService.setData(5, this.stJacques);
    this.router.navigateByUrl('/recette/5');
  }
  openRecipeWithNameBar() {
    this.dataService.setData(6, this.bar);
    this.router.navigateByUrl('/recette/6');
  }
  openRecipeWithNameTourteau() {
    this.dataService.setData(7, this.tourteau);
    this.router.navigateByUrl('/recette/7');
  }
}
