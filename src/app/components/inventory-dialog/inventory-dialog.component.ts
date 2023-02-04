import { GalleryService } from '../../services/gallery.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryDialogData, OpenReasons } from 'src/app/models/Dialog';
import { Adereco } from 'src/app/models/Pedido';
import { Photo } from 'src/app/models/Photo';
import { AderecoService } from 'src/app/services/adereco.service';
import { parseDriveLink } from '../../utils/aderecoUtils';

@Component({
  selector: 'inventory-dialog',
  templateUrl: './inventory-dialog.component.html',
  styleUrls: ['./inventory-dialog.component.scss'],
})
export class InventoryDialogComponent implements OnInit {
  // Form controllers
  TYPE: string;
  NAME: string;
  LINK: string;
  openReason: OpenReasons;
  currentLink = '';
  imageLoaded = false;
  photoTypes = ['gallery', 'carousel', 'hidden'];

  aderecoForm: FormGroup = new FormGroup({});
  photoForm: FormGroup = new FormGroup({});

  constructor(
    private aderecoService: AderecoService,
    private galleryService: GalleryService,
    @Inject(MAT_DIALOG_DATA) public dialogData: InventoryDialogData,
    public dialogRef: MatDialogRef<InventoryDialogComponent>
  ) {
    this.openReason = dialogData.openReason;
    this.TYPE = 'type';
    this.NAME = 'name';
    this.LINK = 'pictureUrl';
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (this.dialogData.type === 'adereco') {
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

      this.aderecoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
        this.currentLink = parseDriveLink(value);
        this.imageLoaded = false;
      });
    } else if (this.dialogData.type === 'photo') {
      this.photoForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        subtitle: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        pictureUrl: new FormControl(undefined, [
          Validators.required,
          Validators.pattern('^(https://drive.google.com/)file/d/([^/]+)/.*$'),
        ]),
      });

      this.photoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
        this.imageLoaded = false;
        this.currentLink = parseDriveLink(value);
      });

      this.photoForm.valueChanges.subscribe((value) => {
        console.log(this.photoForm);
      });
    }
  }

  submitAdereco() {
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

  submitPhoto() {
    const photo: Photo = this.photoForm.value;
    photo.pictureUrl = parseDriveLink(photo.pictureUrl);
    this.galleryService.addPhoto(photo);
  }

  submit() {
    if (this.dialogData.type === 'adereco') this.submitAdereco();
    else this.submitPhoto();
  }

  delete() {
    console.log('delete item');
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError(event: ErrorEvent) {
    this.imageLoaded = false;
  }
}
