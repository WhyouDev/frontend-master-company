import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: ProductComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProductRoutingModule { }
