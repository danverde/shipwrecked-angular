import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type buttonType = 'banner' | 'primary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: buttonType = 'primary';
  @Input() route: string = '';
  @Input() disabled = false;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(e: Event) {
    e.preventDefault();
    this.clickEvent.emit();
  }

}
