import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  data: any;
  apiData: {};
  hideMe = true;
  products=[];
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private render: Renderer2, private file: File, private dataService: DataService) { }

  ngOnInit() {

    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }

    if(this.data.name == "Poissons"){
      this.http.get('assets/json/poissons.json').subscribe((response) =>{
        this.apiData = response;
      })
    }
    if(this.data.name == "Crustacés"){
      this.http.get('assets/json/crustaces.json').subscribe((response) =>{
        this.apiData = response;
      })
    }
    if(this.data.name == "Coquillages"){
      this.http.get('assets/json/coquillages.json').subscribe((response) =>{
        this.apiData = response;
      })
    }
  }

  addToCart(controlToShow, product){
    this.render.setStyle(controlToShow, 'visibility', 'visible');
    this.products.push(product);
  }
  removeFromCart(controlToShow,product){
    this.render.setStyle(controlToShow, 'visibility', 'hidden');
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
  }
  openCartWithProducts(){
    this.dataService.setData(20, this.products);
    this.router.navigateByUrl('/cart/20');
  }

}
