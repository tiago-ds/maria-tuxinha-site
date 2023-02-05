import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Adereco } from 'src/app/models/Pedido';
import { AderecoService } from 'src/app/services/adereco.service';
import { OrderService } from '../../../../services/order.service';
import { CheckoutDialogComponent } from '../../../../components/checkout-dialog/checkout-dialog.component';
import { mockedAderecos } from '../../../../utils/aderecoUtils';
import { isMobile } from 'src/app/utils/screen.utils';

@Component({
  selector: 'txa-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  // Form Groups
  orderForm: FormGroup;

  aderecos: Adereco[] = [];
  cabeloOptions: Adereco[] = [];
  peleOptions: Adereco[] = [];
  vestidoOptions: Adereco[] = [];
  sapatoOptions: Adereco[] = [];

  currentSelection: any = null;

  REGEX: RegExp = new RegExp('^https://drive.google.com/file/d/([^/]+)/.*$');

  constructor(
    private _formBuilder: FormBuilder,
    private aderecoService: AderecoService,
    private orderService: OrderService,
    public dialog: MatDialog
  ) {
    this.orderForm = this._formBuilder.group({
      skin: ['', Validators.required],
      hair: ['', Validators.required],
      dress: ['', Validators.required],
      shoe: ['', Validators.required],
      hairDescription: ['', Validators.required],
    });
  }

  openDialog(): void {
    if (!this.validateCreateOrder()) return;

    this.dialog.open(CheckoutDialogComponent, {
      panelClass: 'checkout-dialog',
      minWidth: isMobile() ? '100vw' : '500px',
      minHeight: isMobile() ? '100vh' : '90vh',
      data: [this.getAderecos(), this.getHairDescription()],
    });
  }

  ngOnInit(): void {
    this.getAderecosFromApi();
  }

  async getAderecosFromApi() {
    this.aderecos = await this.aderecoService.getAderecos();
    this.distributeAderecos();
  }

  distributeAderecos() {
    this.peleOptions = this.aderecos.filter((it) => it.type === 'pele');
    this.vestidoOptions = this.aderecos.filter((it) => it.type === 'vestido');
    this.cabeloOptions = this.aderecos.filter((it) => it.type === 'cabelo');
    this.sapatoOptions = this.aderecos.filter((it) => it.type === 'sapato');
  }

  aderecoMissing() {
    return (
      this.peleOptions.length &&
      this.cabeloOptions.length &&
      this.vestidoOptions.length &&
      this.sapatoOptions.length
    );
  }

  validateCreateOrder(): boolean {
    return this.orderForm.valid;
  }

  getAderecos(): Adereco[] {
    const aderecos: any = [];
    aderecos.push(
      this.peleOptions.find((it) => it.uuid === this.orderForm.value.skin)
    );
    aderecos.push(
      this.vestidoOptions.find((it) => it.uuid === this.orderForm.value.dress)
    );
    aderecos.push(
      this.cabeloOptions.find((it) => it.uuid === this.orderForm.value.hair)
    );
    aderecos.push(
      this.sapatoOptions.find((it) => it.uuid === this.orderForm.value.shoe)
    );
    return aderecos;
  }

  getHairDescription(): string {
    return this.orderForm.value.hairDescription;
  }

  onShoesChange(event: any) {
    this.currentSelection = event.source._value;
  }

  getFormControl(formName: string): any {
    return this.orderForm.get(formName);
  }

  isFormValid(formName: string): boolean {
    return this.orderForm.get(formName)?.valid || false;
  }
}
