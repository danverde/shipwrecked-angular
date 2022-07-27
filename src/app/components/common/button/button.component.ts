import { Component, Input, OnInit } from '@angular/core';

export type buttonType = 'banner' | 'primary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: buttonType = 'primary';
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
