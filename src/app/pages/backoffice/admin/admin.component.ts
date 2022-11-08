import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAderecoComponent } from 'src/app/components/add-adereco/add-adereco.component';
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

  constructor(
    private aderecoService: AderecoService,
    public dialog: MatDialog
  ) {}

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

  openDialog(type: string) {
    this.dialog.open(AddAderecoComponent, {
      width: '300px',
      data: type,
    });
  }
}
