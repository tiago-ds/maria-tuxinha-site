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
}
