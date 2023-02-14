import { GalleryService } from '../../services/gallery.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryDialogData, OpenReasons } from 'src/app/models/Dialog';
import { Adereco } from 'src/app/models/Pedido';
import { Photo } from 'src/app/models/Photo';
import { AderecoService } from 'src/app/services/adereco.service';
import { getThumbnailPictureUrl, parseDriveId } from '../../utils/aderecoUtils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

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
  currentId = '';
  imageLoaded = false;
  photoTypes = ['gallery', 'carousel', 'hidden'];

  aderecoForm: FormGroup = new FormGroup({});
  photoForm: FormGroup = new FormGroup({});

  constructor(
    private aderecoService: AderecoService,
    private galleryService: GalleryService,
    @Inject(MAT_DIALOG_DATA) public dialogData: InventoryDialogData,
    public dialogRef: MatDialogRef<InventoryDialogComponent>,
    private http: HttpClient
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
        this.currentId = this.dialogData?.adereco?.pictureId ?? '';
      }
      this.aderecoForm.controls[this.TYPE].setValue(
        this.dialogData?.adereco?.type
      );
      this.aderecoForm.controls[this.TYPE].updateValueAndValidity();

      this.aderecoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
        this.currentId = parseDriveId(value);
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

      if (this.openReason === 'edit') {
        this.photoForm.controls['title'].setValue(this.dialogData.photo?.title);
        this.photoForm.controls['title'].updateValueAndValidity();

        this.photoForm.controls['subtitle'].setValue(
          this.dialogData.photo?.subtitle
        );
        this.photoForm.controls['subtitle'].updateValueAndValidity();

        this.photoForm.controls['type'].setValue(this.dialogData.photo?.type);
        this.photoForm.controls['type'].updateValueAndValidity();

        this.currentId = this.dialogData?.photo?.pictureId ?? '';
      }

      this.photoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
        this.imageLoaded = false;
        this.currentId = parseDriveId(value);
      });
    }
  }

  submitAdereco() {
    if (this.openReason === 'edit') {
      const newAdereco: Adereco = this.dialogData.adereco as Adereco;
      newAdereco.name = this.aderecoForm.value.name;
      newAdereco.lastModified = new Date();
      newAdereco.pictureId = this.currentId;
      this.aderecoService
        .editAdereco(newAdereco)
        .then(() => {
          this.dialogRef.close({ success: true, adereco: newAdereco });
        })
        .catch(() => {
          this.dialogRef.close({ success: false });
        });
    } else {
      const newAdereco = this.aderecoForm.value;
      newAdereco.isAvailable = true;
      newAdereco.lastModified = new Date();
      newAdereco.pictureId = parseDriveId(newAdereco.pictureUrl);
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
    const photo = this.photoForm.value;
    photo.pictureId = parseDriveId(photo.pictureUrl);
    this.galleryService
      .addPhoto(photo)
      .then(() => {
        this.dialogRef.close({ success: true, photo });
      })
      .catch(() => {
        this.dialogRef.close({ success: false });
      });
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

  get previewUrl(): string {
    if (this.currentId) {
      return getThumbnailPictureUrl(this.currentId, 400);
    }
    return '';
  }
}
