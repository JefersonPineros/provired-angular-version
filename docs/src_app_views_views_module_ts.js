"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_views_module_ts"],{

/***/ 8291:
/*!***********************************************!*\
  !*** ./src/app/views/views-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewsRoutingModule": () => (/* binding */ ViewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views.component */ 6963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _views_component__WEBPACK_IMPORTED_MODULE_0__.ViewsComponent,
  children: [{
    path: '',
    redirectTo: 'provired',
    pathMatch: 'full'
  }, {
    path: 'provired',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_provired_provired_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./provired/provired.module */ 3078)).then(m => m.ProviredModule)
  }]
}];
class ViewsRoutingModule {}
ViewsRoutingModule.ɵfac = function ViewsRoutingModule_Factory(t) {
  return new (t || ViewsRoutingModule)();
};
ViewsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ViewsRoutingModule
});
ViewsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6963:
/*!******************************************!*\
  !*** ./src/app/views/views.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewsComponent": () => (/* binding */ ViewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ViewsComponent {}
ViewsComponent.ɵfac = function ViewsComponent_Factory(t) {
  return new (t || ViewsComponent)();
};
ViewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewsComponent,
  selectors: [["app-views"]],
  decls: 1,
  vars: 0,
  template: function ViewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5397:
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewsModule": () => (/* binding */ ViewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views.component */ 6963);
/* harmony import */ var _views_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views-routing.module */ 8291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ViewsModule {}
ViewsModule.ɵfac = function ViewsModule_Factory(t) {
  return new (t || ViewsModule)();
};
ViewsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ViewsModule
});
ViewsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _views_routing_module__WEBPACK_IMPORTED_MODULE_1__.ViewsRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewsModule, {
    declarations: [_views_component__WEBPACK_IMPORTED_MODULE_0__.ViewsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _views_routing_module__WEBPACK_IMPORTED_MODULE_1__.ViewsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_views_module_ts.js.map