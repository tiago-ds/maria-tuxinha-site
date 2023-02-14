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

  async getAllPhotos(): Promise<Photo[]> {
    // return [
    //   {
    //     pictureId: '1jFeb04pnaxo6Us7srvfqsYoxdVDJDJ4a',
    //     subtitle: 'Pentado rabo de cavalo louro claro dourado acinzentado',
    //     title: 'Maria',
    //     type: 'gallery',
    //     uuid: '00987ebb-eded-45ba-a597-20663376b1d0',
    //   },
    //   {
    //     subtitle: 'Cabelo Chanel escovado louro escuro marron',
    //     type: 'gallery',
    //     uuid: '0b580cfb-112e-4f83-b8fb-95dcf508df82',
    //     pictureId: '1rjdVfHYbebYMGHs-zxtzN0khlro9exu4',
    //     title: 'Maria',
    //   },
    //   {
    //     title: 'Maria',
    //     pictureId: '1HRAeR_YgNzMNTR439OB6eLal1wIgjn7S',
    //     type: 'gallery',
    //     uuid: '20939b8f-563f-4132-95ca-4259fabee09a',
    //     subtitle: 'Cabelo crespo grande',
    //   },
    //   {
    //     type: 'gallery',
    //     title: 'Maria',
    //     pictureId: '1wmWVr-KlqAjFKROtmFlUWSyvgncoCY9z',
    //     uuid: '271cdc8b-1777-425c-9f71-60f0cd0b55ad',
    //     subtitle: 'Médica/Enfermeira cabelos pretos escovado',
    //   },
    // ];
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}/all`);

    try {
      const response = await this.http
        .get<BackendResponse<Photo[]>>(requestUrl.toString())
        .toPromise();
      if (!response?.success || response?.data == null) {
        throw new Error('RequestFailedError');
      }
      return response.data;
    } catch (error) {
      throw new Error('RequestFailedError');
    }
  }

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
