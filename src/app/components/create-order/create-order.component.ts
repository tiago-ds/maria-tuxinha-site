import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  cabeloOptions = ['1', '2', '3'];
  peleOptions = ['1', '2', '3'];
  vestidoOptions = ['vermelho', 'verde', 'listrado', 'rosa'];
  sapatoOptions = ['preto', 'azul'];
  imageTwo = 'https://lastfm.freetls.fastly.net/i/u/770x0/9d405d7b09697e4c352ecc950238aa6a.jpg';

  constructor(private _formBuilder: FormBuilder) {
    this.peleForm = this._formBuilder.group({
      ['skin']: ['', Validators.required],
    });
    this.cabeloForm = this._formBuilder.group({
      ['hair']: ['', Validators.required],
    });
    this.vestidoForm = this._formBuilder.group({
      ['dress']: ['', Validators.required],
    });
    this.sapatoForm = this._formBuilder.group({
      ['shoe']: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  print() {
    console.log(this.cabeloForm.value);
  }


}
