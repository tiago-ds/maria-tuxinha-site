import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from 'src/app/services/order.service';
import { Adereco, Cliente, Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  // Form controllers
  NAME: string;
  EMAIL: string;
  PHONE_NUMBER: string;

  clienteForm: FormGroup = new FormGroup({});

  constructor(private orderService: OrderService,
                public dialogRef: MatDialogRef<CheckoutComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: Adereco[],
                  private _snackBar: MatSnackBar) {
    this.NAME = 'name';
    this.EMAIL = 'email';
    this.PHONE_NUMBER = 'phoneNumber';
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.clienteForm = new FormGroup({
      [this.NAME]: new FormControl(undefined, Validators.required),
      [this.EMAIL]: new FormControl(undefined, Validators.pattern("^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$")),
      [this.PHONE_NUMBER]: new FormControl(undefined, Validators.pattern("\\(?([0-9]{2})\\)?([ .-]?)([0-9]{5})\\2([0-9]{4})")),
    });
  }

  async finish() {
    const aderecos: Adereco[] = this.data;
    const cliente: Cliente = this.clienteForm.value as Cliente;
    const pedido: Pedido = {
      cliente: cliente,
      aderecos: aderecos
    }
    const result = await this.orderService.createOrder(pedido);
    if(result) {
      this.close();
      this.openSnackBar("Pedido realizado!");
    } else {
      this.openSnackBar("Erro interno no servidor. Favor tentar novamente mais tarde.");
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Fechar", {
      duration: 3000
    });
  }
}
