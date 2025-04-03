"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_procesos_procesos_module_ts"],{

/***/ 8282:
/*!*****************************************************************!*\
  !*** ./src/app/components/date-picker/date-picker.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerComponent": () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_core_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/core/util.service */ 8806);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es */ 2403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_constans_general_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constans/general-const */ 5267);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ 2547);











const _c0 = function (a0) {
  return [a0];
};
function DatePickerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Este campo es requerido * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, (ctx_r0.grupo.controls[ctx_r0.nombre].errors == null ? null : ctx_r0.grupo.controls[ctx_r0.nombre].errors["errorRequerido"]) ? "p-invalid" : ""));
  }
}
const _c1 = function () {
  return {
    width: "100%"
  };
};
const _c2 = function () {
  return {
    width: "calc(100% - 2.06em)"
  };
};
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__["default"]);
class DatePickerComponent {
  constructor(fb, confing) {
    this.fb = fb;
    this.confing = confing;
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disabled = false;
    this.showIcon = false;
    this.nombre = '';
    this.placeholder = '';
    this.grupo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    this.requerido = false;
    this.format = "dd/mm/yy";
    this.buttonBar = false;
    this.label = '';
    this.valid = false;
    this.validChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.generateFormat();
    this.generarControl();
    this.confing.setTranslation(src_app_constans_general_const__WEBPACK_IMPORTED_MODULE_1__.GeneralConst.GENERAL.DATE_LANGUAJE);
  }
  ngOnChanges(change) {
    if (change.model) {
      setTimeout(() => {
        this.actualizarControl();
        if (!change.model.firstChange) {
          if (this.grupo.get(this.nombre)?.status == 'INVALID') {
            this.valid = true;
            this.validChange.emit(this.valid);
          } else {
            this.valid = false;
            this.validChange.emit(this.valid);
          }
        }
      });
    }
  }
  generateFormat() {
    if (!this.grupo) {
      this.grupo = this.fb.group({});
    }
  }
  generarControl() {
    if (this.grupo) {
      if (!this.grupo.get(this.nombre)) {
        this.nombre = src_app_services_core_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService.getControlNombre();
        this.grupo.addControl(this.nombre, this.fb.control({}));
      }
    }
    this.grupo.get(this.nombre)?.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([this.grupo.get(this.nombre)?.validator, () => this.generarValidaciones(this.model, this.requerido)]));
  }
  generarValidaciones(modelo, requerido) {
    if (this.validarRequerido(modelo, requerido)) {
      return {
        errorRequerido: true
      };
    }
    return null;
  }
  validarRequerido(modelo, requerido) {
    return requerido && !modelo;
  }
  actualizarControl() {
    if (this.grupo && this.grupo.get(this.nombre)) {
      this.grupo.get(this.nombre)?.setValue(this.model);
    }
  }
}
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) {
  return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig));
};
DatePickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DatePickerComponent,
  selectors: [["app-date-picker"]],
  inputs: {
    model: "model",
    disabled: "disabled",
    showIcon: "showIcon",
    nombre: "nombre",
    placeholder: "placeholder",
    grupo: "grupo",
    requerido: "requerido",
    format: "format",
    buttonBar: "buttonBar",
    label: "label",
    valid: "valid"
  },
  outputs: {
    modelChange: "modelChange",
    validChange: "validChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID,
    useValue: 'es'
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 6,
  vars: 20,
  consts: [[1, "grid"], [1, "col-12"], [1, "mb-2", 3, "ngClass"], ["appendTo", "body", 3, "ngModel", "showIcon", "disabled", "placeholder", "required", "dateFormat", "showButtonBar", "inputStyle", "ngClass", "ngModelChange"], [4, "ngIf"], [3, "ngClass"]],
  template: function DatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "small", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-calendar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DatePickerComponent_Template_p_calendar_ngModelChange_4_listener($event) {
        return ctx.model = $event;
      })("ngModelChange", function DatePickerComponent_Template_p_calendar_ngModelChange_4_listener($event) {
        return ctx.modelChange.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DatePickerComponent_div_5_Template, 3, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.valid ? !ctx.grupo.controls[ctx.nombre].valid ? "p-invalid" : "" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("showIcon", true)("disabled", ctx.disabled)("showIcon", ctx.showIcon)("placeholder", ctx.placeholder)("required", ctx.requerido)("dateFormat", ctx.format)("showButtonBar", ctx.buttonBar)("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ctx.valid ? !ctx.grupo.controls[ctx.nombre].valid ? "ng-invalid ng-dirty" : "" : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar],
  styles: [".p-invalid[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wLWludmFsaWQge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3228:
/*!**************************************************************!*\
  !*** ./src/app/components/date-picker/date-picker.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerComponent": () => (/* reexport safe */ _date_picker_component__WEBPACK_IMPORTED_MODULE_0__.DatePickerComponent),
/* harmony export */   "DatePickerModule": () => (/* binding */ DatePickerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _date_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker.component */ 8282);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class DatePickerModule {}
DatePickerModule.ɵfac = function DatePickerModule_Factory(t) {
  return new (t || DatePickerModule)();
};
DatePickerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DatePickerModule
});
DatePickerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DatePickerModule, {
    declarations: [_date_picker_component__WEBPACK_IMPORTED_MODULE_0__.DatePickerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule],
    exports: [_date_picker_component__WEBPACK_IMPORTED_MODULE_0__.DatePickerComponent]
  });
})();

