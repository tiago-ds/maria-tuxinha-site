import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Maria Tuxinha';

  get isAdmin() {
    return window.location.pathname.startsWith('/admin');
  }
}
