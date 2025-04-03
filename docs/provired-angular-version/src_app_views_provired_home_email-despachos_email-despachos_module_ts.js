"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_email-despachos_email-despachos_module_ts"],{

/***/ 2967:
/*!****************************************************************!*\
  !*** ./src/app/services/home/email/email-despachos.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailDespachosService": () => (/* binding */ EmailDespachosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class EmailDespachosService {
  constructor(http) {
    this.http = http;
  }
  getEmailDespacho(filter) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}emailDespachos`, filter);
  }
}
EmailDespachosService.ɵfac = function EmailDespachosService_Factory(t) {
  return new (t || EmailDespachosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
EmailDespachosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EmailDespachosService,
  factory: EmailDespachosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7639:
/*!***************************************************************************************!*\
  !*** ./src/app/views/provired/home/email-despachos/email-despachos-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailDespachosRoutingModule": () => (/* binding */ EmailDespachosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _email_despachos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-despachos.component */ 6364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _email_despachos_component__WEBPACK_IMPORTED_MODULE_0__.EmailDespachosComponent
}];
class EmailDespachosRoutingModule {}
EmailDespachosRoutingModule.ɵfac = function EmailDespachosRoutingModule_Factory(t) {
  return new (t || EmailDespachosRoutingModule)();
};
EmailDespachosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EmailDespachosRoutingModule
});
EmailDespachosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailDespachosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6364:
/*!**********************************************************************************!*\
  !*** ./src/app/views/provired/home/email-despachos/email-despachos.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailDespachosComponent": () => (/* binding */ EmailDespachosComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/historialProcesosFilter */ 5172);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_home_email_email_despachos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home/email/email-despachos.service */ 2967);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/filters-dinamics/filters-dinamics.component */ 8586);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);














function EmailDespachosComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
const _c0 = "/provired/home-provired/home/documentos/autorizaciones";
const _c1 = function () {
  return {
    label: "Autorizaciones",
    icon: "pi pi-fw pi-clone",
    routerLink: _c0
  };
};
const _c2 = function (a0) {
  return [a0];
};
function EmailDespachosComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "div", 1)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-side-menu", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c1)));
  }
}
function EmailDespachosComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 14)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Email despachos");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "app-filters-dinamics", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("eventFilter", function EmailDespachosComponent_ng_template_13_Template_app_filters_dinamics_eventFilter_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.filterEmail($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showRango", false)("showSuscriptores", false)("showRadicacion", false);
  }
}
function EmailDespachosComponent_div_14_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.elemento;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "mailto:", rowData_r8.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](rowData_r8.email);
  }
}
const _c3 = function () {
  return {
    field: "name_ciudad",
    header: "Municipio"
  };
};
const _c4 = function () {
  return {
    field: "name_corporacion",
    header: "Corporacion"
  };
};
const _c5 = function () {
  return {
    field: "despacho",
    header: "Despacho"
  };
};
const _c6 = function () {
  return {
    field: "telefono",
    header: "Telefono(s)"
  };
};
const _c7 = function (a0, a1, a2, a3) {
  return [a0, a1, a2, a3];
};
function EmailDespachosComponent_div_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-tabla-component", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function EmailDespachosComponent_div_14_ng_template_3_Template_app_tabla_component_onChangePage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.filterEmail(undefined, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EmailDespachosComponent_div_14_ng_template_3_ng_template_1_Template, 3, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r6.emailList)("cols", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](12, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](9, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](10, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](11, _c6)))("lazy", true)("paginador", true)("totalRecords", ctx_r6.totalItems)("rows", 30)("actionsShow", true)("actionsRightShow", true);
  }
}
function EmailDespachosComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "div", 1)(2, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, EmailDespachosComponent_div_14_ng_template_3_Template, 2, 17, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
class EmailDespachosComponent {
  constructor(breadCrumService, emailServices, sesion, spinner, message) {
    this.breadCrumService = breadCrumService;
    this.emailServices = emailServices;
    this.sesion = sesion;
    this.spinner = spinner;
    this.message = message;
    this.filter = new src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_0__.HistorialProcesosModel();
    this.emailList = new Array();
    this.totalItems = 0;
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Email despachos'
    }]);
  }
  filterEmail(filterData, pageChange) {
    this.spinner.show();
    let ses = this.sesion.getStorage('user', 'json');
    this.filter.group_users = ses.data.group_users;
    this.filter.parent = ses.data.parent;
    if (pageChange) {
      this.filter.from = pageChange.first;
      this.filter.rows = pageChange.rows;
    } else {
      this.filter.from = 0;
      this.filter.rows = 30;
    }
    this.emailServices.getEmailDespacho(this.filter).subscribe({
      next: res => {
        this.spinner.hide();
        this.totalItems = res.count_rows;
        this.emailList = res.data;
      },
      error: error => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__.MessageModel('error', `Se ha presentado un error!`, `${error.error.msg}`);
        this.message.add(message_model);
      }
    });
  }
}
EmailDespachosComponent.ɵfac = function EmailDespachosComponent_Factory(t) {
  return new (t || EmailDespachosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_home_email_email_despachos_service__WEBPACK_IMPORTED_MODULE_3__.EmailDespachosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_4__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService));
};
EmailDespachosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: EmailDespachosComponent,
  selectors: [["app-email-despachos"]],
  decls: 19,
  vars: 2,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["class", "grid mt-2", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color", "mt-3"], [1, "grid", "p-fluit"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "col-12", "flex", "align-items-center", "justify-content-center", "mt-2"], [3, "showRango", "showSuscriptores", "showRadicacion", "eventFilter"], [1, "grid", "mt-2"], ["paginationPosition", "both", "nameActionsRight", "Email(s)", 3, "data", "cols", "lazy", "paginador", "totalRecords", "rows", "actionsShow", "actionsRightShow", "onChangePage"], ["pTemplate", "actions-left"], [2, "max-width", "300px", "word-break", "break-all"], [3, "href"]],
  template: function EmailDespachosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "div", 0)(5, "div", 1)(6, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, EmailDespachosComponent_ng_template_7_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, EmailDespachosComponent_ng_template_8_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5)(10, "div", 0)(11, "div", 1)(12, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, EmailDespachosComponent_ng_template_13_Template, 7, 3, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, EmailDespachosComponent_div_14_Template, 4, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ngx-spinner", 7)(17, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.emailList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_5__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_6__.FiltersDinamicsComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_7__.TablaComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__.SideMenuComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2650:
/*!*******************************************************************************!*\
  !*** ./src/app/views/provired/home/email-despachos/email-despachos.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailDespachosModule": () => (/* binding */ EmailDespachosModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _email_despachos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-despachos-routing.module */ 7639);
/* harmony import */ var _email_despachos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-despachos.component */ 6364);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_services_home_email_email_despachos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home/email/email-despachos.service */ 2967);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);










class EmailDespachosModule {}
EmailDespachosModule.ɵfac = function EmailDespachosModule_Factory(t) {
  return new (t || EmailDespachosModule)();
};
EmailDespachosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: EmailDespachosModule
});
EmailDespachosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [src_app_services_home_email_email_despachos_service__WEBPACK_IMPORTED_MODULE_3__.EmailDespachosService, primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _email_despachos_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailDespachosRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.FiltersDinamicsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SideMenuModule, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmailDespachosModule, {
    declarations: [_email_despachos_component__WEBPACK_IMPORTED_MODULE_1__.EmailDespachosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _email_despachos_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailDespachosRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.FiltersDinamicsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SideMenuModule, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_email-despachos_email-despachos_module_ts.js.map