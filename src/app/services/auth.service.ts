import { Injectable } from '@angular/core';
import { BackendResponse } from '../models/Pedido';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;

  constructor(private http: HttpClient) {}

  async isLoggedIn(): Promise<boolean> {
    const user = localStorage.getItem('user');
    const requestUrl = new URL(`${environment.API_URL}auth/validate`);

    if (user) {
      const userObj = JSON.parse(user);
      const token = userObj.idToken;
      const userId = userObj.id;
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const response = await this.http
        .post<BackendResponse<boolean>>(
          requestUrl.toString(),
          { userId },
          { headers }
        )
        .toPromise()
        .catch((err) => {
          return { success: false, data: false };
        });

      return response ? response.success : false;
    } else {
      return false;
    }
  }

  async login(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
}
