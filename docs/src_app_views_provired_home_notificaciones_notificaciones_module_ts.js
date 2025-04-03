"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_notificaciones_notificaciones_module_ts"],{

/***/ 3136:
/*!*******************************************************************!*\
  !*** ./src/app/models/home/notificaciones/ReporteNotificacion.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotificaciones": () => (/* binding */ ReporteNotificaciones)
/* harmony export */ });
class ReporteNotificaciones {
  constructor(auto, corporacion, idplanilla, despacho, radicacion, notificacion, proceso, demandante, demandado, descripcion, fechapublicacion, departamento, municipio, despacho_a, nota, ubicacion, name_ciudad, name_despacho, name_notificacion, nota_status, etiqueta_suscriptor, ruta_auto, expediente_digital) {
    this.auto = auto;
    this.corporacion = corporacion;
    this.idplanilla = idplanilla;
    this.despacho = despacho;
    this.radicacion = radicacion;
    this.notificacion = notificacion;
    this.proceso = proceso;
    this.demandante = demandante;
    this.demandado = demandado;
    this.descripcion = descripcion;
    this.fechapublicacion = fechapublicacion;
    this.departamento = departamento;
    this.municipio = municipio;
    this.despacho_a = despacho_a;
    this.nota = nota;
    this.ubicacion = ubicacion;
    this.name_ciudad = name_ciudad;
    this.name_despacho = name_despacho;
    this.name_notificacion = name_notificacion;
    this.nota_status = nota_status;
    this.etiqueta_suscriptor = etiqueta_suscriptor;
    this.ruta_auto = ruta_auto;
    this.expediente_digital = expediente_digital;
  }
}

/***/ }),

/***/ 1022:
/*!********************************************************************************!*\
  !*** ./src/app/services/home/notificaciones/reporte-notificaciones.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotificacionesService": () => (/* binding */ ReporteNotificacionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ReporteNotificacionesService {
  constructor(http) {
    this.http = http;
  }
  getReporteNotificaciones(filters) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'reporteNotificaciones', filters);
  }
  getExcelNotificaciones(userReport) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'reporteNotificaciones/exportExcel', userReport);
  }
  downloadExcel(url) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/pdf',
      'Accept': 'application/pdf' // Cambia el tipo de contenido según el tipo de archivo que deseas descargar
    });

    return this.http.get(url);
  }
}
ReporteNotificacionesService.ɵfac = function ReporteNotificacionesService_Factory(t) {
  return new (t || ReporteNotificacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ReporteNotificacionesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ReporteNotificacionesService,
  factory: ReporteNotificacionesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8818:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/digitar-notificaciones/digitar-notificaciones.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitarNotificacionesComponent": () => (/* binding */ DigitarNotificacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DigitarNotificacionesComponent {}
DigitarNotificacionesComponent.ɵfac = function DigitarNotificacionesComponent_Factory(t) {
  return new (t || DigitarNotificacionesComponent)();
};
DigitarNotificacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DigitarNotificacionesComponent,
  selectors: [["app-digitar-notificaciones"]],
  decls: 2,
  vars: 0,
  template: function DigitarNotificacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "digitar-notificaciones works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5767:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/editar-notificaciones/editar-notificaciones.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarNotificacionesComponent": () => (/* binding */ EditarNotificacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EditarNotificacionesComponent {}
EditarNotificacionesComponent.ɵfac = function EditarNotificacionesComponent_Factory(t) {
  return new (t || EditarNotificacionesComponent)();
};
EditarNotificacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditarNotificacionesComponent,
  selectors: [["app-editar-notificaciones"]],
  decls: 2,
  vars: 0,
  template: function EditarNotificacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "editar-notificaciones works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2037:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/estado-electronico/estado-electronico.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadoElectronicoComponent": () => (/* binding */ EstadoElectronicoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EstadoElectronicoComponent {}
EstadoElectronicoComponent.ɵfac = function EstadoElectronicoComponent_Factory(t) {
  return new (t || EstadoElectronicoComponent)();
};
EstadoElectronicoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EstadoElectronicoComponent,
  selectors: [["app-estado-electronico"]],
  decls: 2,
  vars: 0,
  template: function EstadoElectronicoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "estado-electronico works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6704:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/guia-captura/guia-captura.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuiaCapturaComponent": () => (/* binding */ GuiaCapturaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GuiaCapturaComponent {}
GuiaCapturaComponent.ɵfac = function GuiaCapturaComponent_Factory(t) {
  return new (t || GuiaCapturaComponent)();
};
GuiaCapturaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GuiaCapturaComponent,
  selectors: [["app-guia-captura"]],
  decls: 2,
  vars: 0,
  template: function GuiaCapturaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "guia-captura works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1661:
/*!*************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/notificaciones-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionesRoutingModule": () => (/* binding */ NotificacionesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _report_notificaciones_report_notificaciones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-notificaciones/report-notificaciones.component */ 7500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  children: [{
    path: '',
    redirectTo: 'report-notifications',
    pathMatch: 'full'
  }, {
    path: 'report-notifications',
    component: _report_notificaciones_report_notificaciones_component__WEBPACK_IMPORTED_MODULE_0__.ReportNotificacionesComponent
  }]
}];
class NotificacionesRoutingModule {}
NotificacionesRoutingModule.ɵfac = function NotificacionesRoutingModule_Factory(t) {
  return new (t || NotificacionesRoutingModule)();
};
NotificacionesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotificacionesRoutingModule
});
NotificacionesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificacionesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6218:
/*!********************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/notificaciones.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionesComponent": () => (/* binding */ NotificacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class NotificacionesComponent {
  constructor(breadCrumService) {
    this.breadCrumService = breadCrumService;
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Notificaciones'
    }]);
  }
}
NotificacionesComponent.ɵfac = function NotificacionesComponent_Factory(t) {
  return new (t || NotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbService));
};
NotificacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NotificacionesComponent,
  selectors: [["app-notificaciones"]],
  decls: 1,
  vars: 0,
  template: function NotificacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5981:
