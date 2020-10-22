import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauxPageRoutingModule } from './bateaux-routing.module';

import { BateauxPage } from './bateaux.page';
import { ComponentsModule } from '../component/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BateauxPage]
})
export class BateauxPageModule {}
