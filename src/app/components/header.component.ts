// src\app\components\header.component.ts

import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Menubar, ButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  colorMode: 'light' | 'dark' = 'light';

  ngOnInit() {
    this.items = [
      // { label: 'Home', icon: 'pi pi-home' },
      // { label: 'Features', icon: 'pi pi-star' },
      // {
      //   label: 'Projects',
      //   icon: 'pi pi-search',
      //   items: [
      //     { label: 'Components', icon: 'pi pi-bolt' },
      //     { label: 'Blocks', icon: 'pi pi-server' },
      //     { label: 'UI Kit', icon: 'pi pi-pencil' },
      //     {
      //       label: 'Templates',
      //       icon: 'pi pi-palette',
      //       items: [
      //         { label: 'Apollo', icon: 'pi pi-palette' },
      //         { label: 'Ultima', icon: 'pi pi-palette' },
      //       ],
      //     },
      //   ],
      // },
      // { label: 'Contact', icon: 'pi pi-envelope' },
    ];
  }

  toggleColorTheme() {
    this.colorMode = this.colorMode === 'light' ? 'dark' : 'light';
  }
}
