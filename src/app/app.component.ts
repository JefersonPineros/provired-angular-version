import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'provired-angular-version';

  theme = 'blue';

  layout = 'layout-blue';

  layoutMode = 'horizontal';

  wrapperMode = false;

  inputStyle = 'outlined';

  ripple: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.ripple = true;
  }
}
