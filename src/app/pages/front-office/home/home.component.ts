import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import {getThumbnailPictureUrl} from "../../../utils/aderecoUtils";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: Array<any> = [];
  allItemsLoaded = false;

  constructor(private galleryService: GalleryService) {}

  async ngOnInit() {
    this.list = (await this.galleryService.getAllPhotos()).map(item => {
      const itemWithPicture: any = {...item}
      itemWithPicture.imageSrc = getThumbnailPictureUrl(item.pictureId, 400)

      return itemWithPicture
    });
    this.allItemsLoaded = true
  }

  carouselList = [
    {
      imageSrc: 'https://i.imgur.com/uJx7jmd.jpg',
      title: 'Monte sua boneca do seu jeito',
      description:
        'Você pode escolher o tom de pele, o cabelo, a roupa e o sapato.',
    },
    {
      imageSrc: 'https://i.imgur.com/Mefq4Pq.png',
      title: 'Monte sua boneca do seu jeito',
      description:
        'Você pode escolher o tom de pele, o cabelo, a roupa e o sapato.',
    },
    {
      imageSrc: 'https://i.imgur.com/GY9VMia.png',
      title: 'Monte sua boneca do seu jeito',
      description:
        'Você pode escolher o tom de pele, o cabelo, a roupa e o sapato.',
    },
    {
      imageSrc: 'https://i.imgur.com/1pIdkYX.png',
      title: 'Monte sua boneca do seu jeito',
      description:
        'Você pode escolher o tom de pele, o cabelo, a roupa e o sapato.',
    },
    {
      imageSrc: 'https://i.imgur.com/Io0zBky.png',
      title: 'Monte sua boneca do seu jeito',
      description:
        'Você pode escolher o tom de pele, o cabelo, a roupa e o sapato.',
    },
    {
      imageSrc: 'https://i.imgur.com/uiMkLWj.png',
      title: 'Monte sua boneca do seu jeito',
      description:
        'Você pode escolher o tom de pele, o cabelo, a roupa e o sapato.',
    },
  ];
}
