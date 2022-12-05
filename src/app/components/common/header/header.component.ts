import { Component, Input, OnInit } from '@angular/core';

export type headerLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() level: headerLevel = 'h1';

  constructor() { }

  ngOnInit(): void {
  }

}
