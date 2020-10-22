import { NgModule } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component';
import { CartHeaderComponent } from '../component/cart-header/cart-header.component';

@NgModule({
    declarations:[HeaderComponent, CartHeaderComponent],
    exports:[HeaderComponent, CartHeaderComponent]
})

export class ComponentsModule{}