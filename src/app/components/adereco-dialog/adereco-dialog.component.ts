import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AderecoDialogData, OpenReasons } from 'src/app/models/Dialog';
import { Adereco } from 'src/app/models/Pedido';
import { AderecoService } from 'src/app/services/adereco.service';
import { parseDriveLink } from '../../utils/aderecoUtils';

@Component({
  selector: 'app-adereco-dialog',
  templateUrl: './adereco-dialog.component.html',
  styleUrls: ['./adereco-dialog.component.scss'],
})
export class AddAderecoComponent implements OnInit {
  // Form controllers
  TYPE: string;
  NAME: string;
  LINK: string;
  openReason: OpenReasons;
  currentLink = '';
  imageLoaded = false;

  aderecoForm: FormGroup = new FormGroup({});

  constructor(
    private aderecoService: AderecoService,
    @Inject(MAT_DIALOG_DATA) public dialogData: AderecoDialogData,
    public dialogRef: MatDialogRef<AddAderecoComponent>
  ) {
    this.openReason = dialogData.openReason;
    this.TYPE = 'type';
    this.NAME = 'name';
    this.LINK = 'pictureUrl';
  }

  ngOnInit(): void {
    this.initForm();
    this.aderecoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
      this.currentLink = parseDriveLink(value);
      this.imageLoaded = false;
    });
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

    if (this.openReason === 'edit') {
      this.aderecoForm.controls[this.NAME].setValue(
        this.dialogData?.adereco?.name
      );
      this.aderecoForm.controls[this.NAME].updateValueAndValidity();
      this.currentLink = this.dialogData?.adereco?.pictureUrl ?? '';
    }
    this.aderecoForm.controls[this.TYPE].setValue(
      this.dialogData?.adereco?.type
    );
    this.aderecoForm.controls[this.TYPE].updateValueAndValidity();
  }

  send() {
    if (this.openReason === 'edit') {
      const newAdereco: Adereco = this.dialogData.adereco as Adereco;
      newAdereco.name = this.aderecoForm.value.name;
      newAdereco.lastModified = new Date();
      newAdereco.pictureUrl = this.currentLink;
      this.aderecoService
        .editAdereco(newAdereco)
        .then(() => {
          this.dialogRef.close({ success: true, adereco: newAdereco });
        })
        .catch(() => {
          this.dialogRef.close({ success: false });
        });
    } else {
      const newAdereco: Adereco = this.aderecoForm.value as Adereco;
      newAdereco.isAvailable = true;
      newAdereco.lastModified = new Date();
      newAdereco.pictureUrl = parseDriveLink(newAdereco.pictureUrl);
      this.aderecoService
        .createAdereco(newAdereco)
        .then(() => {
          this.dialogRef.close({ success: true, adereco: newAdereco });
        })
        .catch(() => {
          this.dialogRef.close({ success: false });
        });
    }
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError(event: ErrorEvent) {
    this.imageLoaded = false;
  }
}
