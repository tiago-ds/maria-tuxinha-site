import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { Photo } from 'src/app/models/Photo';
import { GalleryService } from 'src/app/services/gallery.service';
import { getThumbnailPictureUrl } from '../../../utils/aderecoUtils';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: Array<Card> = [];
  allItemsLoaded = false;

  constructor(private galleryService: GalleryService) {}

  async ngOnInit() {
    this.list = (await this.galleryService.getAllPhotos()).map((item) => {
      return {
        title: item.title,
        category: item.subtitle,
        imageSrc: getThumbnailPictureUrl(item.pictureId, 800),
      } as Card;
    });
    this.allItemsLoaded = true;
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
