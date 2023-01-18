import { Component, OnInit } from '@angular/core';
import { AderecoService } from 'src/app/services/adereco.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { DialogsService } from '../../../services/dialogs.service';

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
  photos: any;
  tabs: any;

  constructor(
    private aderecoService: AderecoService,
    private galleryService: GalleryService,
    public dialogs: DialogsService
  ) {}

  ngOnInit(): void {
    this.getAderecosFromApi();
  }

  async getAderecosFromApi() {
    this.aderecos = await this.aderecoService.getAderecos();
    this.photos = await this.galleryService.getAllPhotos();
    this.distributeAderecos();
  }

  distributeAderecos() {
    this.peles = this.aderecos.filter((it: any) => it.type === 'pele');
    this.vestidos = this.aderecos.filter((it: any) => it.type === 'vestido');
    this.cabelos = this.aderecos.filter((it: any) => it.type === 'cabelo');
    this.sapatos = this.aderecos.filter((it: any) => it.type === 'sapato');
    this.tabs = [
      {
        label: 'Tons de pele',
        content: this.peles,
        buttonLabel: 'Adicionar tom de pele',
        dialog: 'Pele',
      },
      {
        label: 'Vestidos',
        content: this.vestidos,
        buttonLabel: 'Adicionar vestido',
        dialog: 'Vestido',
      },
      {
        label: 'Cabelos',
        content: this.cabelos,
        buttonLabel: 'Adicionar cabelo',
        dialog: 'Cabelo',
      },
      {
        label: 'Sapatos',
        content: this.sapatos,
        buttonLabel: 'Adicionar sapato',
        dialog: 'Sapato',
      },
    ];
  }
}
