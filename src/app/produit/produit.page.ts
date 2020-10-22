import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  data: any;
  apiData: any;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');     
    //let options = new RequestOptions({ headers: headers });

    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }

    this.http.get('http://51.255.166.155:1352/tig/products/?format=api', headers).subscribe((response) =>{
      this.apiData = response;
    })
  }

}
