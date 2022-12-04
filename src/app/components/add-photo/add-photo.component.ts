import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryService } from 'src/app/services/gallery.service';
import { parseDriveLink } from 'src/app/utils/aderecoUtils';

@Component({
  selector: 'txa-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPhotoComponent implements OnInit {
  // Form controllers

  currentLink = '';
  imageLoaded = false;
  showPreview = false;

  photoForm: FormGroup = new FormGroup({});

  constructor(
    private galleryService: GalleryService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    this.initForm();
    // this.photoForm.controls[this.TYPE].setValue(this.data);
    // this.photoForm.controls[this.TYPE].updateValueAndValidity();
    this.photoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
      console.log(value);
      this.currentLink = parseDriveLink(value);
      console.log(this.currentLink);
      this.imageLoaded = false;
    });
  }

  initForm() {
    this.photoForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      subtitle: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      pictureUrl: new FormControl(undefined, [
        Validators.required,
        Validators.pattern('^(https://drive.google.com/)file/d/([^/]+)/.*$'),
      ]),
    });
  }

  send() {
    const newAdereco: any = this.photoForm.value;
    newAdereco.pictureUrl = parseDriveLink(newAdereco.pictureUrl);
    newAdereco.isAvailable = true;
    newAdereco.lastModified = new Date();
  }

  onImageLoad() {
    console.log('image loaded');

    this.showPreview = true;
    this.imageLoaded = true;
  }

  onImageError(event: ErrorEvent) {
    console.log(event);

    this.showPreview = false;
    this.imageLoaded = false;
  }
}
