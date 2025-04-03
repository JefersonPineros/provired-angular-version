"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_home_module_ts"],{

/***/ 2096:
/*!**************************************************************!*\
  !*** ./src/app/services/home/audiencia/audiencia.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudienciaService": () => (/* binding */ AudienciaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AudienciaService {
  constructor(http) {
    this.http = http;
  }
  getListAudiencias(consultar) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/getAudiencias', consultar).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      let status = res['status'];
      if (status == 200) {
        return res.data;
      } else {
        throw new Error('Se ha presentado un error');
      }
    }));
  }
  getAudiencia(id) {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/getAudiencias/' + id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      let status = res['status'];
      if (status == 200) {
        return res.data;
      } else {
        throw new Error('Se ha presentado un error');
      }
    }));
  }
  createAudiencia(createAudiencia) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/insertAudiencias', createAudiencia);
  }
  updateAudiencia(updateAudiencia) {
    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/updateAudiencias', updateAudiencia);
  }
  deleteAudiencia(eliminar) {
    console.log(eliminar);
    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/deleteAudiencias', {
      body: eliminar
    });
  }
  downloadReport(filterReport) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/exportExcel', filterReport, {
      headers
    });
  }
  downloadFile(url) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/xlsx',
      'Accept': 'application/xlsx',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(url, {
      headers,
      responseType: 'blob',
      observe: 'response'
    });
  }
}
AudienciaService.ɵfac = function AudienciaService_Factory(t) {
  return new (t || AudienciaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AudienciaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AudienciaService,
  factory: AudienciaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 669:
/*!***********************************************************************!*\
  !*** ./src/app/services/interceptor/user/user-interceptor.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInterceptorService": () => (/* binding */ UserInterceptorService)
/* harmony export */ });
/* harmony import */ var src_app_constans_token_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constans/token-const */ 3752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class UserInterceptorService {
  constructor() {}
  intercept(req, next) {
    return next.handle(this.addToken(req));
  }
  addToken(req) {
    const token = src_app_constans_token_const__WEBPACK_IMPORTED_MODULE_0__.Token.TOKEN_AUTHORIZATION.TOKEN;
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
UserInterceptorService.ɵfac = function UserInterceptorService_Factory(t) {
  return new (t || UserInterceptorService)();
};
UserInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserInterceptorService,
  factory: UserInterceptorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 58:
/*!************************************************************!*\
  !*** ./src/app/views/provired/home/home-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-red'
  }, {
    path: 'inicio',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_date-picker_date-picker_module_ts-src_app_models_audiencias_audien-f8912c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_provired_home_audiencia_audiencia_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./audiencia/audiencia.module */ 9661)).then(m => m.AudienciaModule)
  }, {
    path: 'page-red',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_provired_home_page-red_page-red_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page-red/page-red.module */ 594)).then(m => m.PageRedModule)
  }, {
    path: 'notificaciones',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_date-picker_date-picker_module_ts-src_app_models_audiencias_audien-f8912c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_provired_home_notificaciones_notificaciones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notificaciones/notificaciones.module */ 5981)).then(m => m.NotificacionesModule)
  }, {
    path: 'reportes',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_date-picker_date-picker_module_ts-src_app_models_audiencias_audien-f8912c"), __webpack_require__.e("default-node_modules_ng-recaptcha_fesm2020_ng-recaptcha_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_provired_home_reportes_reportes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reportes/reportes.module */ 1446)).then(m => m.ReportesModule)
  }, {
    path: 'procesos',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_provired_home_procesos_procesos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./procesos/procesos.module */ 8753)).then(m => m.ProcesosModule)
  }, {
    path: 'email_despachos',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_provired_home_email-despachos_email-despachos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./email-despachos/email-despachos.module */ 2650)).then(m => m.EmailDespachosModule)
  }, {
    path: 'documentos',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_provired_home_documentos_documentos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./documentos/documentos.module */ 4919)).then(m => m.DocumentosModule)
  }, {
    path: 'usuarios',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-recaptcha_fesm2020_ng-recaptcha_mjs"), __webpack_require__.e("src_app_views_provired_home_usuarios_usuarios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./usuarios/usuarios.module */ 8451)).then(m => m.UsuariosModule)
  }]
}];
class HomeRoutingModule {}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};
HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3404:
/*!****************************************************!*\
  !*** ./src/app/views/provired/home/home.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2235);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 58);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_services_utils_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/app.menu.service */ 3651);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var src_app_services_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/menu/menu-service.service */ 776);
/* harmony import */ var src_app_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user-service.service */ 798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_interceptor_user_user_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/interceptor/user/user-interceptor.service */ 669);
/* harmony import */ var src_app_services_logOut_log_out_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/logOut/log-out.service */ 9215);
/* harmony import */ var src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/home/audiencia/audiencia.service */ 2096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/menu-component/menu-component.component */ 7943);
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/topbar/topbar.component */ 1247);
/* harmony import */ var _components_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/action-bar/action-bar.component */ 4084);
/* harmony import */ var _components_help_component_help_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/help-component/help-component.component */ 3898);





















class HomeModule {}
HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};
HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: HomeModule,
  bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [src_app_services_utils_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.MenuService, src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbService, src_app_services_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_6__.MenuServiceService, src_app_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_7__.UserServiceService, src_app_services_logOut_log_out_service__WEBPACK_IMPORTED_MODULE_9__.LogOutService, src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_10__.AudienciaService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
    useClass: src_app_services_interceptor_user_user_interceptor_service__WEBPACK_IMPORTED_MODULE_8__.UserInterceptorService,
    multi: true
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.MenuComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TopbarModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ActionBarModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.HelpComponentModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.MenuComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.TopbarModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ActionBarModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.HelpComponentModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterOutlet, _components_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponentComponent, _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__.TopbarComponent, _components_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_13__.ActionBarComponent, _components_help_component_help_component_component__WEBPACK_IMPORTED_MODULE_14__.HelpComponentComponent], []);

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_home_module_ts.js.map