"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_page-red_page-red_module_ts"],{

/***/ 6095:
/*!********************************************************************!*\
  !*** ./src/app/services/home/vencimientos/vencimientos.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VencimientosService": () => (/* binding */ VencimientosService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_models_login_responseLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/login/responseLogin */ 2276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _utils_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/session-storage.service */ 9721);






class VencimientosService {
  constructor(http, session) {
    this.http = http;
    this.session = session;
    this.sessionLog = new src_app_models_login_responseLogin__WEBPACK_IMPORTED_MODULE_1__.ResponseLogin();
  }
  getVencimientos() {
    this.sessionLog = this.session.getSession();
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/getVencimientos/' + `${this.sessionLog.user}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      let status = res['status'];
      if (status == 200) {
        return res.data;
      } else {
        throw new Error('Se ha presentado un error');
      }
    }));
  }
}
VencimientosService.ɵfac = function VencimientosService_Factory(t) {
  return new (t || VencimientosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_2__.SessionStorageService));
};
VencimientosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: VencimientosService,
  factory: VencimientosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5938:
/*!*************************************************************************!*\
  !*** ./src/app/views/provired/home/page-red/page-red-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRedRoutingModule": () => (/* binding */ PageRedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _page_red_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-red.component */ 5236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  redirectTo: 'start',
  pathMatch: 'full'
}, {
  path: 'start',
  component: _page_red_component__WEBPACK_IMPORTED_MODULE_0__.PageRedComponent
}];
class PageRedRoutingModule {}
PageRedRoutingModule.ɵfac = function PageRedRoutingModule_Factory(t) {
  return new (t || PageRedRoutingModule)();
};
PageRedRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PageRedRoutingModule
});
PageRedRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageRedRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5236:
/*!********************************************************************!*\
  !*** ./src/app/views/provired/home/page-red/page-red.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRedComponent": () => (/* binding */ PageRedComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_models_login_responseLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/login/responseLogin */ 2276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var src_app_services_home_vencimientos_vencimientos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home/vencimientos/vencimientos.service */ 6095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 9129);














