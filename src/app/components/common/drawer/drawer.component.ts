import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerService } from 'src/app/services/drawer-service.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() title = '';

  constructor(private drawerService: DrawerService) { }

  isOpen = false;
  drawerSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.drawerSubscription = this.drawerService.isOpen.subscribe((x: boolean) => this.isOpen = x)
  }

  ngOnDestroy(): void {
    this.drawerSubscription?.unsubscribe();
  }

  closeDrawer() {
    this.drawerService.toggle();
    console.log('drawer toggle open');
  }

}
