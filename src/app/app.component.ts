import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {CartStorageService} from "./storage/cart-storage/cart-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public settings: { title: string, iconName: string }[] = []
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private cartStorageService: CartStorageService
  ) {
    this.initializeApp();
    this.cartStorageService.initCartStorageDefaultData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.settings.push({ title: 'Настройка1', iconName: 'book' })
    this.settings.push({ title: 'Настройка2', iconName: 'book' })
    this.settings.push({ title: 'Настройка3', iconName: 'book' })
    this.settings.push({ title: 'Настройка4', iconName: 'book' })
  }
}