function PageRedComponent_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "div", 10)(3, "div", 11)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Audiencias y/o Vencimientos Pr\u00F3ximos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}
const _c0 = function () {
  return {
    field: "nameCiudad",
    header: "Cidad"
  };
};
const _c1 = function () {
  return {
    field: "nameDespacho",
    header: "Despacho"
  };
};
const _c2 = function () {
  return {
    field: "fecha_vence_terminos",
    header: "Fecha",
    isFecha: true
  };
};
const _c3 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
function PageRedComponent_div_0_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-tabla-component", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 14)(3, "div", 11)(4, "app-button-component", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("eventEmiter", function PageRedComponent_div_0_div_1_ng_template_4_Template_app_button_component_eventEmiter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.actionSeeMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c2)))("data", ctx_r5.vencimientosList)("fixStyleTable", true)("stripedTable", true);
  }
}
function PageRedComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "div", 3)(2, "app-card-component", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PageRedComponent_div_0_div_1_ng_template_3_Template, 6, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, PageRedComponent_div_0_div_1_ng_template_4_Template, 5, 11, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function PageRedComponent_div_0_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "div", 10)(3, "div", 11)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Audiencias y/o Vencimientos Pr\u00F3ximos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}
function PageRedComponent_div_0_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " No tiene audiencias y/o vencimientos programados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18)(4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Ahora usted puede programar las fechas de audiencias y/o vencimientos de t\u00E9rminos en la plataforma de Provired, dando click en el boton ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " (PROGRAMAR) que aparece en el REPORTE DE NOTIFICACIONES y en el LISTADO DE PROCESOS ACTIVOS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function PageRedComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "div", 7)(2, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PageRedComponent_div_0_ng_template_2_ng_template_3_Template, 6, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, PageRedComponent_div_0_ng_template_2_ng_template_4_Template, 9, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function PageRedComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PageRedComponent_div_0_div_1_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PageRedComponent_div_0_ng_template_2_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.vencimientosList.length > 0)("ngIfElse", _r2);
  }
}
class PageRedComponent {
  constructor(breadCrumService, session, vencimientos, router, spinner) {
    this.breadCrumService = breadCrumService;
    this.session = session;
    this.vencimientos = vencimientos;
    this.router = router;
    this.spinner = spinner;
    this.sessionReq = new src_app_models_login_responseLogin__WEBPACK_IMPORTED_MODULE_0__.ResponseLogin();
    this.redirect = false;
    this.terminos = false;
    this.vencimientosList = [];
  }
  ngOnInit() {
    try {
      this.sessionReq = this.session.getSession();
      this.redirect = this.sessionReq.redirect;
      this.terminos = this.sessionReq.terminos_ok;
    } catch (error) {
      console.log(error);
    }
    this.breadCrumService.setItems([{
      label: 'Inicio'
    }]);
    this.spinner.show();
    this.vencimientos.getVencimientos().subscribe({
      next: res => {
        if (res.length > 0) {
          this.vencimientosList = res;
        }
        this.spinner.hide();
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  actionSeeMore() {
    this.router.navigate(['provired/home-provired/home/inicio/audiencia']);
  }
}
PageRedComponent.ɵfac = function PageRedComponent_Factory(t) {
  return new (t || PageRedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_2__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_home_vencimientos_vencimientos_service__WEBPACK_IMPORTED_MODULE_3__.VencimientosService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService));
};
PageRedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PageRedComponent,
  selectors: [["app-page-red"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService])],
  decls: 5,
  vars: 2,
  consts: [["class", "grid", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "grid"], ["class", "col-12", 4, "ngIf", "ngIfElse"], ["noContent", ""], [1, "col-12"], [1, "lg:col-8", "xl:col-8", "col-12", "sm:col-12", "lg:col-offset-2", "xl:col-offset-2"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "flex", "flex-column-reverse", "mt-4"], [1, "flex", "align-items-center", "justify-content-center"], [1, "p-2"], [3, "cols", "data", "fixStyleTable", "stripedTable"], [1, "mt-3", "flex", "flex-column-reverse"], ["nameButton", "Ver m\u00E1s", 3, "eventEmiter"], [1, "col-12", "mt-4"], [1, "col-12", "ml-4"], [1, "grid", "mt-5"], [1, "col-12", "p-4"], [1, "text-justify"], [1, "pi", "pi-calendar-plus"]],
  template: function PageRedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PageRedComponent_div_0_Template, 4, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ngx-spinner", 1)(3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionReq.tipousuario == "S");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_4__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_5__.TablaComponentComponent, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_6__.ButtonComponentComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent],
  styles: ["h4[_ngcontent-%COMP%] {\n  color: #eb2e2e;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9wYWdlLXJlZC9wYWdlLXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICBjb2xvcjogI2ViMmUyZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 594:
/*!*****************************************************************!*\
  !*** ./src/app/views/provired/home/page-red/page-red.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRedModule": () => (/* binding */ PageRedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _page_red_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-red-routing.module */ 5938);
/* harmony import */ var _page_red_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-red.component */ 5236);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_services_home_vencimientos_vencimientos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home/vencimientos/vencimientos.service */ 6095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class PageRedModule {}
PageRedModule.ɵfac = function PageRedModule_Factory(t) {
  return new (t || PageRedModule)();
};
PageRedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PageRedModule
});
PageRedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [src_app_services_home_vencimientos_vencimientos_service__WEBPACK_IMPORTED_MODULE_3__.VencimientosService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _page_red_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageRedRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PageRedModule, {
    declarations: [_page_red_component__WEBPACK_IMPORTED_MODULE_1__.PageRedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _page_red_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageRedRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_page-red_page-red_module_ts.js.map