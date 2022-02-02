import { Component } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from './app.icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(iconService: IconService) {
    iconService.registerAll(appIcons);
  }
}
