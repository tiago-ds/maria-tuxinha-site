import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateOrderComponent } from './pages/user/create-order/create-order.component';
import { AddAderecoComponent } from './components/adereco-dialog/adereco-dialog.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
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
import { HomeComponent } from './pages/user/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GalleryCardComponent } from './components/gallery/gallery-card/gallery-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OrderAssemblerItemComponent } from './components/order-assembler/order-assembler-item/order-assembler-item.component';
import { OrderAssemblerGroupComponent } from './components/order-assembler/order-assembler-group/order-assembler-group.component';
import { AdminLoginComponent } from './pages/backoffice/admin-login/admin-login.component';
import { AdminComponent } from './pages/backoffice/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PhotoDialogComponent } from './components/photo-dialog/photo-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    AddAderecoComponent,
    CheckoutComponent,
    HomeComponent,
    GalleryCardComponent,
    GalleryComponent,
    OrderAssemblerItemComponent,
    OrderAssemblerGroupComponent,
    AdminLoginComponent,
    AdminComponent,
    HeaderComponent,
    PhotoDialogComponent,
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
              '450360262247-1hrno65tcabhre20dfeeegbkc6vus2aj.apps.googleusercontent.com'
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
    PhotoDialogComponent,
  ],
})
export class AppModule {}
