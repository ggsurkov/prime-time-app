import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";
import {RazlivPage} from "../category/razliv/razliv.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public nav: NavController) {}
  public goToRazlivPage():void {
    this.nav.navigateForward('/razliv');
  }
  public goToCart(): void {
    this.nav.navigateBack('/cart');
  }
}
