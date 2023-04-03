import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOrderComponent } from './pages/front-office/order/create/create-order.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CarouselModule } from './components/carousel/carousel.module';
import { HomeComponent } from './pages/front-office/home/home.component';
import { LoginComponent } from './pages/back-office/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutComponent } from './pages/front-office/about/about.component';
import { CheckoutOrderComponent } from './pages/front-office/order/checkout/checkout-order.component';
import { GalleryModule } from './components/gallery/gallery.module';
import { InventoryModule } from './components/inventory/inventory.module';
import { InventoryPageModule } from './pages/back-office/inventory/inventory.page.module';
import { CheckoutDialogModule } from './components/checkout-dialog/checkout-dialog.module';
import { HeaderModule } from './components/header/header.module';
import { MessageDialogModule } from './components/message-dialog/message-dialog.module';
import { OrderAssemblerModule } from './components/order-assembler/order-assembler.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    CheckoutOrderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    CheckoutDialogModule,
    FormsModule,
    GalleryModule,
    HeaderModule,
    HttpClientModule,
    InventoryModule,
    InventoryPageModule,
    MatStepperModule,
    MatFormFieldModule,
    MessageDialogModule,
    OverlayModule,
    OrderAssemblerModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    SocialLoginModule,
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
  exports: [],
})
export class AppModule {}
