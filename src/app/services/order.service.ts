import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BackendResponse, Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = environment.API_URL;
  baseUrl: string = `pedido`;
  constructor(private http: HttpClient) { }


  async createOrder(pedido: Pedido) {
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}`);
    try {
      const response = await this.http.post<BackendResponse<boolean>>(requestUrl.toString(), pedido).toPromise();
      if (!response?.success || response?.data == null) {
        throw new Error('RequestFailedError');
      }
      return response.data;
    } catch (error) {
      throw new Error('RequestFailedError');
    }
  }
}
