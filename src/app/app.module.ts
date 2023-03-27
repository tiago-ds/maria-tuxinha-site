import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateOrderComponent } from './pages/front-office/order/create/create-order.component';
import { InventoryDialogComponent } from './components/inventory-dialog/inventory-dialog.component';
import { CheckoutDialogComponent } from './components/checkout-dialog/checkout-dialog.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CarouselModule } from './components/carousel/carousel.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './pages/front-office/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GalleryCardComponent } from './components/gallery/gallery-card/gallery-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OrderAssemblerItemComponent } from './components/order-assembler/order-assembler-item/order-assembler-item.component';
import { OrderAssemblerGroupComponent } from './components/order-assembler/order-assembler-group/order-assembler-group.component';
import { LoginComponent } from './pages/back-office/login/login.component';
import { InventoryComponent } from './pages/back-office/inventory/inventory.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InventoryItemCardComponent } from './components/inventory-item-card/inventory-item-card.component';
import { GalleryAdminCardComponent } from './components/gallery-admin-card/gallery-admin-card.component';
import { AboutComponent } from './pages/front-office/about/about.component';
import { CheckoutOrderComponent } from './pages/front-office/order/checkout/checkout-order.component';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    InventoryDialogComponent,
    CheckoutDialogComponent,
    HomeComponent,
    GalleryCardComponent,
    GalleryComponent,
    OrderAssemblerItemComponent,
    OrderAssemblerGroupComponent,
    LoginComponent,
    InventoryComponent,
    HeaderComponent,
    InventoryItemCardComponent,
    GalleryAdminCardComponent,
    AboutComponent,
    CheckoutOrderComponent,
    MessageDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatGridListModule,
    MatRadioModule,
    MatBadgeModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    NgxMaskModule.forRoot(),
    OverlayModule,
    SocialLoginModule,
    CarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '989024145127-fhglv8qpsumv2nifo5gign4q32r9nllh.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    GalleryCardComponent,
    GalleryComponent,
    OrderAssemblerItemComponent,
    OrderAssemblerGroupComponent,
    HeaderComponent,
    InventoryItemCardComponent,
    MessageDialogComponent,
  ],
})
export class AppModule {}
