import { Component, OnInit } from '@angular/core';
import { AderecoService } from 'src/app/services/adereco.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  aderecos: any;
  peles: any;
  vestidos: any;
  cabelos: any;
  sapatos: any;

  constructor(private aderecoService: AderecoService) {}

  ngOnInit(): void {
    this.getAderecosFromApi();
  }

  async getAderecosFromApi() {
    this.aderecos = await this.aderecoService.getAderecos();
    this.distributeAderecos();
  }

  distributeAderecos() {
    this.peles = this.aderecos.filter((it: any) => it.type === 'pele');
    this.vestidos = this.aderecos.filter((it: any) => it.type === 'vestido');
    this.cabelos = this.aderecos.filter((it: any) => it.type === 'cabelo');
    this.sapatos = this.aderecos.filter((it: any) => it.type === 'sapato');
  }
}
