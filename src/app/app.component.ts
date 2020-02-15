import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prototype-startup';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Driver Partners',
        link: '/app-drivers-page',
        index: 1
      },
      {
        label: 'Shipper Partners',
        link: '/app-shippers-page',
        index: 2
      }
    ];
  }

}
