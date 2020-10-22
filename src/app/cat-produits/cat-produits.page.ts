import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-produits',
  templateUrl: './cat-produits.page.html',
  styleUrls: ['./cat-produits.page.scss'],
})
export class CatProduitsPage implements OnInit {

  poissons = {
    name: 'Poissons',
    category:0
  };
  coquillage = {
    name: 'Coquillage',
    category: 1
  };
  crustaces = {
    name: 'Crustacés',
    category: 2
  };
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  openCatWithNamePoissons() {
    this.dataService.setData(13, this.poissons);
    this.router.navigateByUrl('/produit/13');
  }
  openCatWithNameCoquillages() {
    this.dataService.setData(14, this.coquillage);
    this.router.navigateByUrl('/produit/14');
  }
  openCatWithNameCrustaces() {
    this.dataService.setData(15, this.crustaces);
    this.router.navigateByUrl('/produit/15');
  }

}
