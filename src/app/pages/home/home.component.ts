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
  speed1 = 0;
  @ViewChild('rowLiveroom') el2!: ElementRef;
  pos2 = { top: 0, left: 0, x: 0, y: 0 };
  active2 = false;
  speed2 = 0;

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
      this.speed1 = 0;
      this.pos1 = {
        left: this.el1.nativeElement.scrollLeft,
        top: this.el1.nativeElement.scrollTop,
        x: e.clientX,
        y: e.clientY
      };
      this.active1 = true;
    });
    this.el2.nativeElement.addEventListener('mousedown', (e: any) => {
      this.speed2 = 0;
      this.pos2 = {
        left: this.el2.nativeElement.scrollLeft,
        top: this.el2.nativeElement.scrollTop,
        x: e.clientX,
        y: e.clientY
      };
      this.active2 = true;
    });
    document.addEventListener('mouseup', () => {
      if (this.active1) {
        this.active1 = false;
        this.el1.nativeElement.scroll({ left: this.el1.nativeElement.scrollLeft - (this.speed1 * 8), top: 0, behavior: 'smooth', easing: 'ease-out' });
      }
      if (this.active2) {
        this.active2 = false;
        this.el2.nativeElement.scroll({ left: this.el2.nativeElement.scrollLeft - (this.speed2 * 8), top: 0, behavior: 'smooth', easing: 'ease-out' });
      }
    });
    document.addEventListener('mousemove', (e: any) => {
      if (this.active1) {
        const dx = e.clientX - this.pos1.x;
        const dy = e.clientY - this.pos1.y;
        const oldPos = this.el1.nativeElement.scrollLeft;
        const newPos = this.pos1.left - dx;
        this.speed1 = oldPos - newPos;
        this.el1.nativeElement.scrollTop = this.pos1.top - dy;
        this.el1.nativeElement.scrollLeft = this.pos1.left - dx;
        setTimeout(() => {
          this.speed1 = 0;
        }, 100);
      } else if (this.active2) {
        const dx = e.clientX - this.pos2.x;
        const dy = e.clientY - this.pos2.y;
        const oldPos = this.el2.nativeElement.scrollLeft;
        const newPos = this.pos2.left - dx;
        this.speed2 = oldPos - newPos;
        this.el2.nativeElement.scrollTop = this.pos2.top - dy;
        this.el2.nativeElement.scrollLeft = this.pos2.left - dx;
        setTimeout(() => {
          this.speed2 = 0;
        }, 100);
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