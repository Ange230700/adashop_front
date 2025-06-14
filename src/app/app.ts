// src\app\app.ts

import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '~/src/app/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected title = 'adashop_front';

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
