import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  closeHamburger: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeToggle(element: HTMLInputElement) {
    element.checked = false;
  }
}
