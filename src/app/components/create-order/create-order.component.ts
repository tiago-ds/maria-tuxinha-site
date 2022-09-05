import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Adereco } from 'src/app/models/Pedido';
import { AderecoService } from 'src/app/services/adereco.service';
import { OrderService } from '../../services/order.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  // Form Groups
  peleForm: FormGroup;
  cabeloForm: FormGroup;
  vestidoForm: FormGroup;
  sapatoForm: FormGroup;

  aderecos: Adereco[] = [];
  cabeloOptions: Adereco[] = [];
  peleOptions: Adereco[] = [];
  vestidoOptions: Adereco[] = [];
  sapatoOptions: Adereco[] = [];

  REGEX: RegExp = new RegExp("^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)\/.*$");

  constructor(private _formBuilder: FormBuilder, private aderecoService: AderecoService,
              private orderService: OrderService, public dialog: MatDialog) {
    this.peleForm = this._formBuilder.group({
      ["skin"]: ['', Validators.required],
    });
    this.cabeloForm = this._formBuilder.group({
      ["hair"]: ['', Validators.required],
    });
    this.vestidoForm = this._formBuilder.group({
      ["dress"]: ['', Validators.required],
    });
    this.sapatoForm = this._formBuilder.group({
      ["shoe"]: ['', Validators.required],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '300px',
      data: this.getAderecos(),
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  async ngOnInit(): Promise<void> {
    this.aderecos = await this.aderecoService.getAderecos();
    this.distributeAderecos();
  }

  distributeAderecos() {
    this.peleOptions = this.aderecos.filter((it) => it.type === "pele");
    this.vestidoOptions = this.aderecos.filter((it) => it.type === "vestido");
    this.cabeloOptions = this.aderecos.filter((it) => it.type === "cabelo");
    this.sapatoOptions = this.aderecos.filter((it) => it.type === "sapato");
  }

  validateCreateOrder(): boolean {
    return this.peleForm.valid &&
            this.cabeloForm.valid &&
              this.vestidoForm.valid &&
                this.sapatoForm.valid;
  }

  getAderecos(): Adereco[] {
    const aderecos: any = [];
    aderecos.push(this.peleOptions.find((it) => it.uuid === this.peleForm.value.skin));
    aderecos.push(this.vestidoOptions.find((it) => it.uuid === this.vestidoForm.value.dress));
    aderecos.push(this.cabeloOptions.find((it) => it.uuid === this.cabeloForm.value.hair));
    aderecos.push(this.sapatoOptions.find((it) => it.uuid === this.sapatoForm.value.shoe));
    return aderecos;
  }
}
