import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatProduitsPageRoutingModule } from './cat-produits-routing.module';

import { CatProduitsPage } from './cat-produits.page';
import { ComponentsModule } from '../component/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatProduitsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CatProduitsPage]
})
export class CatProduitsPageModule {}
