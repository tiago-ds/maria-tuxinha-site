import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Adereco, BackendResponse } from '../models/Pedido';
@Injectable({
  providedIn: 'root',
})
export class AderecoService {
  apiUrl: string = environment.API_URL;
  baseUrl: string = `adereco`;

  constructor(private http: HttpClient) {}

  async getAderecos(): Promise<Adereco[]> {
    return [
      {
        type: 'cabelo',
        uuid: '3ad27277-3f53-467a-8b31-15e398f61e84',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1cb5vGI0AU6eclXD8QmI9TpbsFJoJDBhs',
        name: 'Cabelo Loiro',
        isAvailable: true,
        lastModified: '2022-09-03T03:05:04.294Z' as unknown as Date,
      } as unknown as Adereco,
      {
        type: 'cabelo',
        uuid: '3ad27277-3f53-467a-8b31-15e398f61e85',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1cb5vGI0AU6eclXD8QmI9TpbsFJoJDBhs',
        name: 'Cabelo Loiro 2',
        isAvailable: true,
        lastModified: '2022-09-03T03:05:04.294Z' as unknown as Date,
      } as unknown as Adereco,
      {
        lastModified: '2022-09-02T22:15:02.263Z' as unknown as Date,
        type: 'pele',
        name: 'Pele clara',
        uuid: '57cf5f7b-e05a-403c-a7b7-8d5410e73194',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1QLw_XtzRiQ7rEpgEf1DMfta_QpivWnYO',
        isAvailable: true,
      } as unknown as Adereco,
      {
        lastModified: '2022-09-02T22:15:02.263Z' as unknown as Date,
        type: 'pele',
        name: 'Pele clara',
        uuid: '58cf5f7b-e05a-403c-a7b7-8d5410e73194',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1QLw_XtzRiQ7rEpgEf1DMfta_QpivWnYO',
        isAvailable: true,
      } as unknown as Adereco,
      {
        lastModified: '2022-09-02T22:15:02.263Z' as unknown as Date,
        type: 'pele',
        name: 'Pele clara',
        uuid: '59cf5f7b-e05a-403c-a7b7-8d5410e73194',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1QLw_XtzRiQ7rEpgEf1DMfta_QpivWnYO',
        isAvailable: true,
      } as unknown as Adereco,
      {
        uuid: 'b8446230-f529-42ca-b2d4-d456c43689fe',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=11TFqPIDZFRvpSoNgEpyDM_WtPJfrOKF7',
        name: 'Vestido de bolinhas',
        type: 'vestido',
        isAvailable: true,
        lastModified: '2022-09-03T03:06:53.428Z' as unknown as Date,
      } as unknown as Adereco,
      {
        uuid: '98446230-f529-42ca-b2d4-d456c43689fe',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=11TFqPIDZFRvpSoNgEpyDM_WtPJfrOKF7',
        name: 'Vestido de bolinhas',
        type: 'vestido',
        isAvailable: true,
        lastModified: '2022-09-03T03:06:53.428Z' as unknown as Date,
      } as unknown as Adereco,
      {
        uuid: 'b1446230-f529-42ca-b2d4-d456c43689fe',
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=11TFqPIDZFRvpSoNgEpyDM_WtPJfrOKF7',
        name: 'Vestido de bolinhas',
        type: 'vestido',
        isAvailable: true,
        lastModified: '2022-09-03T03:06:53.428Z' as unknown as Date,
      } as unknown as Adereco,
      {
        lastModified: '2022-09-03T03:07:52.986Z' as unknown as Date,
        isAvailable: true,
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1PMVtpuO7W2UHe3H9_pqWQbxA6hhqC7LQ',
        type: 'sapato',
        name: 'Sapato Social',
        uuid: 'f6ad8210-2c6e-4a99-840c-5fd112320f91',
      } as unknown as Adereco,
      {
        lastModified: '2022-09-03T03:07:52.986Z' as unknown as Date,
        isAvailable: true,
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1PMVtpuO7W2UHe3H9_pqWQbxA6hhqC7LQ',
        type: 'sapato',
        name: 'Sapato Social 2',
        uuid: 'f7ad8210-2c6e-4a99-840c-5fd112320f92',
      } as unknown as Adereco,
      {
        lastModified: '2022-09-03T03:07:52.986Z' as unknown as Date,
        isAvailable: true,
        pictureUrl:
          'https://drive.google.com/uc?export=view&id=1PMVtpuO7W2UHe3H9_pqWQbxA6hhqC7LQ',
        type: 'sapato',
        name: 'Sapato Social 3',
        uuid: 'f8ad8210-2c6e-4a99-840c-5fd112320f93',
      } as unknown as Adereco,
    ];
    // const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}/all`);
    // try {
    //   const response = await this.http
    //     .get<BackendResponse<Adereco[]>>(requestUrl.toString())
    //     .toPromise();
    //   if (!response?.success || response?.data == null) {
    //     throw new Error('RequestFailedError');
    //   }
    //   return response.data;
    // } catch (error) {
    //   throw new Error('RequestFailedError');
    // }
  }

  async createAdereco(adereco: Adereco): Promise<boolean> {
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}`);
    try {
      const response = await this.http
        .post<BackendResponse<boolean>>(requestUrl.toString(), adereco)
        .toPromise();
      if (!response?.success || response?.data == null) {
        throw new Error('RequestFailedError');
      }
      return response.data;
    } catch (error) {
      throw new Error('RequestFailedError');
    }
  }

  async editAdereco(adereco: Adereco): Promise<boolean> {
    const requestUrl = new URL(`${this.apiUrl}${this.baseUrl}`);
    try {
      const response = await this.http
        .put<BackendResponse<boolean>>(requestUrl.toString(), adereco)
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
