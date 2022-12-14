import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer/drawer.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(
    private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  handleHelpButtonClick() {
    this.drawerService.toggle();
  }

}
