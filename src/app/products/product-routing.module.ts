import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProducDetailGuard } from './produc-detail.guard';
import { ProductDetailComponent } from './product-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProducDetailGuard],
        component: ProductDetailComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
