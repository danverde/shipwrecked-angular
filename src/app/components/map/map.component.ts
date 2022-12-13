import { Component, OnInit } from '@angular/core';
import { initialMap } from 'src/app/data/map.data';
import { IMap } from 'src/app/models/map.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  map: IMap = initialMap;

  ngOnInit(): void {
  }

}
