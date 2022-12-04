import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BackendResponse } from '../models/Pedido';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  apiUrl: string = environment.API_URL;
  baseUrl: string = `gallery`;

  constructor(private http: HttpClient) {}

  async addPhoto(photo: Photo): Promise<boolean> {
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}`);

    try {
      const response = await this.http
        .post<BackendResponse<boolean>>(requestUrl.toString(), photo)
        .toPromise();
      if (!response?.success || response?.data == null) {
        throw new Error('RequestFailedError');
      }
      return response.data;
    } catch (error) {
      throw new Error('RequestFailedError');
    }
  }
}
