"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_documentos_documentos_module_ts"],{

/***/ 2823:
/*!*****************************************!*\
  !*** ./src/app/constans/files-const.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUrl": () => (/* binding */ FileUrl)
/* harmony export */ });
class FileUrl {}
FileUrl.FILES = {
  AUTORIZACIONES: 'assets/docs/Autorizaciones.doc',
  AUTORIZACIONES_EXPRESAS: 'assets/docs/Autorizaciones Expresas.doc'
};

/***/ }),

/***/ 974:
/*!**************************************************************!*\
  !*** ./src/app/services/home/documentos/terminos.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosCondicionesService": () => (/* binding */ TerminosCondicionesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class TerminosCondicionesService {
  constructor(http) {
    this.http = http;
  }
  getTerminos() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}user/getTerminos`);
  }
}
TerminosCondicionesService.ɵfac = function TerminosCondicionesService_Factory(t) {
  return new (t || TerminosCondicionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
TerminosCondicionesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TerminosCondicionesService,
  factory: TerminosCondicionesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4940:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/provired/home/documentos/autorizaciones/autorizaciones.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutorizacionesComponent": () => (/* binding */ AutorizacionesComponent)
/* harmony export */ });
/* harmony import */ var src_app_constans_files_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constans/files-const */ 2823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);







function AutorizacionesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function () {
  return {
    "label": "Nuevos procesos",
    "icon": "pi pi-fw pi-clone",
    "routerLink": "/provired/home-provired/home/procesos"
  };
};
const _c1 = function (a0) {
  return [a0];
};
function AutorizacionesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 1)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-side-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0)));
  }
}
function AutorizacionesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Autorizaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AutorizacionesComponent_ng_template_10_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Autorizaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AutorizacionesComponent_ng_template_10_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 16)(4, "div", 17)(5, "app-button-component", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("eventEmiter", function AutorizacionesComponent_ng_template_10_ng_template_8_Template_app_button_component_eventEmiter_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.download(ctx_r8.links.FILES.AUTORIZACIONES, "Autorizaciones.doc"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AutorizacionesComponent_ng_template_10_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Autorizaciones Expresas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AutorizacionesComponent_ng_template_10_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 16)(4, "div", 17)(5, "app-button-component", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("eventEmiter", function AutorizacionesComponent_ng_template_10_ng_template_12_Template_app_button_component_eventEmiter_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.download(ctx_r10.links.FILES.AUTORIZACIONES_EXPRESAS, "Autorizaciones Expresas.doc"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AutorizacionesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " En cada \u00EDcono encontrar\u00E1 los formatos de autorizaci\u00F3n general y autorizaci\u00F3n expresa, requerido por el despacho para acceder al expediente. Por favor imprimirlo y enviarlo a la direcci\u00F3n que se indique. Debe ser remitido con presentaci\u00F3n personal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12)(5, "div", 13)(6, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AutorizacionesComponent_ng_template_10_ng_template_7_Template, 4, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AutorizacionesComponent_ng_template_10_ng_template_8_Template, 6, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 13)(10, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AutorizacionesComponent_ng_template_10_ng_template_11_Template, 4, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AutorizacionesComponent_ng_template_10_ng_template_12_Template, 6, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
class AutorizacionesComponent {
  constructor(breadCrumService) {
    this.breadCrumService = breadCrumService;
    this.links = src_app_constans_files_const__WEBPACK_IMPORTED_MODULE_0__.FileUrl;
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Documentos'
    }, {
      label: 'Autorizaciones'
    }]);
  }
  download(url, file) {
    fetch(url).then(response => response.blob()).then(blod => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blod);
      link.download = file;
      link.click();
    }).catch(console.error);
  }
}
AutorizacionesComponent.ɵfac = function AutorizacionesComponent_Factory(t) {
  return new (t || AutorizacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbService));
};
AutorizacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AutorizacionesComponent,
  selectors: [["app-autorizaciones"]],
  decls: 11,
  vars: 0,
  consts: [[1, "grid", "p-fluit"], [1, "col-12"], [1, "grid"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-4"], [1, "title-color"], [1, "grid", "p-fluid"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "grid", "mt-4"], [1, "col-6", "p-4"], [1, "element-dowload"], [1, "pi", "pi-file"], [1, "col-12", "mt-5"], [1, "p-5"], ["clase", "p-button-rounded", "nameButton", "Descargar", 3, "eventEmiter"]],
  template: function AutorizacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AutorizacionesComponent_ng_template_5_Template, 4, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AutorizacionesComponent_ng_template_6_Template, 4, 4, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AutorizacionesComponent_ng_template_9_Template, 4, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AutorizacionesComponent_ng_template_10_Template, 13, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_2__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__.SideMenuComponent, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponentComponent],
  styles: [".element-dowload[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.element-dowload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4baaf5;\n  font-size: 130px;\n}\n\n.title-color[_ngcontent-%COMP%] {\n  color: #4483b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9kb2N1bWVudG9zL2F1dG9yaXphY2lvbmVzL2F1dG9yaXphY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUdBO0VBQ0UsY0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLmVsZW1lbnQtZG93bG9hZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpIHtcclxuICAgIGNvbG9yOiAjNGJhYWY1O1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtY29sb3Ige1xyXG4gIGNvbG9yOiAjNDQ4M2IzO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1548:
/*!*****************************************************************************!*\
  !*** ./src/app/views/provired/home/documentos/documentos-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentosRoutingModule": () => (/* binding */ DocumentosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _autorizaciones_autorizaciones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autorizaciones/autorizaciones.component */ 4940);
/* harmony import */ var _tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutoriales/tutoriales.component */ 8865);
/* harmony import */ var _terminos_terminos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminos/terminos.component */ 1754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: 'autorizaciones',
  component: _autorizaciones_autorizaciones_component__WEBPACK_IMPORTED_MODULE_0__.AutorizacionesComponent
}, {
  path: 'tutoriales',
  component: _tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_1__.TutorialesComponent
}, {
  path: 'terminos_condiciones',
  component: _terminos_terminos_component__WEBPACK_IMPORTED_MODULE_2__.TerminosComponent
}];
class DocumentosRoutingModule {}
DocumentosRoutingModule.ɵfac = function DocumentosRoutingModule_Factory(t) {
  return new (t || DocumentosRoutingModule)();
};
DocumentosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DocumentosRoutingModule
});
DocumentosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DocumentosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5942:
/*!************************************************************************!*\
  !*** ./src/app/views/provired/home/documentos/documentos.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentosComponent": () => (/* binding */ DocumentosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DocumentosComponent {}
DocumentosComponent.ɵfac = function DocumentosComponent_Factory(t) {
  return new (t || DocumentosComponent)();
};
DocumentosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DocumentosComponent,
  selectors: [["app-documentos"]],
  decls: 2,
  vars: 0,
  template: function DocumentosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "documentos works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4919:
/*!*********************************************************************!*\
  !*** ./src/app/views/provired/home/documentos/documentos.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentosModule": () => (/* binding */ DocumentosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _documentos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentos-routing.module */ 1548);
/* harmony import */ var _documentos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentos.component */ 5942);
/* harmony import */ var _autorizaciones_autorizaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autorizaciones/autorizaciones.component */ 4940);
/* harmony import */ var _tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutoriales/tutoriales.component */ 8865);
/* harmony import */ var _terminos_terminos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminos/terminos.component */ 1754);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_services_home_documentos_terminos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/home/documentos/terminos.service */ 974);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class DocumentosModule {}
DocumentosModule.ɵfac = function DocumentosModule_Factory(t) {
  return new (t || DocumentosModule)();
};
DocumentosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: DocumentosModule
});
DocumentosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [src_app_services_home_documentos_terminos_service__WEBPACK_IMPORTED_MODULE_6__.TerminosCondicionesService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _documentos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentosRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ButtonComponentModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.TextAreaModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DocumentosModule, {
    declarations: [_documentos_component__WEBPACK_IMPORTED_MODULE_1__.DocumentosComponent, _autorizaciones_autorizaciones_component__WEBPACK_IMPORTED_MODULE_2__.AutorizacionesComponent, _tutoriales_tutoriales_component__WEBPACK_IMPORTED_MODULE_3__.TutorialesComponent, _terminos_terminos_component__WEBPACK_IMPORTED_MODULE_4__.TerminosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _documentos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentosRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ButtonComponentModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.TextAreaModule]
  });
})();

/***/ }),

/***/ 1754:
/*!*******************************************************************************!*\
  !*** ./src/app/views/provired/home/documentos/terminos/terminos.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosComponent": () => (/* binding */ TerminosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_home_documentos_terminos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/home/documentos/terminos.service */ 974);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/text-area/text-area.component */ 7408);






function TerminosComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Terminos y condiciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "app-text-area", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("modelChange", function TerminosComponent_ng_template_1_Template_app_text_area_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.terminos = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 300)("disabled", true)("model", ctx_r0.terminos);
  }
}
class TerminosComponent {
  constructor(breadCrumService, terminosService) {
    this.breadCrumService = breadCrumService;
    this.terminosService = terminosService;
    this.terminos = '';
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Documentos'
    }, {
      label: 'Terminos y condiciones'
    }]);
    this.terminosService.getTerminos().subscribe({
      next: res => {
        this.terminos = res.msg;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
TerminosComponent.ɵfac = function TerminosComponent_Factory(t) {
  return new (t || TerminosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_home_documentos_terminos_service__WEBPACK_IMPORTED_MODULE_1__.TerminosCondicionesService));
};
TerminosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TerminosComponent,
  selectors: [["app-terminos"]],
  decls: 2,
  vars: 0,
  consts: [["pTemplate", "content"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "mt-3"], [1, "grid"], [1, "col-12"], ["tamanio", "500", "heightTamanio", "1000", 3, "rows", "disabled", "model", "modelChange"]],
  template: function TerminosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TerminosComponent_ng_template_1_Template, 7, 3, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_2__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__.TextAreaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8865:
/*!***********************************************************************************!*\
  !*** ./src/app/views/provired/home/documentos/tutoriales/tutoriales.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialesComponent": () => (/* binding */ TutorialesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);


class TutorialesComponent {
  constructor(breadCrumService) {
    this.breadCrumService = breadCrumService;
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Documentos'
    }, {
      label: 'Tutoriales'
    }]);
  }
}
TutorialesComponent.ɵfac = function TutorialesComponent_Factory(t) {
  return new (t || TutorialesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbService));
};
TutorialesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TutorialesComponent,
  selectors: [["app-tutoriales"]],
  decls: 2,
  vars: 0,
  template: function TutorialesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "tutoriales works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_documentos_documentos_module_ts.js.map