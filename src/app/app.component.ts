import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'maria-tuxinha-frontend';

  list = [...Array(10).keys()].map((i) => ({
    title: 'Boneca',
    category: 'Bonecas',
    imageSrc: 'https://i.imgur.com/uJx7jmd.jpg',
  }));
}
