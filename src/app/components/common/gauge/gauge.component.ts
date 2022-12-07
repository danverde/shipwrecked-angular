import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export type GaugeType = 'info' | 'default';

type progressType = 'default' | 'warning' | 'critical';

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

  private warningPercent: number = 40;
  private criticalPercent: number = 20;

  progressType: progressType = 'default';

  gaugePercentString: string = '0%';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setWidth();
  }

  private setWidth(): void {
    const gaugePercent = this.value / this.max * 100;
    this.gaugePercentString = `${gaugePercent}%`;

    if (this.type === 'default') {
      this.setProgressType(gaugePercent);
    }
  }

  private setProgressType(gaugePercent: number): void {
    if (gaugePercent > this.warningPercent) {
      this.progressType = 'default';
    } else if (gaugePercent <= this.warningPercent && gaugePercent > this.criticalPercent) {
      this.progressType = 'warning'
    } else if (gaugePercent <= this.criticalPercent) {
      this.progressType = 'critical';
    }
  }

}
