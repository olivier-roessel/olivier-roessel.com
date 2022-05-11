import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './memoire-sources.component.html',
  styleUrls: ['./memoire-sources.component.scss']
})
export class MemoireSourcesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Olivier Roessel - Bibliographie du mémoire");
  }

  ngOnInit(): void {
  }

}
