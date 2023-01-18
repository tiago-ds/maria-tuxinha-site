import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from 'src/app/models/Photo';
import { GalleryService } from 'src/app/services/gallery.service';
import { parseDriveLink } from 'src/app/utils/aderecoUtils';

@Component({
  selector: 'txa-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDialogComponent implements OnInit {
  currentLink = '';
  imageLoaded = false;
  types = ['gallery', 'carousel', 'hidden'];

  photoForm: FormGroup = new FormGroup({});

  constructor(
    private galleryService: GalleryService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.photoForm.get('pictureUrl')?.valueChanges.subscribe((value) => {
      this.imageLoaded = false;
      this.currentLink = parseDriveLink(value);
    });

    this.photoForm.valueChanges.subscribe((value) => {
      console.log(this.photoForm);
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
    const photo: Photo = this.photoForm.value;
    photo.pictureUrl = parseDriveLink(photo.pictureUrl);
    this.galleryService.addPhoto(photo);
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError(event: ErrorEvent) {
    this.imageLoaded = false;
  }
}
