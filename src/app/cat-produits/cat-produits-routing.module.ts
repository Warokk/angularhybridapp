import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatProduitsPage } from './cat-produits.page';

const routes: Routes = [
  {
    path: '',
    component: CatProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatProduitsPageRoutingModule {}
