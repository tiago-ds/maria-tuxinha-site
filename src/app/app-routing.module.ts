import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAderecoComponent } from './components/add-adereco/add-adereco.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'add-adereco', component: AddAderecoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
