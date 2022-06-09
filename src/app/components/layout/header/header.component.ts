import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerFullBrowserWidth: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.headerFullBrowserWidth = window.innerWidth > 767;
  }
}
