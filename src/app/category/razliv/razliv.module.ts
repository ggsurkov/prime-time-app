import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RazlivPageRoutingModule } from './razliv-routing.module';

import {RazlivPage} from './razliv.page';
import {ItemCardComponent} from "../../components/item-card/item-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RazlivPageRoutingModule
  ],
  declarations: [RazlivPage, ItemCardComponent]
})
export class RazlivPageModule {}
