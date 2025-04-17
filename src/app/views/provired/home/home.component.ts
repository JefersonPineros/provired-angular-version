import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { LogOutService } from 'src/app/services/logOut/log-out.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { MenuService } from 'src/app/services/utils/app.menu.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  configDialogActive: any;

  topbarItemClick: boolean | undefined;

  activeTopbarItem: any;

  menuHoverActive: boolean | undefined;

  topbarMenuActive: boolean | undefined;

  overlayMenuActive: boolean | undefined;

  menuClick: boolean | undefined;

  configClick: boolean | undefined;

  overlayMenuMobileActive: boolean | undefined;

  typeUser: string;

  constructor(
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent,
    private userService: UserServiceService,
    private session: SessionStorageService,
    private logOutSession: LogOutService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let ses = this.session.getSession();
    this.typeUser = ses.tipousuario;

    this.userService.getUser().subscribe({
      next: (res) => {
        this.session.createStorage('user', JSON.stringify(res));
      },
    });
  }

  logOutEvent(): void {
    this.logOutSession.logOutSession().subscribe({
      next: (resp) => {
        this.route.navigate(['provired/']);
      },
    });
  }

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

  onTopbarSubItemClick(event: any, type?: any) {
    if (type) {
      switch (type) {
        case 'profile':
          this.route.navigate(['provired/home-provired/home/usuarios/profile']);
          break;

        default:
          break;
      }
    }

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
