import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Adereco, BackendResponse } from '../models/Pedido';
@Injectable({
  providedIn: 'root'
})
export class AderecoService {

  apiUrl: string = environment.API_URL;
  baseUrl: string = `adereco`;

  constructor(private http: HttpClient) {}

  async getAderecos(): Promise<Adereco[]> {
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}/all`);
    try {
      const response = await this.http.get<BackendResponse<Adereco[]>>(requestUrl.toString()).toPromise();
      if (!response?.success || response?.data == null) {
        throw new Error('RequestFailedError');
      }
      return response.data;
    } catch (error) {
      throw new Error('RequestFailedError');
    }
  }

  async createAdereco(adereco: Adereco): Promise<boolean> {
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}`);
    try {
      const response = await this.http.post<BackendResponse<boolean>>(requestUrl.toString(), adereco).toPromise();
      if (!response?.success || response?.data == null) {
        throw new Error('RequestFailedError');
      }
      return response.data;
    } catch (error) {
      throw new Error('RequestFailedError');
    }
  }
}