/***/ }),

/***/ 799:
/*!************************************************************!*\
  !*** ./src/app/services/home/procesos/procesos.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosService": () => (/* binding */ ProcesosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProcesosService {
  constructor(http) {
    this.http = http;
  }
  createProceso(pro) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'newProceso/insert', pro);
  }
}
ProcesosService.ɵfac = function ProcesosService_Factory(t) {
  return new (t || ProcesosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ProcesosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProcesosService,
  factory: ProcesosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2553:
/*!*************************************************************************!*\
  !*** ./src/app/views/provired/home/procesos/procesos-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosRoutingModule": () => (/* binding */ ProcesosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _procesos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procesos.component */ 7687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _procesos_component__WEBPACK_IMPORTED_MODULE_0__.ProcesosComponent
}];
class ProcesosRoutingModule {}
ProcesosRoutingModule.ɵfac = function ProcesosRoutingModule_Factory(t) {
  return new (t || ProcesosRoutingModule)();
};
ProcesosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProcesosRoutingModule
});
ProcesosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProcesosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7687:
/*!********************************************************************!*\
  !*** ./src/app/views/provired/home/procesos/procesos.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosComponent": () => (/* binding */ ProcesosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_models_home_procesos_proceso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/proceso */ 3799);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_utils_departamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/departamentos.service */ 4643);
/* harmony import */ var src_app_services_utils_municipios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/municipios.service */ 3389);
/* harmony import */ var src_app_services_utils_corporaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/corporaciones.service */ 3980);
/* harmony import */ var src_app_services_utils_despachos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/despachos.service */ 614);
/* harmony import */ var src_app_services_home_procesos_procesos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/home/procesos/procesos.service */ 799);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _components_dropdown_component_dropdown_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/dropdown-component/dropdown-component.component */ 9839);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/text-area/text-area.component */ 7408);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 9129);




















function ProcesosComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
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
function ProcesosComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13)(1, "div", 1)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "app-side-menu", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c1)));
  }
}
function ProcesosComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Registro de nuevos procesos");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function ProcesosComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "div", 15)(2, "app-dropdown-component", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.ciudadModel = $event);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.departamentoChange());
    })("grupo", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_grupo_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.formProceso);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 15)(4, "app-dropdown-component", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.municipioModel = $event);
    })("grupo", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_grupo_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.municipioChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 7)(6, "div", 15)(7, "app-dropdown-component", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.corporacionesModel = $event);
    })("grupo", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_grupo_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.corporacionesChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 15)(9, "app-dropdown-component", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_modelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.despachosModel = $event);
    })("grupo", function ProcesosComponent_ng_template_10_Template_app_dropdown_component_grupo_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.formProceso);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 20)(11, "div", 15)(12, "input-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_input_text_grupo_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_input_text_modelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.newProceso.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 20)(14, "div", 1)(15, "app-text-area", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_app_text_area_grupo_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_app_text_area_modelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.newProceso.juzgado_origen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 20)(17, "div", 15)(18, "input-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_input_text_grupo_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_input_text_modelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.newProceso.codigo23 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 15)(20, "input-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_input_text_grupo_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_input_text_modelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.newProceso.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 20)(22, "div", 1)(23, "app-text-area", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_app_text_area_grupo_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_app_text_area_modelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.newProceso.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 20)(25, "div", 1)(26, "app-text-area", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_app_text_area_grupo_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_app_text_area_modelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.newProceso.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 20)(28, "div", 15)(29, "input-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("grupo", function ProcesosComponent_ng_template_10_Template_input_text_grupo_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.formProceso);
    })("modelChange", function ProcesosComponent_ng_template_10_Template_input_text_modelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.newProceso.etiqueta = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.ciudadModel)("options", ctx_r3.listDepartamentos)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.municipioModel)("options", ctx_r3.listMunicipios)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.corporacionesModel)("options", ctx_r3.listCorporaciones)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.despachosModel)("options", ctx_r3.listDespachos)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.newProceso.radicacion)("placeHolderActive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.newProceso.juzgado_origen);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("placeHolderActive", true)("model", ctx_r3.newProceso.codigo23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("placeHolderActive", true)("model", ctx_r3.newProceso.proceso);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.newProceso.demandante);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r3.newProceso.demandado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("placeHolderActive", true)("model", ctx_r3.newProceso.etiqueta);
  }
}
function ProcesosComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-button-component", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventEmiter", function ProcesosComponent_ng_template_11_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.clearFormulario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "app-button-component", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventEmiter", function ProcesosComponent_ng_template_11_Template_app_button_component_eventEmiter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r33.crearProceso($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
class ProcesosComponent {
  constructor(breadCrumService, departamentos, municipio, corporaciones, despacho, procesoService, sesion, spinner, message) {
    this.breadCrumService = breadCrumService;
    this.departamentos = departamentos;
    this.municipio = municipio;
    this.corporaciones = corporaciones;
    this.despacho = despacho;
    this.procesoService = procesoService;
    this.sesion = sesion;
    this.spinner = spinner;
    this.message = message;
    this.formProceso = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({});
    this.listDepartamentos = [];
    this.listMunicipios = [];
    this.listCorporaciones = [];
    this.listDespachos = [];
    this.newProceso = new src_app_models_home_procesos_proceso__WEBPACK_IMPORTED_MODULE_0__.Proceso();
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Procesos'
    }]);
    this.departamentos.getDepartamento().subscribe({
      next: res => {
        this.listDepartamentos = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  crearProceso(eve) {
    this.spinner.show();
    this.newProceso.depto = this.ciudadModel.IdDep;
    this.newProceso.municipio = this.municipioModel.IdMun;
    this.newProceso.corporacion = this.corporacionesModel.IdCorp;
    this.newProceso.despacho = this.despachosModel.IdDes;
    this.newProceso.suscriptor = this.sesion.getSession().user;
    this.procesoService.createProceso(this.newProceso).subscribe({
      next: res => {
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__.MessageModel('', '', '');
        if (res.status == 200) {
          message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__.MessageModel('success', `Creación exitosa`, `${res.msg}`);
        } else if (res.status == 400) {
          message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__.MessageModel('error', `El formulario está incompleto`, `${res.msg}`);
        }
        this.message.add(message_model);
        this.spinner.hide();
      },
      error: error => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_1__.MessageModel('error', `El formulario está incompleto`, `${error.error.msg}`);
        this.message.add(message_model);
      }
    });
  }
  clearFormulario() {
    this.newProceso = new src_app_models_home_procesos_proceso__WEBPACK_IMPORTED_MODULE_0__.Proceso();
    this.despachosModel = null;
    this.corporacionesModel = null;
    this.municipioModel = null;
    this.listMunicipios = [];
    this.listCorporaciones = [];
    this.listDespachos = [];
  }
  departamentoChange() {
    if (this.ciudadModel !== null) {
      this.municipio.getMunicipioPorDep(this.ciudadModel.IdDep).subscribe({
        next: res => {
          this.listMunicipios = res;
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      this.despachosModel = null;
      this.corporacionesModel = null;
      this.municipioModel = null;
      this.listMunicipios = [];
      this.listCorporaciones = [];
      this.listDespachos = [];
    }
  }
  municipioChange() {
    if (this.municipioModel !== null) {
      this.corporaciones.getCorporacionesPorMunicipio(this.municipioModel.IdMun).subscribe({
        next: res => {
          this.listCorporaciones = res;
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      this.corporacionesModel = null;
      this.despachosModel = null;
      this.listCorporaciones = [];
      this.listDespachos = [];
    }
  }
  corporacionesChange() {
    if (this.corporacionesModel !== null) {
      this.despacho.getDespachoPorCorp(this.corporacionesModel.IdCorp).subscribe({
        next: res => {
          this.listDespachos = res;
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      this.despachosModel = null;
      this.listDespachos = [];
    }
  }
}
ProcesosComponent.ɵfac = function ProcesosComponent_Factory(t) {
  return new (t || ProcesosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_departamentos_service__WEBPACK_IMPORTED_MODULE_3__.DepartamentosService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_municipios_service__WEBPACK_IMPORTED_MODULE_4__.MunicipiosService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_corporaciones_service__WEBPACK_IMPORTED_MODULE_5__.CorporacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_despachos_service__WEBPACK_IMPORTED_MODULE_6__.DespachosService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_home_procesos_procesos_service__WEBPACK_IMPORTED_MODULE_7__.ProcesosService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_8__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_18__.MessageService));
};
ProcesosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ProcesosComponent,
  selectors: [["app-procesos"]],
  decls: 17,
  vars: 1,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["pTemplate", "footer"], [1, "grid", "p-fluit", "mt-2"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color", "mt-3"], [1, "grid", "p-fluid"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "col-12", "xl:col-6", "md:col-6"], ["name", "departamento", "placeholder", "Departamento", "selectLabel", "Seleccionar departamento", "keyOptionName", "departamento", 3, "model", "options", "showClear", "modelChange", "grupo"], ["name", "municipio", "placeholder", "Municipio", "keyOptionName", "municipio", "selectLabel", "Seleccionar municipio", 3, "model", "options", "showClear", "modelChange", "grupo"], ["name", "corporacioes", "placeholder", "Corporacion por especialidad", "keyOptionName", "corporacion", "selectLabel", "Seleccionar corporacion", 3, "model", "options", "showClear", "modelChange", "grupo"], ["name", "despachos", "placeholder", "Despachos", "keyOptionName", "despacho", "selectLabel", "Seleccionar despacho", 3, "model", "options", "showClear", "filter", "modelChange", "grupo"], [1, "grid", "p-fluit"], ["placeHolder", "Radicacion", "styleInput", "help-text", 3, "model", "placeHolderActive", "grupo", "modelChange"], ["placeholder", "Juzgado Origen / N\u00FAmero Radicado Anterior", 3, "model", "grupo", "modelChange"], ["placeHolder", "Radicado (23 Digitos)", "styleInput", "help-text", 3, "placeHolderActive", "model", "grupo", "modelChange"], ["placeHolder", "Tipo de Proceso", "styleInput", "help-text", 3, "placeHolderActive", "model", "grupo", "modelChange"], ["placeholder", "Demandante", 3, "model", "grupo", "modelChange"], ["placeholder", "Demandando", 3, "model", "grupo", "modelChange"], ["placeHolder", "Etiqueta", "styleInput", "help-text", 3, "placeHolderActive", "model", "grupo", "modelChange"], ["nameButton", "Cancelar", "clase", "p-button-outlined p-button-danger", 3, "eventEmiter"], ["nameButton", "Crear nuevo proceso", "clase", "ml-2 p-button-outlined p-button-success", 3, "eventEmiter"]],
  template: function ProcesosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProcesosComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ProcesosComponent_ng_template_6_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 5)(8, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ProcesosComponent_ng_template_9_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ProcesosComponent_ng_template_10_Template, 30, 24, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, ProcesosComponent_ng_template_11_Template, 2, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ngx-spinner", 8)(15, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_components_dropdown_component_dropdown_component_component__WEBPACK_IMPORTED_MODULE_9__.DropdownComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__.SideMenuComponent, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_11__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_12__.ButtonComponentComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_13__.InputTextComponentComponent, _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_14__.TextAreaComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent],
  styles: [".title-color[_ngcontent-%COMP%] {\n  color: #6D84A3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9wcm9jZXNvcy9wcm9jZXNvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jb2xvciB7XHJcbiAgY29sb3I6ICM2RDg0QTM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8753:
/*!*****************************************************************!*\
  !*** ./src/app/views/provired/home/procesos/procesos.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosModule": () => (/* binding */ ProcesosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _procesos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procesos-routing.module */ 2553);
/* harmony import */ var _procesos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procesos.component */ 7687);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/date-picker/date-picker.module */ 3228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_utils_departamentos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/departamentos.service */ 4643);
/* harmony import */ var src_app_services_utils_municipios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/municipios.service */ 3389);
/* harmony import */ var src_app_services_utils_corporaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/corporaciones.service */ 3980);
/* harmony import */ var src_app_services_utils_despachos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/despachos.service */ 614);
/* harmony import */ var src_app_services_home_procesos_procesos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/home/procesos/procesos.service */ 799);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);















class ProcesosModule {}
ProcesosModule.ɵfac = function ProcesosModule_Factory(t) {
  return new (t || ProcesosModule)();
};
ProcesosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: ProcesosModule
});
ProcesosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [src_app_services_utils_departamentos_service__WEBPACK_IMPORTED_MODULE_4__.DepartamentosService, src_app_services_utils_municipios_service__WEBPACK_IMPORTED_MODULE_5__.MunicipiosService, src_app_services_utils_corporaciones_service__WEBPACK_IMPORTED_MODULE_6__.CorporacionesService, src_app_services_utils_despachos_service__WEBPACK_IMPORTED_MODULE_7__.DespachosService, src_app_services_home_procesos_procesos_service__WEBPACK_IMPORTED_MODULE_8__.ProcesosService, primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _procesos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcesosRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.DropdownComponentModule, src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_3__.DatePickerModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TextAreaModule, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProcesosModule, {
    declarations: [_procesos_component__WEBPACK_IMPORTED_MODULE_1__.ProcesosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _procesos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcesosRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.DropdownComponentModule, src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_3__.DatePickerModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TextAreaModule, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_procesos_procesos_module_ts.js.map