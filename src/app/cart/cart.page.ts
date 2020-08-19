import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public items: { name: string, price: number, count: number }[] = [];
  constructor(public nav: NavController) { }

  ngOnInit() {
    this.items.push( { name: 'Рыжая Соня', price: 350, count: 2} )
    this.items.push( { name: 'Кальмар сушеный', price: 120, count: 3.43} )
  }
  public backToCategory():void {
    this.nav.navigateBack('/');
  }
  public acceptCart():void {
    return;
  }

}
