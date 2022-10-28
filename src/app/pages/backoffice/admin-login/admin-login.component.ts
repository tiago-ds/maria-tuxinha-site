import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.login(user);
      this.router.navigate(['admin']);
    });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
