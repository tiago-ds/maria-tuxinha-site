import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAderecoComponent } from './components/add-adereco/add-adereco.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'add-adereco', component: AddAderecoComponent },
  { path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
