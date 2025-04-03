"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["common"],{

/***/ 3752:
/*!*****************************************!*\
  !*** ./src/app/constans/token-const.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token)
/* harmony export */ });
class Token {}
Token.TOKEN_AUTHORIZATION = {
  TOKEN: "YWYxODYxM2E4c2RmK0ZXUHIwVjFyM2Qq8XRxYUJzQVdEWA==",
  API_KEY: "6LfY88EaAAAAAKjsd8wLV-3IBDd1ufx9HwY10a0W"
};

/***/ }),

/***/ 4690:
/*!**********************************************************!*\
  !*** ./src/app/models/home/notificaciones/filterDate.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterDateModel": () => (/* binding */ FilterDateModel)
/* harmony export */ });
class FilterDateModel {
  constructor(username, fi, ff, group_users, parent, from, rows) {
    this.username = username;
    this.fi = fi;
    this.ff = ff;
    this.group_users = group_users;
    this.parent = parent;
    this.from = from;
    this.rows = rows;
  }
}

/***/ }),

/***/ 4739:
/*!************************************************************!*\
  !*** ./src/app/models/home/notificaciones/filterReport.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterReport": () => (/* binding */ FilterReport)
/* harmony export */ });
/* harmony import */ var _filterDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterDate */ 4690);

class FilterReport extends _filterDate__WEBPACK_IMPORTED_MODULE_0__.FilterDateModel {
  constructor(name_file, name_user) {
    super();
    this.name_file = name_file;
    this.name_user = name_user;
  }
}

/***/ }),

/***/ 3799:
/*!*************************************************!*\
  !*** ./src/app/models/home/procesos/proceso.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Proceso": () => (/* binding */ Proceso)
/* harmony export */ });
class Proceso {
  constructor(depto, municipio, corporacion, despacho, demandante, demandado, radicacion, juzgado_origen, codigo23, proceso, suscriptor, etiqueta) {
    this.depto = depto;
    this.municipio = municipio;
    this.corporacion = corporacion;
    this.despacho = despacho;
    this.demandante = demandante;
    this.demandado = demandado;
    this.radicacion = radicacion;
    this.juzgado_origen = juzgado_origen;
    this.codigo23 = codigo23;
    this.proceso = proceso;
    this.suscriptor = suscriptor;
    this.etiqueta = etiqueta;
  }
}

/***/ }),

/***/ 8262:
/*!*********************************************************!*\
  !*** ./src/app/services/login/login-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginServiceService": () => (/* binding */ LoginServiceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class LoginServiceService {
  constructor(http) {
    this.http = http;
  }
  login(modelLogin) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'login', modelLogin);
  }
  enviarCorreoToken(user) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}login/sendCambio/${user}`);
  }
  validarToken(modelUp) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}login/validarCodigo/${modelUp.user}/${modelUp.token}`);
  }
  updatePass(modelUp) {
    return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}login/actualizaPassword`, modelUp);
  }
}
LoginServiceService.ɵfac = function LoginServiceService_Factory(t) {
  return new (t || LoginServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LoginServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoginServiceService,
  factory: LoginServiceService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map