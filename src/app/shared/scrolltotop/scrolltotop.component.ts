import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolltotop',
  templateUrl: './scrolltotop.component.html',
  styleUrls: ['./scrolltotop.component.scss'],
})
export class ScrolltotopComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
