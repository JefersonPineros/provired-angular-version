import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { MenuService } from 'src/app/services/utils/app.menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  configDialogActive = false;

  topbarItemClick: boolean = false;

  activeTopbarItem: any;

  menuHoverActive: boolean = false;

  topbarMenuActive: boolean = false;

  overlayMenuActive: boolean = false;

  menuClick: boolean = false;

  configClick: boolean = false;

  overlayMenuMobileActive: boolean = false;

  constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public app: AppComponent) { }

  onRippleChange(event: any) {
    this.app.ripple = event.checked;
    this.primengConfig = event.checked;
  }

  onLayoutClick() {
    if (!this.topbarItemClick) {
      this.activeTopbarItem = null;
      this.topbarMenuActive = false;
    }

    if (!this.configClick) {
      this.configDialogActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal()) {
        this.menuService.reset();
      }

      if (this.overlayMenuActive || this.overlayMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.menuHoverActive = false;
    }

    this.topbarItemClick = false;
    this.menuClick = false;
    this.configClick = false;
  }

  onTopbarItemClick(event: any, item: any) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }

  onTopbarSubItemClick(event: any) {
    event.preventDefault();
  }

  onMenuButtonClick(event: any) {
    this.menuClick = true;
    this.topbarMenuActive = false;

    if (this.app.layoutMode === 'overlay' && !this.isMobile()) {
      this.overlayMenuActive = !this.overlayMenuActive;
    } else {
      if (!this.isDesktop()) {
        this.overlayMenuMobileActive = !this.overlayMenuMobileActive;
      }
    }

    event.preventDefault();
  }

  onMenuClick() {
    this.menuClick = true;
  }

  onConfigClick() {
    this.configClick = true;
  }

  hideOverlayMenu() {
    this.overlayMenuActive = false;
    this.overlayMenuMobileActive = false;
  }

  isDesktop() {
    return window.innerWidth > 990;
  }

  isMobile() {
    return window.innerWidth <= 990;
  }

  isOverlay() {
    return this.app.layoutMode === 'overlay';
  }

  isHorizontal() {
    return this.app.layoutMode === 'horizontal';
  }

}
