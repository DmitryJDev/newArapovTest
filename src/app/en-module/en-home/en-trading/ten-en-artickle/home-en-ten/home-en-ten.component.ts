import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-en-ten',
  templateUrl: './home-en-ten.component.html',
  styleUrl: './home-en-ten.component.scss',
})
export class HomeEnTenComponent implements OnInit {
  constructor(private meta: Meta) {}
  ngOnInit(): void {
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.addTag({
      name: 'description',
      content: 'Exchange transaction. Concept, types and types',
    });
  }
}