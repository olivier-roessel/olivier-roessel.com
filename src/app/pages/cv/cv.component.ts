import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Voir le CV de Olivier Roessel");
  }

  ngOnInit(): void {
  }

}
