import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'txa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  menuOpened = false;

  ngOnInit(): void {}

  get isAdmin() {
    return window.location.pathname.startsWith('/admin');
  }

  isInPage(page: string) {
    return window.location.pathname.startsWith(page);
  }
}
