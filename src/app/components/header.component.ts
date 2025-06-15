// src\app\components\header.component.ts

import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import {
  ColorMode,
  getSystemColorMode,
  getStoredColorMode,
  setStoredColorMode,
  applyColorMode,
} from '~/src/app/utils/color-mode';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Menubar, ButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  colorMode: ColorMode = 'light';

  ngOnInit() {
    this.colorMode = getStoredColorMode() ?? getSystemColorMode() ?? 'light';
    applyColorMode(this.colorMode);

    this.items = [
      // Put here the menu items. Check docs for more info.
    ];
  }

  toggleColorMode() {
    this.colorMode = this.colorMode === 'light' ? 'dark' : 'light';
    setStoredColorMode(this.colorMode);
    applyColorMode(this.colorMode);
  }

  onButtonKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleColorMode();
    }
  }
}
