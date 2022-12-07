import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export type GaugeType = 'inverted' | 'info' | 'default';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit, OnChanges {

  @Input() label: string = '';
  @Input() max: number = 0;
  @Input() value: number = 0;
  @Input() type: GaugeType = 'default';

  width: string = '0%';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setWidth();
  }

  private setWidth(): void {
    this.width = `${this.value / this.max * 100}%`;
  }

}
