import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('rowSocial') el1!: ElementRef;
  pos1 = { top: 0, left: 0, x: 0, y: 0 };
  active1 = false;
  @ViewChild('rowLiveroom') el2!: ElementRef;
  pos2 = { top: 0, left: 0, x: 0, y: 0 };
  active2 = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Olivier Roessel");
  }

  ngAfterViewInit(): void {
    this.detectNoScroll([this.el1, this.el2]);
    window.addEventListener('resize', () => {
      this.detectNoScroll([this.el1, this.el2]);
    });
    this.addScrollListeners([this.el1, this.el2]);
    this.el1.nativeElement.querySelector(".slider-arrow").addEventListener('click', () => {
      this.el1.nativeElement.scroll({ left: this.pos1.left + 270, top: 0, behavior: 'smooth' });
    });
    this.el2.nativeElement.querySelector(".slider-arrow").addEventListener('click', () => {
      this.el2.nativeElement.scroll({ left: this.pos2.left + 270, top: 0, behavior: 'smooth' });
    });
    this.el1.nativeElement.addEventListener('mousedown', (e: any) => {
      this.pos1 = {
        left: this.el1.nativeElement.scrollLeft,
        top: this.el1.nativeElement.scrollTop,
        x: e.clientX,
        y: e.clientY
      };
      this.active1 = true;
    });
    this.el2.nativeElement.addEventListener('mousedown', (e: any) => {
      this.pos2 = {
        left: this.el2.nativeElement.scrollLeft,
        top: this.el2.nativeElement.scrollTop,
        x: e.clientX,
        y: e.clientY
      };
      this.active2 = true;
    });
    document.addEventListener('mouseup', () => {
      this.active1 = false;
      this.active2 = false;
    });
    document.addEventListener('mousemove', (e: any) => {
      if (this.active1) {
        const dx = e.clientX - this.pos1.x;
        const dy = e.clientY - this.pos1.y;
        this.el1.nativeElement.scrollTop = this.pos1.top - dy;
        this.el1.nativeElement.scrollLeft = this.pos1.left - dx;
      } else if (this.active2) {
        const dx = e.clientX - this.pos2.x;
        const dy = e.clientY - this.pos2.y;
        this.el2.nativeElement.scrollTop = this.pos2.top - dy;
        this.el2.nativeElement.scrollLeft = this.pos2.left - dx;
      }
    });
  }

  detectNoScroll(elements: ElementRef[]) {
    elements.forEach(el => {
      if (el.nativeElement.clientWidth == el.nativeElement.scrollWidth) {
        el.nativeElement.classList.add("no-scroll");
      } else {
        el.nativeElement.classList.remove("no-scroll");
      }
    });
  }

  addScrollListeners(elements: ElementRef[]) {
    elements.forEach(el => {
      el.nativeElement.addEventListener('scroll', () => {
        if (el.nativeElement.scrollLeft >= el.nativeElement.scrollWidth - el.nativeElement.clientWidth - 10) {
          el.nativeElement.classList.add("arrow-end");
        } else {
          el.nativeElement.classList.remove("arrow-end");
        }
      });
    });
  }
}