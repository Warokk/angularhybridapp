import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  data: any;
  numbers = [];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

}
