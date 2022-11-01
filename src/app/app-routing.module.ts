import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAderecoComponent } from './pages/backoffice/add-adereco/add-adereco.component';
import { CreateOrderComponent } from './pages/user/create-order/create-order.component';
import { HomeComponent } from './pages/user/home/home.component';
import { AdminLoginComponent } from './pages/backoffice/admin-login/admin-login.component';
import { AuthGuard } from './utils/auth.guard';
import { AdminComponent } from './pages/backoffice/admin/admin.component';

const routes: Routes = [
  {
    path: 'maria-tuxinha-site',
    redirectTo: 'maria-tuxinha-site/home',
    pathMatch: 'full',
  },
  { path: 'maria-tuxinha-site/home', component: HomeComponent },
  { path: 'maria-tuxinha-site/create-order', component: CreateOrderComponent },
  {
    path: 'maria-tuxinha-site/admin/add-adereco',
    component: AddAderecoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'maria-tuxinha-site/admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  { path: 'maria-tuxinha-site/admin/login', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
