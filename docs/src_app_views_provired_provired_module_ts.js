"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_provired_module_ts"],{

/***/ 4247:
/*!****************************************************!*\
  !*** ./src/app/guards/access-permissions.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessPermissionsGuard": () => (/* binding */ AccessPermissionsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils/session-storage.service */ 9721);


class AccessPermissionsGuard {
  constructor(session) {
    this.session = session;
  }
  canActivate() {
    if (this.getSession()) {
      return true;
    } else {
      return false;
    }
  }
  getSession() {
    let sessionActive = this.session.getSession();
    if (sessionActive) {
      if (sessionActive.tipousuario == 'S') {
        if (sessionActive.status == 200 && sessionActive.terminos_ok) {
          return true;
        } else {
          return false;
        }
      } else if (sessionActive.tipousuario == 'A') {
        if (sessionActive.status == 200) {
          return true;
        } else {
          alert('Es necesario iniciar sesion.');
          return false;
        }
      } else {
        if (sessionActive.status == 200) {
          return true;
        } else {
          alert('Es necesario iniciar sesion.');
          return false;
        }
      }
    } else {
      alert('Es necesario iniciar sesion.');
      return false;
    }
  }
}
AccessPermissionsGuard.ɵfac = function AccessPermissionsGuard_Factory(t) {
  return new (t || AccessPermissionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService));
};
AccessPermissionsGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AccessPermissionsGuard,
  factory: AccessPermissionsGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2276:
/*!***********************************************!*\
  !*** ./src/app/models/login/responseLogin.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseLogin": () => (/* binding */ ResponseLogin)
/* harmony export */ });
class ResponseLogin {
  constructor(user, status, redirect, tipousuario, terminos_ok, msg) {
    this.user = user;
    this.status = status;
    this.redirect = redirect;
    this.tipousuario = tipousuario;
    this.terminos_ok = terminos_ok;
    this.msg = msg;
  }
}

/***/ }),

/***/ 9721:
/*!***********************************************************!*\
  !*** ./src/app/services/utils/session-storage.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionStorageService": () => (/* binding */ SessionStorageService)
/* harmony export */ });
/* harmony import */ var src_app_models_login_responseLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/login/responseLogin */ 2276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SessionStorageService {
  constructor() {
    this.userLogin = new src_app_models_login_responseLogin__WEBPACK_IMPORTED_MODULE_0__.ResponseLogin();
  }
  setSession(user_login) {
    sessionStorage.setItem("session", JSON.stringify(user_login));
  }
  getSession() {
    this.userLogin = JSON.parse(sessionStorage.getItem("session"));
    return this.userLogin;
  }
  createStorage(key, data) {
    sessionStorage.setItem(key, data);
  }
  getStorage(key, tipo) {
    switch (tipo) {
      case 'string':
        return sessionStorage.getItem(key);
      case 'number':
        return parseInt(sessionStorage.getItem(key));
      case 'boolean':
        break;
      case 'json':
        return JSON.parse(sessionStorage.getItem(key));
      default:
        break;
    }
  }
  clearAllSession() {
    sessionStorage.clear();
  }
}
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) {
  return new (t || SessionStorageService)();
};
SessionStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SessionStorageService,
  factory: SessionStorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7299:
/*!***********************************************************!*\
  !*** ./src/app/views/provired/provired-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviredRoutingModule": () => (/* binding */ ProviredRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_guards_access_permissions_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/access-permissions.guard */ 4247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  redirectTo: 'access-provired',
  pathMatch: 'full'
}, {
  path: 'access-provired',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts-src_app_constans_token-const_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_provired_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 3866)).then(m => m.LoginModule)
}, {
  path: 'home-provired',
  canActivate: [src_app_guards_access_permissions_guard__WEBPACK_IMPORTED_MODULE_0__.AccessPermissionsGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts-src_app_constans_token-const_ts"), __webpack_require__.e("src_app_views_provired_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3404)).then(m => m.HomeModule)
}, {
  path: 'recuperar-contrasena',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts-src_app_constans_token-const_ts"), __webpack_require__.e("default-node_modules_ng-recaptcha_fesm2020_ng-recaptcha_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_provired_recuperar-contrasena_recuperar-contrasena_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recuperar-contrasena/recuperar-contrasena.module */ 9483)).then(m => m.RecuperarContrasenaModule)
}];
class ProviredRoutingModule {}
ProviredRoutingModule.ɵfac = function ProviredRoutingModule_Factory(t) {
  return new (t || ProviredRoutingModule)();
};
ProviredRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProviredRoutingModule
});
ProviredRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProviredRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3078:
/*!***************************************************!*\
  !*** ./src/app/views/provired/provired.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviredModule": () => (/* binding */ ProviredModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _provired_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provired-routing.module */ 7299);
/* harmony import */ var src_app_guards_access_permissions_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/access-permissions.guard */ 4247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ProviredModule {}
ProviredModule.ɵfac = function ProviredModule_Factory(t) {
  return new (t || ProviredModule)();
};
ProviredModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProviredModule
});
ProviredModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [src_app_guards_access_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.AccessPermissionsGuard],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _provired_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProviredRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProviredModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _provired_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProviredRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_provired_module_ts.js.map