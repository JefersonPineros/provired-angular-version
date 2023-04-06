import { Component } from '@angular/core';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(public app: HomeComponent) {}
}