/*!*****************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/notificaciones.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionesModule": () => (/* binding */ NotificacionesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificaciones-routing.module */ 1661);
/* harmony import */ var _notificaciones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificaciones.component */ 6218);
/* harmony import */ var _guia_captura_guia_captura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guia-captura/guia-captura.component */ 6704);
/* harmony import */ var _validar_radicados_validar_radicados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validar-radicados/validar-radicados.component */ 4307);
/* harmony import */ var _digitar_notificaciones_digitar_notificaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./digitar-notificaciones/digitar-notificaciones.component */ 8818);
/* harmony import */ var _editar_notificaciones_editar_notificaciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-notificaciones/editar-notificaciones.component */ 5767);
/* harmony import */ var _estado_electronico_estado_electronico_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estado-electronico/estado-electronico.component */ 2037);
/* harmony import */ var _report_notificaciones_report_notificaciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-notificaciones/report-notificaciones.component */ 7500);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/date-picker/date-picker.module */ 3228);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_home_notificaciones_reporte_notificaciones_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/home/notificaciones/reporte-notificaciones.service */ 1022);
/* harmony import */ var src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/home/audiencia/audiencia.service */ 2096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);

















class NotificacionesModule {}
NotificacionesModule.ɵfac = function NotificacionesModule_Factory(t) {
  return new (t || NotificacionesModule)();
};
NotificacionesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: NotificacionesModule
});
NotificacionesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService, src_app_services_home_notificaciones_reporte_notificaciones_service__WEBPACK_IMPORTED_MODULE_10__.ReporteNotificacionesService, src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_11__.AudienciaService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificacionesRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.CheckboxComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.RadioButtonComponentModule, src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_9__.DatePickerModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ModalComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TextAreaModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](NotificacionesModule, {
    declarations: [_notificaciones_component__WEBPACK_IMPORTED_MODULE_1__.NotificacionesComponent, _guia_captura_guia_captura_component__WEBPACK_IMPORTED_MODULE_2__.GuiaCapturaComponent, _validar_radicados_validar_radicados_component__WEBPACK_IMPORTED_MODULE_3__.ValidarRadicadosComponent, _digitar_notificaciones_digitar_notificaciones_component__WEBPACK_IMPORTED_MODULE_4__.DigitarNotificacionesComponent, _editar_notificaciones_editar_notificaciones_component__WEBPACK_IMPORTED_MODULE_5__.EditarNotificacionesComponent, _estado_electronico_estado_electronico_component__WEBPACK_IMPORTED_MODULE_6__.EstadoElectronicoComponent, _report_notificaciones_report_notificaciones_component__WEBPACK_IMPORTED_MODULE_7__.ReportNotificacionesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificacionesRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.CheckboxComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.RadioButtonComponentModule, src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_9__.DatePickerModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ModalComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TextAreaModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 7500:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/report-notificaciones/report-notificaciones.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportNotificacionesComponent": () => (/* binding */ ReportNotificacionesComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_models_home_notificaciones_filterDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/home/notificaciones/filterDate */ 4690);
/* harmony import */ var src_app_models_home_notificaciones_ReporteNotificacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/home/notificaciones/ReporteNotificacion */ 3136);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var src_app_models_audiencias_audiencias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/audiencias/audiencias */ 2051);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_models_home_notificaciones_filterReport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/home/notificaciones/filterReport */ 4739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var src_app_services_home_notificaciones_reporte_notificaciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/home/notificaciones/reporte-notificaciones.service */ 1022);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/home/audiencia/audiencia.service */ 2096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/date-picker/date-picker.component */ 8282);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../components/text-area/text-area.component */ 7408);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ 9129);
























function ReportNotificacionesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
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
const _c2 = function () {
  return {
    label: "Nuevos procesos",
    icon: "pi pi-fw pi-clone",
    routerLink: "/provired/home-provired/home/procesos"
  };
};
const _c3 = function (a0, a1) {
  return [a0, a1];
};
function ReportNotificacionesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 15)(1, "div", 1)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "app-side-menu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](3, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](1, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c2)));
  }
}
function ReportNotificacionesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Reporte de notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function ReportNotificacionesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 15)(1, "div", 1)(2, "div", 15)(3, "div", 1)(4, "div", 17)(5, "div", 18)(6, "app-date-picker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_10_Template_app_date_picker_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r12.fi = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 18)(8, "app-date-picker", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_10_Template_app_date_picker_modelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r14.ff = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 1)(10, "div")(11, "app-button-component", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_ng_template_10_Template_app_button_component_eventEmiter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r15.findReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r3.fi)("showIcon", true)("buttonBar", true)("requerido", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r3.ff)("showIcon", true)("buttonBar", true)("requerido", true);
  }
}
function ReportNotificacionesComponent_div_11_ng_template_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "app-button-component", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_div_11_ng_template_4_ng_template_7_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const rowData_r19 = restoredCtx.elemento;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r20.openDetail(rowData_r19, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 29)(4, "app-button-component", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_div_11_ng_template_4_ng_template_7_Template_app_button_component_eventEmiter_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const rowData_r19 = restoredCtx.elemento;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r22.openDetail(rowData_r19, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
function ReportNotificacionesComponent_div_11_ng_template_4_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "app-button-component", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_div_11_ng_template_4_ng_template_8_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25);
      const rowData_r23 = restoredCtx.elemento;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r24.downloadDoc(rowData_r23.ruta_auto));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 29)(4, "app-button-component", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_div_11_ng_template_4_ng_template_8_Template_app_button_component_eventEmiter_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25);
      const rowData_r23 = restoredCtx.elemento;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r26.openDetail(rowData_r23, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowData_r23 = ctx.elemento;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("iconClass", "pi ", rowData_r23.ruta_auto !== "" ? "pi-file-pdf" : "pi-times", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("messageTooltip", rowData_r23.nota !== "" && rowData_r23.nota !== null ? "Nota" : "No hay notas disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("iconClass", "pi ", rowData_r23.nota !== "" && rowData_r23.nota !== null ? "pi-exclamation-triangle" : "pi-times-circle", "")("clase", "p-button-rounded  ", rowData_r23.nota !== "" && rowData_r23.nota !== null ? "p-button-warning" : "p-button-danger", "  p-button-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
const _c4 = function () {
  return {
    field: "etiqueta_suscriptor",
    header: "Etiqueta"
  };
};
const _c5 = function () {
  return {
    field: "name_ciudad",
    header: "Cidad"
  };
};
const _c6 = function () {
  return {
    field: "name_despacho",
    header: "Despacho"
  };
};
const _c7 = function () {
  return {
    field: "name_notificacion",
    header: "Notificaci\u00F3n"
  };
};
const _c8 = function () {
  return {
    field: "radicacion",
    header: "Radicaci\u00F3n"
  };
};
const _c9 = function () {
  return {
    field: "demandante",
    header: "Demandante"
  };
};
const _c10 = function () {
  return {
    field: "demandado",
    header: "Demandado"
  };
};
const _c11 = function () {
  return {
    field: "descripcion",
    header: "Descripci\u00F3n"
  };
};
const _c12 = function () {
  return {
    field: "fechapublicacion",
    header: "Publicaci\u00F3n",
    isFecha: true
  };
};
const _c13 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
  return [a0, a1, a2, a3, a4, a5, a6, a7, a8];
};
function ReportNotificacionesComponent_div_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 23)(1, "div", 2)(2, "div")(3, "app-button-component", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_div_11_ng_template_4_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r27.downloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 23)(5, "div", 1)(6, "app-tabla-component", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onChangePage", function ReportNotificacionesComponent_div_11_ng_template_4_Template_app_tabla_component_onChangePage_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r29.changePageAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ReportNotificacionesComponent_div_11_ng_template_4_ng_template_7_Template, 5, 4, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ReportNotificacionesComponent_div_11_ng_template_4_ng_template_8_Template, 5, 8, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunctionV"](23, _c13, [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](14, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](15, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](16, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](17, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](18, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](19, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](20, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](21, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](22, _c12)]))("data", ctx_r16.listReport)("loading", ctx_r16.loadingTable)("fixStyleTable", true)("stripedTable", true)("filtroGeneral", false)("actionsShow", true)("paginador", true)("lazy", true)("rows", 30)("totalRecords", ctx_r16.totalRecords)("actionsRightShow", true);
  }
}
function ReportNotificacionesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 22)(3, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, ReportNotificacionesComponent_div_11_ng_template_4_Template, 9, 33, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function ReportNotificacionesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "INFORMACI\u00D3N DETALLADA");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ReportNotificacionesComponent_ng_template_14_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span")(1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Abrir Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("href", ctx_r30.detailModal.expediente_digital, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function ReportNotificacionesComponent_ng_template_14_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ReportNotificacionesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 34)(1, "div", 29)(2, "input-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.detailModal.name_ciudad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 29)(4, "input-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r35.detailModal.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 0)(6, "div", 29)(7, "input-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_input_text_modelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r36.detailModal.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 29)(9, "input-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_input_text_modelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r37.detailModal.name_notificacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 29)(12, "input-text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_input_text_modelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r38.detailModal.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 1)(14, "app-text-area", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_app_text_area_modelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r39.detailModal.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 0)(16, "div", 1)(17, "app-text-area", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_app_text_area_modelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r40.detailModal.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 1)(19, "app-text-area", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_app_text_area_modelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r41.detailModal.descripcion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 0)(21, "div", 29)(22, "input-text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_14_Template_input_text_modelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r42.detailModal.fechapublicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24, " Expediente digital: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, ReportNotificacionesComponent_ng_template_14_span_25_Template, 3, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, ReportNotificacionesComponent_ng_template_14_ng_template_26_Template, 2, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](27);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.name_ciudad)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.despacho)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.radicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.name_notificacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.proceso)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.demandante)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.demandado)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.descripcion)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r6.detailModal.fechapublicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r6.detailModal.expediente_digital !== "" && ctx_r6.detailModal.expediente_digital !== null)("ngIfElse", _r31);
  }
}
function ReportNotificacionesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "NOTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ReportNotificacionesComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 34)(1, "div", 29)(2, "input-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r43.detailModal.name_ciudad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 29)(4, "input-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r45.detailModal.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 0)(6, "div", 29)(7, "input-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_input_text_modelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r46.detailModal.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 29)(9, "input-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_input_text_modelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r47.detailModal.name_notificacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 29)(12, "input-text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_input_text_modelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r48.detailModal.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 1)(14, "app-text-area", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_app_text_area_modelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r49.detailModal.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 0)(16, "div", 1)(17, "app-text-area", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_app_text_area_modelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r50.detailModal.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 1)(19, "app-text-area", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_app_text_area_modelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r51.detailModal.nota = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 0)(21, "div", 29)(22, "input-text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_17_Template_input_text_modelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r52.detailModal.fechapublicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.name_ciudad)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.despacho)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.radicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.name_notificacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.proceso)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.demandante)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.demandado)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.nota)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r8.detailModal.fechapublicacion)("disabledInputText", true);
  }
}
function ReportNotificacionesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "PROGRAMAR AUDIENCIA / ALERTAR VENCIMIENTO DE TERMINO");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ReportNotificacionesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 34)(3, "div", 29)(4, "input-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r53.detailModal.name_ciudad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 29)(6, "input-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r55.detailModal.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 0)(8, "div", 29)(9, "input-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_input_text_modelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r56.detailModal.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 29)(11, "input-text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_input_text_modelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r57.detailModal.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 0)(13, "div", 29)(14, "app-text-area", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_app_text_area_modelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r58.detailModal.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 29)(16, "app-text-area", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_app_text_area_modelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r59.detailModal.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 0)(18, "div", 1)(19, "app-text-area", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_app_text_area_modelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r60.audiencia.descripcion_vence_terminos = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 28)(21, "div", 50)(22, "app-date-picker", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("modelChange", function ReportNotificacionesComponent_ng_template_20_Template_app_date_picker_modelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r61.audiencia.fecha_vence_terminos = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.detailModal.name_ciudad)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.detailModal.despacho)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.detailModal.radicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.detailModal.proceso)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.detailModal.demandante)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.detailModal.demandado)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.audiencia.descripcion_vence_terminos);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("model", ctx_r10.audiencia.fecha_vence_terminos)("showIcon", true);
  }
}
function ReportNotificacionesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-button-component", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("eventEmiter", function ReportNotificacionesComponent_ng_template_21_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r62.updateAudiencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
class ReportNotificacionesComponent {
  constructor(breadCrumService, sessionService, spinner, reporte, message, audienciasService) {
    this.breadCrumService = breadCrumService;
    this.sessionService = sessionService;
    this.spinner = spinner;
    this.reporte = reporte;
    this.message = message;
    this.audienciasService = audienciasService;
    this.modelFilter = new src_app_models_home_notificaciones_filterDate__WEBPACK_IMPORTED_MODULE_1__.FilterDateModel();
    this.fi = new Date();
    this.ff = new Date();
    this.listReport = new Array();
    this.totalRecords = 0;
    this.today = '';
    this.loadingTable = false;
    this.showModal = false;
    this.showModalEdit = false;
    this.showModalNota = false;
    this.detailModal = new src_app_models_home_notificaciones_ReporteNotificacion__WEBPACK_IMPORTED_MODULE_2__.ReporteNotificaciones();
    this.audiencia = new src_app_models_audiencias_audiencias__WEBPACK_IMPORTED_MODULE_4__.Audiencias();
    this.filterReport = new src_app_models_home_notificaciones_filterReport__WEBPACK_IMPORTED_MODULE_6__.FilterReport();
    this.urlFinal = '';
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Reporte de notificaciones'
    }]);
  }
  findReport() {
    if (this.fi.getTime() > this.ff.getTime()) {
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Error al filtrar por fechas`, `Fecha hasta no puede ser menor a fecha desde`);
      this.message.add(message_model);
    } else {
      let sesion = this.sessionService.getStorage('user', 'json');
      this.modelFilter.parent = sesion.data.parent;
      this.modelFilter.from = 0;
      this.modelFilter.rows = 30;
      this.modelFilter.username = sesion.user;
      this.modelFilter.group_users = sesion.data.group_users;
      this.modelFilter.fi = moment__WEBPACK_IMPORTED_MODULE_0__(this.fi).format('yyyy-MM-DD');
      this.modelFilter.ff = moment__WEBPACK_IMPORTED_MODULE_0__(this.ff).format('yyyy-MM-DD');
      this.spinner.show();
      this.reporte.getReporteNotificaciones(this.modelFilter).subscribe({
        next: res => {
          this.totalRecords = res.count_rows;
          this.listReport = res.data;
          this.spinner.hide();
        },
        error: res => {
          this.spinner.hide();
          console.log(res);
        }
      });
    }
  }
  changePageAction(event) {
    this.loadingTable = true;
    this.modelFilter.from = event.first;
    this.reporte.getReporteNotificaciones(this.modelFilter).subscribe({
      next: res => {
        this.loadingTable = false;
        this.totalRecords = res.count_rows;
        this.listReport = res.data;
      },
      error: res => {
        this.loadingTable = false;
        console.log(res);
      }
    });
  }
  openDetail(event, modal) {
    switch (modal) {
      case 1:
        this.showModal = true;
        break;
      case 2:
        this.showModalEdit = true;
        break;
      case 3:
        if (event.nota !== '' && event.nota !== null) {
          this.showModalNota = true;
        }
        break;
      default:
        break;
    }
    this.detailModal = event;
  }
  updateAudiencia() {
    this.spinner.show();
    let sesion = this.sessionService.getStorage('user', 'json');
    this.audiencia.ciudad = this.detailModal.municipio;
    this.audiencia.demandado = this.detailModal.demandado;
    this.audiencia.demandante = this.detailModal.demandante;
    this.audiencia.radicacion = this.detailModal.radicacion;
    this.audiencia.proceso = this.detailModal.proceso;
    this.audiencia.despacho = this.detailModal.despacho;
    this.audiencia.username = sesion.user;
    this.audiencia.idplanilla = this.detailModal.idplanilla;
    this.audiencia.fecha_vence_terminos = moment__WEBPACK_IMPORTED_MODULE_0__(this.audiencia.fecha_vence_terminos).format('YYYY-MM-DD');
    if (this.audiencia.descripcion_vence_terminos && this.audiencia.fecha_vence_terminos) {
      this.audienciasService.createAudiencia(this.audiencia).subscribe({
        next: res => {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('', '', '');
          if (res.status == 200) {
            message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('success', `Proceso exitoso`, `${res.msg}`);
          } else if (res.status == 400) {
            message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Estructura erronea`, `${res.msg}`);
          }
          this.message.add(message_model);
          this.spinner.hide();
          this.showModalEdit = false;
        },
        error: error => {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Se ha presentado un error`, `${error.error.msg}`);
          this.message.add(message_model);
          this.spinner.hide();
        }
      });
    } else {
      this.spinner.hide();
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `No ha completado el formulario`, `Debe dilingenciar todos los campos (Detalle vencimiento audiencia)`);
      this.message.add(message_model);
    }
  }
  downloadDoc(url) {
    if (url) {
      let finalUrl = url.substring(0);
      window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseDocs + '/autos' + finalUrl);
    }
  }
  downloadReport() {
    this.spinner.show();
    let session = this.sessionService.getStorage('user', 'json');
    this.filterReport.username = session.data.username;
    this.filterReport.group_users = session.data.group_users;
    this.filterReport.parent = session.data.parent;
    this.filterReport.fi = moment__WEBPACK_IMPORTED_MODULE_0__(this.fi).format('yyyy-MM-DD');
    this.filterReport.ff = moment__WEBPACK_IMPORTED_MODULE_0__(this.ff).format('yyyy-MM-DD');
    this.filterReport.name_user = session.data.nombre;
    this.filterReport.name_file = 'Reporte_notificaciones';
    this.reporte.getExcelNotificaciones(this.filterReport).subscribe({
      next: res => {
        if (res.status == 200) {
          let listUrl = res.url.split('/');
          this.urlFinal = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseDocs + res.url;
          this.spinner.hide();
          fetch(this.urlFinal).then(response => response.blob()).then(blod => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blod);
            link.download = listUrl[2];
            link.click();
          }).catch(console.error).then(error => {
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Se ha presentado un error`, `No fue posible descargar el documento, estamos trabajando para resolver este error`);
            this.message.add(message_model);
          });
        } else {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Error ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
        this.spinner.hide();
      }
    });
  }
}
ReportNotificacionesComponent.ɵfac = function ReportNotificacionesComponent_Factory(t) {
  return new (t || ReportNotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_8__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_services_home_notificaciones_reporte_notificaciones_service__WEBPACK_IMPORTED_MODULE_9__.ReporteNotificacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_10__.AudienciaService));
};
ReportNotificacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: ReportNotificacionesComponent,
  selectors: [["app-report-notificaciones"]],
  decls: 26,
  vars: 5,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["class", "grid", 4, "ngIf"], [3, "visible", "closeModal"], ["pTemplate", "title"], ["pTemplate", "footer"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center"], [1, "title-color", "mt-3"], [1, "grid", "p-fluid"], [1, "col-12", 3, "itemsMenu"], [1, "grid", "p-fluit", "pr-3", "pl-3"], [1, "col-12", "xl:col-6", "md:col-6"], ["nombre", "fechaDesde", "placeholder", "DD/MM/YY", "label", "Fecha desde: ", 3, "model", "showIcon", "buttonBar", "requerido", "modelChange"], ["nombre", "fechaHasta", "placeholder", "DD/MM/YY", "label", "Fecha hasta: ", 3, "model", "showIcon", "buttonBar", "requerido", "modelChange"], ["nameButton", "Consultar", 3, "eventEmiter"], [1, "mt-3"], [1, "row"], ["nameButton", "Exportar a excel reporte notificaciones", "messageTooltip", "Detalle", "iconClass", "pi pi-file-excel", "clase", "p-button-rounded p-button-success p-button-outlined", 3, "icon", "showTooltip", "eventEmiter"], ["paginationPosition", "both", "idElement", "id_vencimiento", "nameActionsLeft", "Detalle / Programar", "nameActionsRight", "Acciones", 3, "cols", "data", "loading", "fixStyleTable", "stripedTable", "filtroGeneral", "actionsShow", "paginador", "lazy", "rows", "totalRecords", "actionsRightShow", "onChangePage"], ["pTemplate", "actions"], ["pTemplate", "actions-left"], [1, "grid", "p-fluit"], [1, "col-6"], ["messageTooltip", "Detalle", "iconClass", "pi pi-file", "clase", "p-button-rounded p-button-danger p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["messageTooltip", "Programar", "iconClass", "pi\n                            pi-calendar-plus", "clase", "p-button-rounded p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["messageTooltip", "Autos", "clase", "p-button-rounded p-button-danger p-button-text", 3, "icon", "showTooltip", "iconClass", "eventEmiter"], [3, "icon", "showTooltip", "messageTooltip", "iconClass", "clase", "eventEmiter"], [1, "grid", "mt-3"], ["placeHolder", "Ciudad", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "despacho", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Radicaci\u00F3n", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Notificaci\u00F3n", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Proceso", 3, "model", "disabledInputText", "modelChange"], ["placeholder", "Demandante", 3, "model", "disabled", "modelChange"], ["placeholder", "Demandado", 3, "model", "disabled", "modelChange"], ["placeholder", "Descripci\u00F3n", 3, "model", "disabled", "modelChange"], ["placeHolder", "Fecha publicaci\u00F3n", 3, "model", "disabledInputText", "modelChange"], [1, "col-6", "p-3"], [4, "ngIf", "ngIfElse"], ["linknull", ""], ["target", "_blank", 3, "href"], ["placeholder", "Nota", 3, "model", "disabled", "modelChange"], ["placeholder", "Detalle vencimiento audiencia", 3, "model", "modelChange"], [1, "col-6", "ml-2"], ["placeholder", "Fecha Audiencia / Vencimiento", 3, "model", "showIcon", "modelChange"], ["nameButton", "Actualizar registro", "clase", "p-button-outlined p-button-success", 3, "eventEmiter"]],
  template: function ReportNotificacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ReportNotificacionesComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ReportNotificacionesComponent_ng_template_6_Template, 4, 6, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 5)(8, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ReportNotificacionesComponent_ng_template_9_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, ReportNotificacionesComponent_ng_template_10_Template, 12, 8, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ReportNotificacionesComponent_div_11_Template, 5, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "modal-component", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeModal", function ReportNotificacionesComponent_Template_modal_component_closeModal_12_listener() {
        return ctx.showModal = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, ReportNotificacionesComponent_ng_template_13_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, ReportNotificacionesComponent_ng_template_14_Template, 28, 20, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "modal-component", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeModal", function ReportNotificacionesComponent_Template_modal_component_closeModal_15_listener() {
        return ctx.showModalNota = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, ReportNotificacionesComponent_ng_template_16_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, ReportNotificacionesComponent_ng_template_17_Template, 23, 18, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "modal-component", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeModal", function ReportNotificacionesComponent_Template_modal_component_closeModal_18_listener() {
        return ctx.showModalEdit = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, ReportNotificacionesComponent_ng_template_19_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, ReportNotificacionesComponent_ng_template_20_Template, 23, 15, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, ReportNotificacionesComponent_ng_template_21_Template, 1, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "ngx-spinner", 10)(24, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.listReport.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("visible", ctx.showModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("visible", ctx.showModalNota);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("visible", ctx.showModalEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_11__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_21__.PrimeTemplate, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__.SideMenuComponent, _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_13__.DatePickerComponent, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_14__.ButtonComponentComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_15__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_16__.ModalComponentComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_17__.InputTextComponentComponent, _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_18__.TextAreaComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent],
  styles: [".title-color[_ngcontent-%COMP%] {\n  color: #6d84a3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9ub3RpZmljYWNpb25lcy9yZXBvcnQtbm90aWZpY2FjaW9uZXMvcmVwb3J0LW5vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjNmQ4NGEzO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4307:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/provired/home/notificaciones/validar-radicados/validar-radicados.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidarRadicadosComponent": () => (/* binding */ ValidarRadicadosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ValidarRadicadosComponent {}
ValidarRadicadosComponent.ɵfac = function ValidarRadicadosComponent_Factory(t) {
  return new (t || ValidarRadicadosComponent)();
};
ValidarRadicadosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ValidarRadicadosComponent,
  selectors: [["app-validar-radicados"]],
  decls: 2,
  vars: 0,
  template: function ValidarRadicadosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "validar-radicados works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_notificaciones_notificaciones_module_ts.js.map