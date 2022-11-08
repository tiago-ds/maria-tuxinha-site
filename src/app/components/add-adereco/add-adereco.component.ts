import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adereco } from 'src/app/models/Pedido';
import { AderecoService } from 'src/app/services/adereco.service';
import { parseDriveLink } from '../../utils/aderecoUtils';

@Component({
  selector: 'app-add-adereco',
  templateUrl: './add-adereco.component.html',
  styleUrls: ['./add-adereco.component.scss'],
})
export class AddAderecoComponent implements OnInit {
  // Form controllers
  TYPE: string;
  NAME: string;
  LINK: string;

  aderecoForm: FormGroup = new FormGroup({});

  constructor(
    private aderecoService: AderecoService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.TYPE = 'type';
    this.NAME = 'name';
    this.LINK = 'pictureUrl';
  }

  ngOnInit(): void {
    this.initForm();
    this.aderecoForm.controls[this.TYPE].setValue(this.data);
    this.aderecoForm.controls[this.TYPE].updateValueAndValidity();
  }

  initForm() {
    this.aderecoForm = new FormGroup({
      [this.TYPE]: new FormControl(undefined),
      [this.NAME]: new FormControl(undefined, Validators.required),
      [this.LINK]: new FormControl(
        undefined,
        Validators.pattern('^(https://drive.google.com/)file/d/([^/]+)/.*$')
      ),
    });
  }

  send() {
    const newAdereco: Adereco = this.aderecoForm.value as Adereco;
    newAdereco.pictureUrl = parseDriveLink(newAdereco.pictureUrl);
    newAdereco.isAvailable = true;
    newAdereco.lastModified = new Date();
    this.aderecoService.createAdereco(newAdereco);
  }
}
