import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './pages/front-office/order/create/create-order.component';
import { HomeComponent } from './pages/front-office/home/home.component';
import { LoginComponent } from './pages/back-office/login/login.component';
import { AuthGuard } from './utils/auth.guard';
import { InventoryPage } from './pages/back-office/inventory/inventory.page';
import { AboutComponent } from './pages/front-office/about/about.component';
import { CheckoutOrderComponent } from './pages/front-office/order/checkout/checkout-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'order/create', component: CreateOrderComponent },
  { path: 'order/checkout', component: CheckoutOrderComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    component: InventoryPage,
    canActivate: [AuthGuard],
  },
  { path: 'admin/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
