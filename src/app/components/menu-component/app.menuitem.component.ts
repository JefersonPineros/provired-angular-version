import { Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from './../../services/utils/app.menu.service';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  /* tslint:disable:component-selector */
  selector: '[app-menuitem]',
  /* tslint:enable:component-selector */
  template: `
          <ng-container>
              <a [attr.href]="item.url" (click)="itemClick($event)" *ngIf="(!item.routerLink || item.items) && item.visible !== false" pRipple [ngClass]="item.class"
                 (mouseenter)="onMouseEnter()" (keydown.enter)="itemClick($event)" [attr.target]="item.target" [attr.tabindex]="0">
				  <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                  <span class="layout-menuitem-text">{{item.label}}</span>
                  <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
              </a>
              <a (click)="itemClick($event)" (mouseenter)="onMouseEnter()" *ngIf="(item.routerLink && !item.items) && item.visible !== false" pRipple [ngClass]="item.class"
                 [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink" [routerLinkActiveOptions]="{exact: !item.preventExact}"
                 [attr.target]="item.target" [attr.tabindex]="0">
				  <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				  <span class="layout-menuitem-text">{{item.label}}</span>
                  <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
              </a>
              <ul *ngIf="(item.items && (active || animating || selectedKey)) && item.visible !== false"
                  (@children.done)="onAnimationDone()" [ngStyle]="{'padding': active && root ? '':'0'}"
                  [@children]="(app.isHorizontal() && root && !app.isMobile()) ? (active? 'visible' : 'hidden')
                  : (active ? 'visibleAnimated' : 'hiddenAnimated')">
                  <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                      <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
                  </ng-template>
              </ul>
          </ng-container>
      `,
  host: {
    '[class.active-menuitem]': '(selectedKey && app.isHorizontal()) || (active && !app.isHorizontal()) ' +
      '|| (active && !root && app.isHorizontal())',
    '[class.active-rootmenuitem]': 'active && root && app.isHorizontal()'
  },
  animations: [
    trigger('children', [
      state('void', style({
        height: '0px'
      })),
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      state('visible', style({
        height: '*',
        'z-index': 999
      })),
      state('hidden', style({
        height: '0px',
        'z-index': '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {

  @Input() item: any;

  @Input() index: number | undefined;

  @Input() root: boolean | undefined;

  @Input() parentKey: string | undefined;

  animating: boolean | undefined;

  active = false;

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  public key: string | undefined;

  selectedKey: boolean | undefined;

  constructor(public app: HomeComponent, public router: Router, private cd: ChangeDetectorRef, private menuService: MenuService) {

    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
      // deactivate current active menu
      if (this.active && this.key !== key && key.indexOf(this.key!) !== 0) {
        this.active = false;
      }
    });

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });



    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(params => {
        if (this.app.isHorizontal() && this.item.routerLink) {
          this.active = false;
          this.selectedKey = this.router.isActive(this.item.routerLink[0], !this.item.items && !this.item.preventExact);
        } else {
          if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
          } else {
            this.active = false;
          }
        }
      });
  }

  ngOnInit() {
    if (!this.app.isHorizontal() && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }

    if (this.app.isHorizontal() && this.item.routerLink) {
      this.active = false;
      this.selectedKey = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
    }

    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  updateActiveStateFromRoute() {
    this.active = this.router.isActive(this.item.routerLink[0], !this.item.items && !this.item.preventExact);
  }

  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    // navigate with hover in horizontal mode
    if (this.root) {
      this.app.menuHoverActive = !this.app.menuHoverActive;
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key!);

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {

      this.active = !this.active;
      this.animating = true;
    } else {
      // activate item
      this.active = true;

      // reset horizontal menu
      if (this.app.isHorizontal()) {
        this.menuService.reset();
      }

      this.app.overlayMenuActive = false;
      this.app.overlayMenuMobileActive = false;
      this.app.menuHoverActive = !this.app.menuHoverActive;
    }
  }

  onMouseEnter() {
    // activate item on hover
    if (this.root && this.app.menuHoverActive && this.app.isHorizontal() && this.app.isDesktop()) {
      this.menuService.onMenuStateChange(this.key!);
      this.active = true;
    }
  }

  onAnimationDone() {
    this.animating = false;
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
