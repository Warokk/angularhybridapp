import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitPageRoutingModule } from './produit-routing.module';

import { ProduitPage } from './produit.page';
import { ComponentsModule } from '../component/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProduitPage]
})
export class ProduitPageModule {}
