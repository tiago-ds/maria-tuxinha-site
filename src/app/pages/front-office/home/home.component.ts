import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  list = [...Array(10).keys()].map((i) => ({
    title: 'Boneca',
    category: 'Bonecas',
    imageSrc: 'https://i.imgur.com/uJx7jmd.jpg',
  }));

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
