import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {
  SocialAuthService,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { MockService } from 'ng-mocks';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';

class SocialAuthMock {
  authState = new Subject();
}

describe('AdminLoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: SocialAuthService,
          useValue: new SocialAuthMock(),
        },
        {
          provide: AuthService,
          useValue: MockService(AuthService),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
