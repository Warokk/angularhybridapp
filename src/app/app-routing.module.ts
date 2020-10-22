import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'bateau',
    loadChildren: () => import('./bateau/bateau.module').then( m => m.BateauPageModule)
  },
  {
    path: 'bateau/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./bateau/bateau.module').then( m => m.BateauPageModule)
  },
  {
    path: 'restaurant/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'recette/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'cat-produits',
    loadChildren: () => import('./cat-produits/cat-produits.module').then( m => m.CatProduitsPageModule)
  },
  {
    path: 'produit/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
