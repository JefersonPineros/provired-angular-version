"use strict";
(self["webpackChunkprovired_angular_version"] = self["webpackChunkprovired_angular_version"] || []).push([["src_app_views_provired_home_reportes_reportes_module_ts"],{

/***/ 9862:
/*!***********************************************************!*\
  !*** ./src/app/models/home/procesos/FilterSolicitudes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterSolicitudes": () => (/* binding */ FilterSolicitudes)
/* harmony export */ });
/* harmony import */ var _historialProcesosFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historialProcesosFilter */ 5172);

class FilterSolicitudes extends _historialProcesosFilter__WEBPACK_IMPORTED_MODULE_0__.HistorialProcesosModel {
  constructor(username, name_user, name_file) {
    super();
    this.username = username;
    this.name_user = name_user;
    this.name_file = name_file;
  }
}

/***/ }),

/***/ 8418:
/*!*********************************************************!*\
  !*** ./src/app/models/home/procesos/captchaSendData.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptchaSendDataModel": () => (/* binding */ CaptchaSendDataModel)
/* harmony export */ });
class CaptchaSendDataModel {
  constructor(id, data, username, group_users, parent, name_user, user_transfer, captcha) {
    this.id = id;
    this.data = data;
    this.username = username;
    this.group_users = group_users;
    this.parent = parent;
    this.name_user = name_user;
    this.user_transfer = user_transfer;
    this.captcha = captcha;
  }
}

/***/ }),

/***/ 1675:
/*!********************************************************!*\
  !*** ./src/app/models/home/procesos/filterProcesos.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterProceso": () => (/* binding */ FilterProceso)
/* harmony export */ });
class FilterProceso {
  constructor(username, name_user, name_file, group_users, parent, demandante_demandado, radicacion, etiqueta, from, rows, despacho) {
    this.username = username;
    this.name_user = name_user;
    this.name_file = name_file;
    this.group_users = group_users;
    this.parent = parent;
    this.demandante_demandado = demandante_demandado;
    this.radicacion = radicacion;
    this.etiqueta = etiqueta;
    this.from = from;
    this.rows = rows;
    this.despacho = despacho;
  }
}

/***/ }),

/***/ 7186:
/*!***********************************************************!*\
  !*** ./src/app/models/home/procesos/historialProcesos.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialModel": () => (/* binding */ HistorialModel)
/* harmony export */ });
class HistorialModel {
  constructor(radicacion, proceso, demandante, demandado, codigo_23, dp, despacho, municipio, idDesp, expediente_digital, etiqueta_suscriptor) {
    this.radicacion = radicacion;
    this.proceso = proceso;
    this.demandante = demandante;
    this.demandado = demandado;
    this.codigo_23 = codigo_23;
    this.dp = dp;
    this.despacho = despacho;
    this.municipio = municipio;
    this.idDesp = idDesp;
    this.expediente_digital = expediente_digital;
    this.etiqueta_suscriptor = etiqueta_suscriptor;
  }
}

/***/ }),

/***/ 6205:
/*!*******************************************************!*\
  !*** ./src/app/models/home/procesos/procesoActivo.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesoActivo": () => (/* binding */ ProcesoActivo)
/* harmony export */ });
/* harmony import */ var _proceso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proceso */ 3799);

class ProcesoActivo extends _proceso__WEBPACK_IMPORTED_MODULE_0__.Proceso {
  constructor(usuario, fecha_registro, codigo_23, etiqueta_suscriptor, expediente_digital, name_ciudad, name_despacho) {
    super();
    this.usuario = usuario;
    this.fecha_registro = fecha_registro;
    this.codigo_23 = codigo_23;
    this.etiqueta_suscriptor = etiqueta_suscriptor;
    this.expediente_digital = expediente_digital;
    this.name_ciudad = name_ciudad;
    this.name_despacho = name_despacho;
  }
}

/***/ }),

/***/ 7552:
/*!*******************************************************!*\
  !*** ./src/app/models/home/procesos/updateProceso.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProceso": () => (/* binding */ UpdateProceso)
/* harmony export */ });
/* harmony import */ var _proceso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proceso */ 3799);

class UpdateProceso extends _proceso__WEBPACK_IMPORTED_MODULE_0__.Proceso {
  constructor(etiqueta_suscriptor, expediente_digital, username, codigo_23) {
    super();
    this.etiqueta_suscriptor = etiqueta_suscriptor;
    this.expediente_digital = expediente_digital;
    this.username = username;
    this.codigo_23 = codigo_23;
  }
}

/***/ }),

/***/ 288:
/*!*********************************************************!*\
  !*** ./src/app/models/home/reports/dataInfoProcesal.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataInfoProcesal": () => (/* binding */ DataInfoProcesal)
/* harmony export */ });
class DataInfoProcesal {
  constructor(id, despacho, radicacion, usuario_registra, fecha_registro, fecha_radicacion, abogado_coordinador, abogado_externo, adjuntar_f46, demandados, tiene_grupo_riesgo, datos_contacto_demandado, obligaciones_judiciales, clase_proceso, juzgado_radicado, indicador_avance_procesal, etapa_procesal, garantias, medidas_cautelares, avaluos, fecha_valor_liquidacion, fondos, subrogo, riesgo_juridico, expectativa_recuperacion_procentaje, expectativa_recuperacion_tiempo, existencia_titulos, honorarios_pendientes, pacto_honorarios, new_cmp, new_cmp_table) {
    this.id = id;
    this.despacho = despacho;
    this.radicacion = radicacion;
    this.usuario_registra = usuario_registra;
    this.fecha_registro = fecha_registro;
    this.fecha_radicacion = fecha_radicacion;
    this.abogado_coordinador = abogado_coordinador;
    this.abogado_externo = abogado_externo;
    this.adjuntar_f46 = adjuntar_f46;
    this.demandados = demandados;
    this.tiene_grupo_riesgo = tiene_grupo_riesgo;
    this.datos_contacto_demandado = datos_contacto_demandado;
    this.obligaciones_judiciales = obligaciones_judiciales;
    this.clase_proceso = clase_proceso;
    this.juzgado_radicado = juzgado_radicado;
    this.indicador_avance_procesal = indicador_avance_procesal;
    this.etapa_procesal = etapa_procesal;
    this.garantias = garantias;
    this.medidas_cautelares = medidas_cautelares;
    this.avaluos = avaluos;
    this.fecha_valor_liquidacion = fecha_valor_liquidacion;
    this.fondos = fondos;
    this.subrogo = subrogo;
    this.riesgo_juridico = riesgo_juridico;
    this.expectativa_recuperacion_procentaje = expectativa_recuperacion_procentaje;
    this.expectativa_recuperacion_tiempo = expectativa_recuperacion_tiempo;
    this.existencia_titulos = existencia_titulos;
    this.honorarios_pendientes = honorarios_pendientes;
    this.pacto_honorarios = pacto_honorarios;
    this.new_cmp = new_cmp;
    this.new_cmp_table = new_cmp_table;
  }
}

/***/ }),

/***/ 5566:
/*!******************************************************!*\
  !*** ./src/app/models/home/reports/filterGeneral.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterGeneral": () => (/* binding */ FilterGeneral)
/* harmony export */ });
class FilterGeneral {
  constructor(group_users, parent, demandante_demandado, radicacion, despacho, etiqueta, from, rows) {
    this.group_users = group_users;
    this.parent = parent;
    this.demandante_demandado = demandante_demandado;
    this.radicacion = radicacion;
    this.despacho = despacho;
    this.etiqueta = etiqueta;
    this.from = from;
    this.rows = rows;
  }
}

/***/ }),

/***/ 4698:
/*!********************************************************!*\
  !*** ./src/app/models/home/reports/informeProcesal.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformeProcesal": () => (/* binding */ InformeProcesal)
/* harmony export */ });
class InformeProcesal {
  constructor(status, cmpInfoProcesal, data, multiData, despacho, radicado, usuario) {
    this.status = status;
    this.cmpInfoProcesal = cmpInfoProcesal;
    this.data = data;
    this.multiData = multiData;
    this.despacho = despacho;
    this.radicado = radicado;
    this.usuario = usuario;
  }
}

/***/ }),

/***/ 9752:
/*!**************************************************!*\
  !*** ./src/app/models/home/reports/multiData.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiData": () => (/* binding */ MultiData)
/* harmony export */ });
class MultiData {
  constructor(id, id_informe_procesal, id_cmp_informe_procesal, value, usuario_registra, fecha_registro) {
    this.id = id;
    this.id_informe_procesal = id_informe_procesal;
    this.id_cmp_informe_procesal = id_cmp_informe_procesal;
    this.value = value;
    this.usuario_registra = usuario_registra;
    this.fecha_registro = fecha_registro;
  }
}

/***/ }),

/***/ 7069:
/*!****************************************************!*\
  !*** ./src/app/models/home/reports/solicitudes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesModel": () => (/* binding */ SolicitudesModel)
/* harmony export */ });
class SolicitudesModel {
  constructor(sp_id_proceso, sp_id_depto, sp_id_mun, sp_id_corporacion, sp_id_despacho, sp_demandante, sp_demandado, sp_radicacion, sp_juzgado, sp_rad_23, sp_tipo_proceso, sp_sus_ingreso, sp_operadores, sp_fecha_ingreso, sp_ingreso_monolegal, sp_ingreso_misprocesos, sp_descripcion, sp_tipo, sp_id_planilla, sp_etiqueta, sp_tramite, fecha, nameTipo, suscriptor, depto, mun, despacho, nameSuscriptor) {
    this.sp_id_proceso = sp_id_proceso;
    this.sp_id_depto = sp_id_depto;
    this.sp_id_mun = sp_id_mun;
    this.sp_id_corporacion = sp_id_corporacion;
    this.sp_id_despacho = sp_id_despacho;
    this.sp_demandante = sp_demandante;
    this.sp_demandado = sp_demandado;
    this.sp_radicacion = sp_radicacion;
    this.sp_juzgado = sp_juzgado;
    this.sp_rad_23 = sp_rad_23;
    this.sp_tipo_proceso = sp_tipo_proceso;
    this.sp_sus_ingreso = sp_sus_ingreso;
    this.sp_operadores = sp_operadores;
    this.sp_fecha_ingreso = sp_fecha_ingreso;
    this.sp_ingreso_monolegal = sp_ingreso_monolegal;
    this.sp_ingreso_misprocesos = sp_ingreso_misprocesos;
    this.sp_descripcion = sp_descripcion;
    this.sp_tipo = sp_tipo;
    this.sp_id_planilla = sp_id_planilla;
    this.sp_etiqueta = sp_etiqueta;
    this.sp_tramite = sp_tramite;
    this.fecha = fecha;
    this.nameTipo = nameTipo;
    this.suscriptor = suscriptor;
    this.depto = depto;
    this.mun = mun;
    this.despacho = despacho;
    this.nameSuscriptor = nameSuscriptor;
  }
}

/***/ }),

/***/ 7820:
/*!********************************************************!*\
  !*** ./src/app/models/home/reports/updateSolicitud.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSolicitud": () => (/* binding */ UpdateSolicitud)
/* harmony export */ });
class UpdateSolicitud {
  constructor(sp_id_proceso, sp_radicacion, sp_rad_23) {
    this.sp_id_proceso = sp_id_proceso;
    this.sp_radicacion = sp_radicacion;
    this.sp_rad_23 = sp_rad_23;
  }
}

/***/ }),

/***/ 5132:
/*!**************************************************!*\
  !*** ./src/app/models/home/utils/sendCaptcha.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendCaptcha": () => (/* binding */ SendCaptcha)
/* harmony export */ });
class SendCaptcha {
  constructor(id, captcha) {
    this.id = id;
    this.captcha = captcha;
  }
}

/***/ }),

/***/ 5286:
/*!***************************************************************!*\
  !*** ./src/app/services/home/reportes/historial-actuación.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialActuacion": () => (/* binding */ HistorialActuacion)
/* harmony export */ });
class HistorialActuacion {
  constructor(idplanilla, idDesp, radicacion, idNot, proceso, demandante, demandado, descripcion, fechapublicacion, departamento, municipio, corporacion, despacho_a, imagen, ubicacion, despacho, notificacion, auto, ruta_auto) {
    this.idplanilla = idplanilla;
    this.idDesp = idDesp;
    this.radicacion = radicacion;
    this.idNot = idNot;
    this.proceso = proceso;
    this.demandante = demandante;
    this.demandado = demandado;
    this.descripcion = descripcion;
    this.fechapublicacion = fechapublicacion;
    this.departamento = departamento;
    this.municipio = municipio;
    this.corporacion = corporacion;
    this.despacho_a = despacho_a;
    this.imagen = imagen;
    this.ubicacion = ubicacion;
    this.despacho = despacho;
    this.notificacion = notificacion;
    this.auto = auto;
    this.ruta_auto = ruta_auto;
  }
}

/***/ }),

/***/ 1934:
/*!**********************************************************************!*\
  !*** ./src/app/services/home/reportes/historial-procesos.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialProcesosService": () => (/* binding */ HistorialProcesosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class HistorialProcesosService {
  constructor(http) {
    this.http = http;
  }
  filterHistorial(filter) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}historialProcesos`, filter);
  }
  getActuacion(filter) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}historialProcesos/actuacion`, filter);
  }
}
HistorialProcesosService.ɵfac = function HistorialProcesosService_Factory(t) {
  return new (t || HistorialProcesosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
HistorialProcesosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HistorialProcesosService,
  factory: HistorialProcesosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9024:
/*!********************************************************************!*\
  !*** ./src/app/services/home/reportes/impulso-procesal.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpulsoProcesalService": () => (/* binding */ ImpulsoProcesalService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ImpulsoProcesalService {
  constructor(http) {
    this.http = http;
  }
  getImpulsoProcesal(filter) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}impulsoProcesal`, filter);
  }
  generateDoc(filterSolicitudes) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}impulsoProcesal/exportExcel`, filterSolicitudes);
  }
}
ImpulsoProcesalService.ɵfac = function ImpulsoProcesalService_Factory(t) {
  return new (t || ImpulsoProcesalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ImpulsoProcesalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ImpulsoProcesalService,
  factory: ImpulsoProcesalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6438:
/*!********************************************************************!*\
  !*** ./src/app/services/home/reportes/procesos-activos.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosActivosService": () => (/* binding */ ProcesosActivosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ProcesosActivosService {
  constructor(http) {
    this.http = http;
  }
  getListProcesoActivo(filterActivo) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosActivos', filterActivo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      let status = res['status'];
      if (status = 200) {
        return res;
      }
    }));
  }
  updateProcesosActivo(updateActivo) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'audiencias/insertAudiencias', updateActivo);
  }
  deleteProcesoActivo(deleteId) {
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: deleteId
    };
    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosActivos/delete', httpOptions);
  }
  getStructureInfoProcesal(filter) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosActivos/informeProcesal', filter);
  }
  getReportActivos(filterActivo) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosActivos/exportExcel', filterActivo);
  }
  getReportInfoProcesal(filterActivo) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosActivos/exportExcelInformeProcesal', filterActivo);
  }
  insertInformeProcesal(informe) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}listadoProcesosActivos/insertInformeProcesal`, informe);
  }
}
ProcesosActivosService.ɵfac = function ProcesosActivosService_Factory(t) {
  return new (t || ProcesosActivosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ProcesosActivosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProcesosActivosService,
  factory: ProcesosActivosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4704:
/*!**********************************************************************!*\
  !*** ./src/app/services/home/reportes/procesos-generales.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosGeneralesService": () => (/* binding */ ProcesosGeneralesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProcesosGeneralesService {
  constructor(http) {
    this.http = http;
  }
  getListProcesos(filterProceso) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosGenerales', filterProceso).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      let status = res["status"];
      if (status = 200) {
        return res;
      } else {
        throw new Error('Se ha presentado un error');
      }
    }));
  }
  updateProceso(upProceso) {
    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosGenerales/update', upProceso);
  }
  getReportListProcesos(filterProceso) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'listadoProcesosGenerales/exportExcel', filterProceso);
  }
}
ProcesosGeneralesService.ɵfac = function ProcesosGeneralesService_Factory(t) {
  return new (t || ProcesosGeneralesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ProcesosGeneralesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProcesosGeneralesService,
  factory: ProcesosGeneralesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9067:
/*!***************************************************************!*\
  !*** ./src/app/services/home/reportes/solicitudes.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesService": () => (/* binding */ SolicitudesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class SolicitudesService {
  constructor(http) {
    this.http = http;
  }
  getListSolicitudes(filter) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}misSolicitudes`, filter);
  }
  updateSolicitud(data) {
    return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}misSolicitudes/update`, data);
  }
  getReportListProcesos(filterSolicitudes) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'misSolicitudes/exportExcel', filterSolicitudes);
  }
}
SolicitudesService.ɵfac = function SolicitudesService_Factory(t) {
  return new (t || SolicitudesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SolicitudesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SolicitudesService,
  factory: SolicitudesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9625:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/consulta-procesal/consulta-procesal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaProcesalComponent": () => (/* binding */ ConsultaProcesalComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_home_procesos_FilterSolicitudes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/FilterSolicitudes */ 9862);
/* harmony import */ var src_app_models_home_procesos_historialProcesos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/home/procesos/historialProcesos */ 7186);
/* harmony import */ var src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/home/procesos/historialProcesosFilter */ 5172);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var src_app_services_home_reportes_historial_actuaci_n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/home/reportes/historial-actuación */ 5286);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var src_app_services_home_reportes_impulso_procesal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/home/reportes/impulso-procesal.service */ 9024);
/* harmony import */ var src_app_services_home_reportes_historial_procesos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/home/reportes/historial-procesos.service */ 1934);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/text-area/text-area.component */ 7408);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/filters-dinamics/filters-dinamics.component */ 8586);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ 9129);























function ConsultaProcesalComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
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
function ConsultaProcesalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 14)(1, "div", 1)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "app-side-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](2, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](1, _c1)));
  }
}
function ConsultaProcesalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Consulta impulso procesal");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
}
function ConsultaProcesalComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, " Esta opci\u00F3n le permite consultar los procesos que requiera para impulso procesal. Por ejemplo, al seleccionar el rango Mayor a 61 d\u00EDas, el sistema le emite el listado de procesos cuya \u00FAltima actuaci\u00F3n registrada en nuestra plataforma tiene una fecha superior a 61 d\u00EDas calendario. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 1)(5, "app-filters-dinamics", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("eventFilter", function ConsultaProcesalComponent_ng_template_10_Template_app_filters_dinamics_eventFilter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r7.filtrarImpulso($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showRadicacion", false)("showSuscriptores", false);
  }
}
function ConsultaProcesalComponent_div_11_ng_template_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConsultaProcesalComponent_div_11_ng_template_3_ng_template_6_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13);
      const rowData_r11 = restoredCtx.elemento;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r12.consultarActuacion(rowData_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r11 = ctx.elemento;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](rowData_r11["fecha_ultima_actuacion"]);
  }
}
const _c3 = function () {
  return {
    field: "name_ciudad",
    header: "Ciudad"
  };
};
const _c4 = function () {
  return {
    field: "name_despacho",
    header: "Despacho"
  };
};
const _c5 = function () {
  return {
    field: "radicacion",
    header: "Radicaci\u00F3n"
  };
};
const _c6 = function () {
  return {
    field: "proceso",
    header: "Tipo proceso"
  };
};
const _c7 = function () {
  return {
    field: "demandante",
    header: "Demandante"
  };
};
const _c8 = function () {
  return {
    field: "demandado",
    header: "Demandado"
  };
};
const _c9 = function () {
  return {
    field: "codigo_23",
    header: "23 Digitos"
  };
};
const _c10 = function (a0, a1, a2, a3, a4, a5, a6) {
  return [a0, a1, a2, a3, a4, a5, a6];
};
function ConsultaProcesalComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 2)(2, "app-button-component", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("eventEmiter", function ConsultaProcesalComponent_div_11_ng_template_3_Template_app_button_component_eventEmiter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r14.downloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 19)(4, "div", 1)(5, "app-tabla-component", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onChangePage", function ConsultaProcesalComponent_div_11_ng_template_3_Template_app_tabla_component_onChangePage_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r16.filtrarImpulso(undefined, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConsultaProcesalComponent_div_11_ng_template_3_ng_template_6_Template, 3, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction7"](16, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](9, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](10, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](11, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](12, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](13, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](14, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](15, _c9)))("data", ctx_r9.listImpulso)("totalRecords", ctx_r9.totalItems)("showTotalRecords", true)("paginador", true)("lazy", true)("actionsRightShow", true);
  }
}
function ConsultaProcesalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ConsultaProcesalComponent_div_11_ng_template_3_Template, 7, 24, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
}
function ConsultaProcesalComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Ultimas actuaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
}
function ConsultaProcesalComponent_ng_template_14_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-button-component", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("eventEmiter", function ConsultaProcesalComponent_ng_template_14_div_0_ng_template_3_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24);
      const rowData_r22 = restoredCtx.elemento;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r23.showDescription(rowData_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
function ConsultaProcesalComponent_ng_template_14_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-button-component", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("eventEmiter", function ConsultaProcesalComponent_ng_template_14_div_0_ng_template_4_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const rowData_r25 = restoredCtx.elemento;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r26.downloadDoc(rowData_r25.ruta_auto));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowData_r25 = ctx.elemento;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("iconClass", "pi ", rowData_r25.ruta_auto !== "" ? "pi-file-pdf" : "pi-times", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
const _c11 = function () {
  return {
    field: "despacho",
    header: "Despacho"
  };
};
const _c12 = function () {
  return {
    field: "notificacion",
    header: "Notificaci\u00F3n"
  };
};
const _c13 = function () {
  return {
    field: "proceso",
    header: "Proceso"
  };
};
const _c14 = function () {
  return {
    field: "descripcion",
    header: "Descripci\u00F3n"
  };
};
const _c15 = function () {
  return {
    field: "fechapublicacion",
    header: "Publicaci\u00F3n",
    isFecha: true
  };
};
const _c16 = function (a0, a1, a2, a3, a4, a5, a6, a7) {
  return [a0, a1, a2, a3, a4, a5, a6, a7];
};
function ConsultaProcesalComponent_ng_template_14_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 26)(1, "div", 1)(2, "app-tabla-component", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onChangePage", function ConsultaProcesalComponent_ng_template_14_div_0_Template_app_tabla_component_onChangePage_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r28.consultarActuacion(undefined, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ConsultaProcesalComponent_ng_template_14_div_0_ng_template_3_Template, 3, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ConsultaProcesalComponent_ng_template_14_div_0_ng_template_4_Template, 3, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction8"](16, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](8, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](9, _c12), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](10, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](11, _c13), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](12, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](13, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](14, _c14), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](15, _c15)))("data", ctx_r17.listActuacion)("totalRecords", ctx_r17.totalRows)("actionsRightShow", true)("actionsShow", true)("paginador", true)("lazy", true)("rows", ctx_r17.generalRows);
  }
}
function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Consulta detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 26)(5, "div", 33)(6, "input-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r30.actuacionSelected.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 33)(8, "input-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r32.actuacionSelected.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 26)(10, "div", 33)(11, "input-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r33.actuacionSelected.notificacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 33)(13, "input-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r34.actuacionSelected.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 26)(15, "div", 33)(16, "app-text-area", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_app_text_area_modelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r35.actuacionSelected.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 33)(18, "app-text-area", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_app_text_area_modelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r36.actuacionSelected.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 26)(20, "div", 1)(21, "app-text-area", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_app_text_area_modelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r37.actuacionSelected.descripcion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 26)(23, "div", 33)(24, "input-text", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r38.actuacionSelected.fechapublicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 33)(26, "input-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("modelChange", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r39.actuacionSelected.imagen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 0)(28, "div", 32)(29, "app-button-component", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("eventEmiter", function ConsultaProcesalComponent_ng_template_14_ng_template_1_Template_app_button_component_eventEmiter_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r40.showDescription());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.despacho)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.radicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.notificacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.proceso)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.demandante)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.demandado)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.descripcion)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.fechapublicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("model", ctx_r19.actuacionSelected.imagen)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icon", true);
  }
}
function ConsultaProcesalComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, ConsultaProcesalComponent_ng_template_14_div_0_Template, 5, 25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConsultaProcesalComponent_ng_template_14_ng_template_1_Template, 30, 19, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r6.showDataDescription)("ngIfElse", _r18);
  }
}
class ConsultaProcesalComponent {
  constructor(breadCrumService, session, impulsoService, historialService, spinner, message) {
    this.breadCrumService = breadCrumService;
    this.session = session;
    this.impulsoService = impulsoService;
    this.historialService = historialService;
    this.spinner = spinner;
    this.message = message;
    this.filterImpulso = new src_app_models_home_procesos_FilterSolicitudes__WEBPACK_IMPORTED_MODULE_0__.FilterSolicitudes();
    this.listImpulso = new Array();
    this.rowsFilter = 10;
    this.totalItems = 0;
    this.urlFinal = '';
    this.showModal = false;
    this.showDataDescription = false;
    this.itemSelected = new src_app_models_home_procesos_historialProcesos__WEBPACK_IMPORTED_MODULE_1__.HistorialModel();
    this.actuacionSelected = new src_app_services_home_reportes_historial_actuaci_n__WEBPACK_IMPORTED_MODULE_4__.HistorialActuacion();
    this.filter = new src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_2__.HistorialProcesosModel();
    this.listActuacion = new Array();
    this.totalRows = 0;
    this.generalRows = 30;
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Reportes'
    }, {
      label: 'Consulta impulso procesal'
    }]);
    let ses = this.session.getStorage('user', 'json');
    this.filterImpulso.group_users = ses.data.group_users;
    this.filterImpulso.parent = ses.data.parent;
    this.filterImpulso.from = 0;
    this.filterImpulso.rows = this.rowsFilter;
    this.impulsoService.getImpulsoProcesal(this.filterImpulso).subscribe({
      next: res => {
        this.listImpulso = res.data;
        this.totalItems = res.count_rows;
        console.log(this.listImpulso);
      },
      error: error => {
        console.log(error.error.msg);
      }
    });
  }
  filtrarImpulso(event, page) {
    this.spinner.show();
    if (event) {
      this.filterImpulso = event;
      let ses = this.session.getStorage('user', 'json');
      this.filterImpulso.group_users = ses.data.group_users;
      this.filterImpulso.parent = ses.data.parent;
    }
    if (page) {
      this.filterImpulso.from = page.first;
      this.filterImpulso.rows = this.rowsFilter;
    } else {
      this.filterImpulso.from = 0;
      this.filterImpulso.rows = this.rowsFilter;
    }
    this.impulsoService.getImpulsoProcesal(this.filterImpulso).subscribe({
      next: res => {
        this.spinner.hide();
        this.listImpulso = res.data;
        this.totalItems = res.count_rows;
      },
      error: error => {
        this.spinner.hide();
        console.log(error.error.msg);
      }
    });
  }
  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');
    this.filterImpulso.username = session.data.username;
    this.filterImpulso.name_user = session.data.nombre;
    this.filterImpulso.name_file = 'Impulso_procesal';
    this.filterImpulso.group_users = session.data.group_users;
    this.filterImpulso.parent = session.data.parent;
    this.impulsoService.generateDoc(this.filterImpulso).subscribe({
      next: res => {
        if (res.status == 200) {
          let listUrl = res.url.split('/');
          this.urlFinal = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseDocs + res.url;
          this.spinner.hide();
          fetch(this.urlFinal).then(response => {
            console.log(response);
            return response.blob();
          }).then(blod => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blod);
            link.download = listUrl[2];
            link.click();
          }).catch(console.error).then(error => {
            if (error != undefined) {
              let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Se ha presentado un error`, `No fue posible descargar el documento, estamos trabajando para resolver este error`);
              this.message.add(message_model);
            }
          });
        } else {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Error ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  consultarActuacion(event, page) {
    this.showDataDescription = false;
    let ses = this.session.getStorage('user', 'json');
    this.itemSelected = event;
    if (event) {
      this.filter = new src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_2__.HistorialProcesosModel();
      this.filter.group_users = ses.data.group_users;
      this.filter.parent = ses.data.parent;
      this.filter.despacho = this.itemSelected.despacho;
      this.filter.radicacion = this.itemSelected.radicacion;
      this.filter.codigo_23 = this.itemSelected.codigo_23;
    }
    if (page) {
      this.filter.from = page.first;
    } else {
      this.filter.from = 0;
    }
    this.filter.rows = this.generalRows;
    this.historialService.getActuacion(this.filter).subscribe({
      next: res => {
        this.listActuacion = res.data;
        this.totalRows = res.count_rows;
        console.log(this.listActuacion);
      },
      error: error => {
        console.log(error);
      }
    });
    this.showModal = true;
  }
  showDescription(event) {
    console.log(event);
    if (event) {
      this.actuacionSelected = event;
    }
    if (this.showDataDescription) {
      this.showDataDescription = false;
    } else {
      this.showDataDescription = true;
    }
  }
  downloadDoc(url) {
    if (url) {
      let finalUrl = url.substring(0);
      window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseDocs + '/autos/' + finalUrl);
    }
  }
}
ConsultaProcesalComponent.ɵfac = function ConsultaProcesalComponent_Factory(t) {
  return new (t || ConsultaProcesalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_7__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_home_reportes_impulso_procesal_service__WEBPACK_IMPORTED_MODULE_8__.ImpulsoProcesalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_home_reportes_historial_procesos_service__WEBPACK_IMPORTED_MODULE_9__.HistorialProcesosService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_20__.MessageService));
};
ConsultaProcesalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: ConsultaProcesalComponent,
  selectors: [["app-consulta-procesal"]],
  decls: 19,
  vars: 4,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["class", "grid", 4, "ngIf"], ["tamanio", "90vw", 3, "maximizable", "visible", "closeModal"], ["pTemplate", "title"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color", "mt-3"], [1, "grid", "p-fluit"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "p-3", "text-alert"], [3, "showRadicacion", "showSuscriptores", "eventFilter"], ["nameButton", "Generar a excel reporte impulso procesal", "messageTooltip", "Detalle", "iconClass", "pi pi-file-excel", "clase", "p-button-rounded p-button-success p-button-outlined", 3, "icon", "showTooltip", "eventEmiter"], [1, "grid", "p-fluid", "p-2"], ["nameActionsRight", "Fecha de Registro", 3, "cols", "data", "totalRecords", "showTotalRecords", "paginador", "lazy", "actionsRightShow", "onChangePage"], ["pTemplate", "actions-left"], [1, "link-actuacion"], [3, "click"], ["class", "grid p-2", 4, "ngIf", "ngIfElse"], ["showDecriptionForm", ""], [1, "grid", "p-2"], ["nameActionsRight", "Auto", "nameActionsLeft", "Detalle", "paginationPosition", "both", 3, "cols", "data", "totalRecords", "actionsRightShow", "actionsShow", "paginador", "lazy", "rows", "onChangePage"], ["pTemplate", "actions"], ["messageTooltip", "Consultar detalle", "iconClass", "pi pi-eye", "clase", "p-button-rounded p-button-primary p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["messageTooltip", "Autos", "clase", "p-button-rounded p-button-danger p-button-text", 3, "icon", "showTooltip", "iconClass", "eventEmiter"], [1, "grid", "p-fluid"], [1, "col-12", "p-2"], [1, "col-6"], ["placeHolder", "Despacho", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Radicaci\u00F3n", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Notificaci\u00F3n", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Proceso", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["styleInput", "help-text", "placeholder", "Demandante", "heightTamanio", "100px", 3, "model", "disabled", "modelChange"], ["styleInput", "help-text", "placeholder", "Demandado", "heightTamanio", "100px", 3, "model", "disabled", "modelChange"], ["placeHolder", "Fecha publicaci\u00F3n", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Imagen", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["nameButton", "Retornar", "clase", "p-button-rounded p-button-outlined p-button-success", "iconClass", "pi pi-bell", 3, "icon", "eventEmiter"]],
  template: function ConsultaProcesalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConsultaProcesalComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConsultaProcesalComponent_ng_template_6_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 5)(8, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ConsultaProcesalComponent_ng_template_9_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, ConsultaProcesalComponent_ng_template_10_Template, 6, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, ConsultaProcesalComponent_div_11_Template, 4, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "modal-component", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeModal", function ConsultaProcesalComponent_Template_modal_component_closeModal_12_listener() {
        return ctx.showModal = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, ConsultaProcesalComponent_ng_template_13_Template, 4, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, ConsultaProcesalComponent_ng_template_14_Template, 3, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "ngx-spinner", 9)(17, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.listImpulso.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("maximizable", true)("visible", ctx.showModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_10__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_20__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_11__.ButtonComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__.SideMenuComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_13__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_14__.ModalComponentComponent, _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_15__.TextAreaComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_16__.InputTextComponentComponent, _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_17__.FiltersDinamicsComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent],
  styles: [".link-actuacion[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1567c3;\n}\n\n.link-actuacion[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #679cd8;\n}\n\n.text-alert[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: rgba(235, 221, 32, 0.616);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9yZXBvcnRlcy9jb25zdWx0YS1wcm9jZXNhbC9jb25zdWx0YS1wcm9jZXNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUFBSjs7QUFLRTtFQUNFLGNBQUE7QUFGSjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsMkNBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWFjdHVhY2lvbiB7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzE1NjdjM1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmstYWN0dWFjaW9uOmhvdmVyIHtcclxuICBhe1xyXG4gICAgY29sb3I6ICM2NzljZDg7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1hbGVydCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMjIxLCAzMiwgMC42MTYpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9539:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/eliminar-procesos/eliminar-procesos.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EliminarProcesosComponent": () => (/* binding */ EliminarProcesosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/filterProcesos */ 1675);
/* harmony import */ var src_app_constans_token_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constans/token-const */ 3752);
/* harmony import */ var src_app_models_home_utils_sendCaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/home/utils/sendCaptcha */ 5132);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var src_app_models_home_procesos_captchaSendData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/home/procesos/captchaSendData */ 8418);
/* harmony import */ var src_app_models_home_procesos_userTransfer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/home/procesos/userTransfer */ 8324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_home_reportes_eliminar_procesos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/home/reportes/eliminar-procesos.service */ 2509);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_dropdown_component_dropdown_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/dropdown-component/dropdown-component.component */ 9839);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-recaptcha */ 9191);























function EliminarProcesosComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
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
function EliminarProcesosComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14)(1, "div", 1)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-side-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction2"](3, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](1, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](2, _c2)));
  }
}
function EliminarProcesosComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Ver mis procesos");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}
function EliminarProcesosComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function EliminarProcesosComponent_ng_template_12_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r8.formSearchProcess.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 17)(4, "input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function EliminarProcesosComponent_ng_template_12_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r10.formSearchProcess.radicado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 1)(6, "div")(7, "app-button-component", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function EliminarProcesosComponent_ng_template_12_Template_app_button_component_eventEmiter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r11.consultarProcesos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r3.formSearchProcess.demandante)("grupo", ctx_r3.fb)("requerido", true)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r3.formSearchProcess.radicado)("grupo", ctx_r3.fb)("requerido", true)("placeHolderActive", false)("disabledInputText", false);
  }
}
const _c4 = function () {
  return {
    field: "name_departamento",
    header: "Ciudad"
  };
};
const _c5 = function () {
  return {
    field: "name_despacho",
    header: "Despacho"
  };
};
const _c6 = function () {
  return {
    field: "radicacion",
    header: "Radicaci\u00F3n"
  };
};
const _c7 = function () {
  return {
    field: "proceso",
    header: "Tipo proceso"
  };
};
const _c8 = function () {
  return {
    field: "demandante",
    header: "Demandante"
  };
};
const _c9 = function () {
  return {
    field: "demandado",
    header: "Demandado"
  };
};
const _c10 = function () {
  return {
    field: "name_usuario",
    header: "Suscriptor"
  };
};
const _c11 = function () {
  return {
    field: "fecha_registro",
    header: "Fecha de registro",
    isFecha: true
  };
};
const _c12 = function (a0, a1, a2, a3, a4, a5, a6, a7) {
  return [a0, a1, a2, a3, a4, a5, a6, a7];
};
function EliminarProcesosComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 21)(2, "div", 22)(3, "app-button-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function EliminarProcesosComponent_ng_template_16_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r12.filterTypeModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 24)(5, "app-button-component", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function EliminarProcesosComponent_ng_template_16_Template_app_button_component_eventEmiter_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r14.filterTypeModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 0)(7, "div", 1)(8, "app-tabla-component", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selected", function EliminarProcesosComponent_ng_template_16_Template_app_tabla_component_selected_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r15.selectedItems($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction8"](18, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](10, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](11, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](12, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](13, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](14, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](15, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](16, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](17, _c11)))("multiSelect", true)("data", ctx_r4.listEliminar)("paginador", false)("filtroGeneral", false)("lazy", false)("fixStyleTable", true)("stripedTable", true)("rows", 30)("actionsShow", false);
  }
}
function EliminarProcesosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Eliminar registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function EliminarProcesosComponent_ng_template_19_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "app-dropdown-component", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function EliminarProcesosComponent_ng_template_19_div_0_div_4_Template_app_dropdown_component_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r23.userSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("options", ctx_r19.listUsers)("model", ctx_r19.userSelected)("grupo", ctx_r19.fb)("showClear", true);
  }
}
function EliminarProcesosComponent_ng_template_19_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Esta seguro de eliminar estos registros?");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function EliminarProcesosComponent_ng_template_19_div_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Esta seguro de transferir estos registros?");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
const _c13 = function (a0, a1, a2, a3, a4, a5) {
  return [a0, a1, a2, a3, a4, a5];
};
function EliminarProcesosComponent_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-tabla-component", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, EliminarProcesosComponent_ng_template_19_div_0_div_4_Template, 3, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, EliminarProcesosComponent_ng_template_19_div_0_div_6_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, EliminarProcesosComponent_ng_template_19_div_0_ng_template_7_Template, 2, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 33)(10, "div", 1)(11, "div", 34)(12, "re-captcha", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("errored", function EliminarProcesosComponent_ng_template_19_div_0_Template_re_captcha_errored_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r25.expireCaptchat($event));
    })("resolved", function EliminarProcesosComponent_ng_template_19_div_0_Template_re_captcha_resolved_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.acceptedCaptcha($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](8);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction6"](20, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](14, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](15, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](16, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](17, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](18, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](19, _c10)))("multiSelect", false)("data", ctx_r16.selectedItemList)("paginador", false)("filtroGeneral", false)("lazy", false)("fixStyleTable", true)("stripedTable", true)("rows", 30)("actionsShow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r16.typeModal == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r16.typeModal == 1)("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("siteKey", ctx_r16.siteKey);
  }
}
function EliminarProcesosComponent_ng_template_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "No hay registros seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function EliminarProcesosComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, EliminarProcesosComponent_ng_template_19_div_0_Template, 13, 27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, EliminarProcesosComponent_ng_template_19_ng_template_1_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.selectedItemList.length > 0)("ngIfElse", _r17);
  }
}
function EliminarProcesosComponent_ng_template_20_app_button_component_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-button-component", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function EliminarProcesosComponent_ng_template_20_app_button_component_0_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r31.eliminarProcesos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r28.selectedItemList.length == 0);
  }
}
function EliminarProcesosComponent_ng_template_20_ng_template_1_app_button_component_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-button-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function EliminarProcesosComponent_ng_template_20_ng_template_1_app_button_component_0_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r34.transferirProcesos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function EliminarProcesosComponent_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, EliminarProcesosComponent_ng_template_20_ng_template_1_app_button_component_0_Template, 1, 0, "app-button-component", 43);
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r30.selectedItemList.length == 0 ? false : true);
  }
}
function EliminarProcesosComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, EliminarProcesosComponent_ng_template_20_app_button_component_0_Template, 1, 1, "app-button-component", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, EliminarProcesosComponent_ng_template_20_ng_template_1_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "app-button-component", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function EliminarProcesosComponent_ng_template_20_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.showModalD = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r7.typeModal == 1)("ngIfElse", _r29);
  }
}
class EliminarProcesosComponent {
  constructor(breadCrumService, session, spinner, message, eliminarSerivces) {
    this.breadCrumService = breadCrumService;
    this.session = session;
    this.spinner = spinner;
    this.message = message;
    this.eliminarSerivces = eliminarSerivces;
    this.formSearchProcess = {};
    this.genericFilter = new src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__.FilterProceso();
    this.listEliminar = new Array();
    this.selectedItemList = new Array();
    this.showModalD = false;
    this.siteKey = '';
    this.sendCaptcha = new src_app_models_home_utils_sendCaptcha__WEBPACK_IMPORTED_MODULE_2__.SendCaptcha();
    this.typeModal = 0;
    this.listUsers = new Array();
    this.userSelected = new src_app_models_home_procesos_userTransfer__WEBPACK_IMPORTED_MODULE_5__.UserTranfer();
    this.fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({});
  }
  ngOnInit() {
    this.siteKey = src_app_constans_token_const__WEBPACK_IMPORTED_MODULE_1__.Token.TOKEN_AUTHORIZATION.API_KEY;
    this.breadCrumService.setItems([{
      label: 'Reportes'
    }, {
      label: 'Eliminación masiva de procesos'
    }]);
    this.getFirstLoad();
  }
  getFirstLoad() {
    this.spinner.show();
    let ses = this.session.getStorage('user', 'json');
    this.genericFilter = new src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__.FilterProceso();
    this.genericFilter.group_users = ses.data.group_users;
    this.genericFilter.parent = ses.data.parent;
    this.genericFilter.demandante_demandado = '';
    this.genericFilter.radicacion = '';
    this.eliminarSerivces.getListEliminarProcesos(this.genericFilter).subscribe({
      next: res => {
        if (res.length > 0) {
          this.listEliminar = res;
        }
        this.spinner.hide();
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  consultarProcesos() {
    this.spinner.show();
    let ses = this.session.getStorage('user', 'json');
    this.genericFilter = new src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__.FilterProceso();
    this.genericFilter.group_users = ses.data.group_users;
    this.genericFilter.parent = ses.data.parent;
    this.genericFilter.demandante_demandado = this.formSearchProcess.demandante ? this.formSearchProcess.demandante : '';
    this.genericFilter.radicacion = this.formSearchProcess.radicado ? this.formSearchProcess.radicado : '';
    this.eliminarSerivces.getListEliminarProcesos(this.genericFilter).subscribe({
      next: res => {
        if (res.length > 0) {
          this.listEliminar = res;
        }
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
        this.spinner.hide();
      }
    });
  }
  expireCaptchat(event) {
    let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Token expirado `, `Tiempo minimo del token a expirado.`);
    this.message.add(message_model);
  }
  acceptedCaptcha(event) {
    this.sendCaptcha.captcha = event;
  }
  selectedItems(selecteditems) {
    this.selectedItemList = selecteditems;
  }
  eliminarProcesos() {
    this.spinner.show();
    let sendData = new src_app_models_home_procesos_captchaSendData__WEBPACK_IMPORTED_MODULE_4__.CaptchaSendDataModel();
    if (this.sendCaptcha.captcha) {
      let ses = this.session.getStorage('user', 'json');
      let listIdData = new Array();
      this.selectedItemList.forEach(item => {
        let objectId = {
          id: item.id_userope
        };
        listIdData.push(objectId);
      });
      sendData.data = listIdData;
      sendData.captcha = this.sendCaptcha.captcha;
      sendData.group_users = ses.data.group_users;
      sendData.parent = ses.data.parent;
      sendData.name_user = ses.data.nombre;
      sendData.username = ses.data.username;
      this.eliminarSerivces.deleteProcesos(sendData).subscribe({
        next: res => {
          this.spinner.hide();
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('success', `Se ha realizado el proceso.`, `${res.msg}`);
          this.message.add(message_model);
          this.getFirstLoad();
        },
        error: error => {
          this.spinner.hide();
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `Se ha presentado un error.`, `${error.error.msg}`);
          this.message.add(message_model);
        }
      });
      this.showModalD = false;
      this.sendCaptcha = new src_app_models_home_utils_sendCaptcha__WEBPACK_IMPORTED_MODULE_2__.SendCaptcha();
    } else {
      this.spinner.hide();
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `No ha completado el formulario.`, `Por es necesario completar el formlario para continuar.`);
      this.message.add(message_model);
    }
  }
  transferirProcesos() {
    this.spinner.show();
    let sendData = new src_app_models_home_procesos_captchaSendData__WEBPACK_IMPORTED_MODULE_4__.CaptchaSendDataModel();
    console.log(this.userSelected);
    if (this.userSelected !== null) {
      if (this.sendCaptcha.captcha) {
        let ses = this.session.getStorage('user', 'json');
        let listIdData = new Array();
        this.selectedItemList.forEach(item => {
          let objectId = {
            id: item.id_userope
          };
          listIdData.push(objectId);
        });
        sendData.data = listIdData;
        sendData.captcha = this.sendCaptcha.captcha;
        sendData.group_users = ses.data.group_users;
        sendData.parent = ses.data.parent;
        sendData.name_user = ses.data.nombre;
        sendData.username = ses.data.username;
        sendData.user_transfer = parseInt(this.userSelected.cedula_nit);
        this.eliminarSerivces.transferirProcesos(sendData).subscribe({
          next: res => {
            this.spinner.hide();
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('success', `Se ha realizado el proceso.`, `${res.msg}`);
            this.message.add(message_model);
            this.getFirstLoad();
          },
          error: error => {
            this.spinner.hide();
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `No ha completado el formulario.`, `Por es necesario completar el formlario para continuar.`);
            this.message.add(message_model);
          }
        });
        this.showModalD = false;
        this.sendCaptcha = new src_app_models_home_utils_sendCaptcha__WEBPACK_IMPORTED_MODULE_2__.SendCaptcha();
      } else {
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `No ha completado el formulario.`, `Por favor es necesario completar el formlario para continuar.`);
        this.message.add(message_model);
        this.spinner.hide();
      }
    } else {
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_3__.MessageModel('error', `No ha completado el formulario.`, `Por favor es necesario seleccionar un usuario a transferir`);
      this.message.add(message_model);
      this.spinner.hide();
    }
  }
  filterTypeModal(type) {
    this.typeModal = type;
    if (this.typeModal == 2) {
      let ses = this.session.getStorage('user', 'json');
      this.eliminarSerivces.getUsersTransfer(ses.user).subscribe({
        next: res => {
          this.listUsers = res;
        },
        error: error => {
          console.log(error);
        }
      });
    }
    this.showModalD = true;
  }
}
EliminarProcesosComponent.ɵfac = function EliminarProcesosComponent_Factory(t) {
  return new (t || EliminarProcesosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_7__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_19__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_home_reportes_eliminar_procesos_service__WEBPACK_IMPORTED_MODULE_8__.EliminarProcesosService));
};
EliminarProcesosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: EliminarProcesosComponent,
  selectors: [["app-eliminar-procesos"]],
  decls: 25,
  vars: 2,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["tamanio", "70vw", 3, "visible", "closeModal"], ["pTemplate", "title"], ["pTemplate", "footer"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color"], [1, "grid", "p-fluid"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "grid", "p-fluit"], [1, "col-12", "xl:col-6", "md:col-6"], ["placeHolder", "Demandante/Demandado", "styleInput", "help-text", 3, "model", "grupo", "requerido", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Radicado", "styleInput", "help-text", 3, "model", "grupo", "requerido", "placeHolderActive", "disabledInputText", "modelChange"], ["nameButton", "Consultar", 3, "eventEmiter"], [1, "col-12", "flex", 2, "justify-content", "end"], [2, "width", "80px"], ["clase", "p-button-outlined p-button-danger", "nameButton", "Eliminar", 3, "eventEmiter"], [1, "ml-2", 2, "width", "100px"], ["nameButton", "Transferir", 3, "eventEmiter"], ["nameActionsLeft", "acciones", 3, "cols", "multiSelect", "data", "paginador", "filtroGeneral", "lazy", "fixStyleTable", "stripedTable", "rows", "actionsShow", "selected"], [4, "ngIf", "ngIfElse"], ["noData", ""], ["nameActionsLeft", "acciones", 3, "cols", "multiSelect", "data", "paginador", "filtroGeneral", "lazy", "fixStyleTable", "stripedTable", "rows", "actionsShow"], ["class", "grid p-fluid mt-4", 4, "ngIf"], [1, "flex", "justify-content-center", "mt-2"], ["tranferir", ""], [1, "grid", "mt-2"], [1, "flex", "justify-content-center"], [3, "siteKey", "errored", "resolved"], [1, "grid", "p-fluid", "mt-4"], [1, "col-6"], ["keyOptionName", "nombre", "selectLabel", "Seleccione un usuario a transferir", "name", "Seleccione un usuario a transferir", "placeholder", "Seleccione un usuario a transferir", 3, "options", "model", "grupo", "showClear", "modelChange"], ["nameButton", "Eliminar", "clase", "p-button-danger", 3, "disabled", "eventEmiter", 4, "ngIf", "ngIfElse"], ["transferirButton", ""], ["nameButton", "Cancelar", 3, "eventEmiter"], ["nameButton", "Eliminar", "clase", "p-button-danger", 3, "disabled", "eventEmiter"], ["nameButton", "Transferir", "clase", "p-button-success", 3, "eventEmiter", 4, "ngIf"], ["nameButton", "Transferir", "clase", "p-button-success", 3, "eventEmiter"]],
  template: function EliminarProcesosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, EliminarProcesosComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, EliminarProcesosComponent_ng_template_6_Template, 4, 6, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 5)(8, "div", 0)(9, "div", 1)(10, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, EliminarProcesosComponent_ng_template_11_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, EliminarProcesosComponent_ng_template_12_Template, 8, 10, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 0)(14, "div", 1)(15, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, EliminarProcesosComponent_ng_template_16_Template, 9, 27, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "modal-component", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeModal", function EliminarProcesosComponent_Template_modal_component_closeModal_17_listener() {
        return ctx.showModalD = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, EliminarProcesosComponent_ng_template_18_Template, 2, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, EliminarProcesosComponent_ng_template_19_Template, 3, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, EliminarProcesosComponent_ng_template_20_Template, 4, 2, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ngx-spinner", 9)(23, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", ctx.showModalD);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_9__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_11__.SideMenuComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_12__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_13__.ModalComponentComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_14__.InputTextComponentComponent, _components_dropdown_component_dropdown_component_component__WEBPACK_IMPORTED_MODULE_15__.DropdownComponentComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_21__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__.RecaptchaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7919:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/historial-procesos/historial-procesos.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialProcesosComponent": () => (/* binding */ HistorialProcesosComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_home_procesos_historialProcesos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/historialProcesos */ 7186);
/* harmony import */ var src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/home/procesos/historialProcesosFilter */ 5172);
/* harmony import */ var src_app_services_home_reportes_historial_actuaci_n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home/reportes/historial-actuación */ 5286);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_home_reportes_historial_procesos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/home/reportes/historial-procesos.service */ 1934);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/text-area/text-area.component */ 7408);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/filters-dinamics/filters-dinamics.component */ 8586);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 9129);




















function HistorialProcesosComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
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
function HistorialProcesosComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14)(1, "div", 1)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "app-side-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c1)));
  }
}
function HistorialProcesosComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Seleccione el proceso que desea consultar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HistorialProcesosComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-filters-dinamics", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventFilter", function HistorialProcesosComponent_ng_template_10_Template_app_filters_dinamics_eventFilter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.filterProceso($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("showSuscriptores", false)("showRango", false);
  }
}
function HistorialProcesosComponent_div_11_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-button-component", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventEmiter", function HistorialProcesosComponent_div_11_ng_template_3_ng_template_3_Template_app_button_component_eventEmiter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const rowData_r11 = restoredCtx.elemento;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.consultarActuacion(rowData_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
const _c3 = function () {
  return {
    field: "etiqueta_suscriptor",
    header: "Etiqueta"
  };
};
const _c4 = function () {
  return {
    field: "municipio",
    header: "Ciudad"
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
    field: "radicacion",
    header: "Radicado"
  };
};
const _c7 = function () {
  return {
    field: "proceso",
    header: "Tipo proceso"
  };
};
const _c8 = function () {
  return {
    field: "demandante",
    header: "Demandante"
  };
};
const _c9 = function () {
  return {
    field: "demandado",
    header: "Demandado"
  };
};
const _c10 = function (a0, a1, a2, a3, a4, a5, a6) {
  return [a0, a1, a2, a3, a4, a5, a6];
};
function HistorialProcesosComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-tabla-component", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChangePage", function HistorialProcesosComponent_div_11_ng_template_3_Template_app_tabla_component_onChangePage_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.changePage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HistorialProcesosComponent_div_11_ng_template_3_ng_template_3_Template, 1, 2, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction7"](18, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](11, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](12, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](13, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](15, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](16, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](17, _c9)))("multiSelect", false)("data", ctx_r9.listHistorico)("paginador", true)("filtroGeneral", false)("lazy", true)("fixStyleTable", true)("stripedTable", true)("rows", ctx_r9.generalRows)("totalRecords", ctx_r9.totalItems)("actionsRightShow", true);
  }
}
function HistorialProcesosComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 17)(1, "div", 1)(2, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HistorialProcesosComponent_div_11_ng_template_3_Template, 4, 26, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HistorialProcesosComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Ultimas actuaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HistorialProcesosComponent_ng_template_14_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-button-component", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventEmiter", function HistorialProcesosComponent_ng_template_14_div_0_ng_template_3_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23);
      const rowData_r21 = restoredCtx.elemento;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.showDescription(rowData_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
function HistorialProcesosComponent_ng_template_14_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-button-component", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventEmiter", function HistorialProcesosComponent_ng_template_14_div_0_ng_template_4_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const rowData_r24 = restoredCtx.elemento;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.downloadDoc(rowData_r24.ruta_auto));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowData_r24 = ctx.elemento;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("iconClass", "pi ", rowData_r24.ruta_auto !== "" ? "pi-file-pdf" : "pi-times", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
const _c11 = function () {
  return {
    field: "notificacion",
    header: "Notificaci\u00F3n"
  };
};
const _c12 = function () {
  return {
    field: "radicacion",
    header: "Radicaci\u00F3n"
  };
};
const _c13 = function () {
  return {
    field: "proceso",
    header: "Proceso"
  };
};
const _c14 = function () {
  return {
    field: "descripcion",
    header: "Descripci\u00F3n"
  };
};
const _c15 = function () {
  return {
    field: "fechapublicacion",
    header: "Publicaci\u00F3n",
    isFecha: true
  };
};
const _c16 = function (a0, a1, a2, a3, a4, a5, a6, a7) {
  return [a0, a1, a2, a3, a4, a5, a6, a7];
};
function HistorialProcesosComponent_ng_template_14_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "div", 1)(2, "app-tabla-component", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChangePage", function HistorialProcesosComponent_ng_template_14_div_0_Template_app_tabla_component_onChangePage_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.consultarActuacion(undefined, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HistorialProcesosComponent_ng_template_14_div_0_ng_template_3_Template, 3, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, HistorialProcesosComponent_ng_template_14_div_0_ng_template_4_Template, 3, 3, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction8"](16, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](8, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](9, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](10, _c12), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](11, _c13), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](12, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](13, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c14), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](15, _c15)))("data", ctx_r16.listActuacion)("totalRecords", ctx_r16.totalRows)("actionsRightShow", true)("actionsShow", true)("paginador", true)("lazy", true)("rows", ctx_r16.generalRows);
  }
}
function HistorialProcesosComponent_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14)(1, "div", 28)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Consulta detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 23)(5, "div", 29)(6, "input-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.actuacionSelected.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 29)(8, "input-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.actuacionSelected.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 23)(10, "div", 29)(11, "input-text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.actuacionSelected.notificacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 29)(13, "input-text", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r33.actuacionSelected.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 23)(15, "div", 29)(16, "app-text-area", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_app_text_area_modelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r34.actuacionSelected.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 29)(18, "app-text-area", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_app_text_area_modelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r35.actuacionSelected.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 23)(20, "div", 1)(21, "app-text-area", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_app_text_area_modelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.actuacionSelected.descripcion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 23)(23, "div", 29)(24, "input-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r37.actuacionSelected.fechapublicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 29)(26, "input-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("modelChange", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_input_text_modelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r38.actuacionSelected.imagen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 0)(28, "div", 28)(29, "app-button-component", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("eventEmiter", function HistorialProcesosComponent_ng_template_14_ng_template_1_Template_app_button_component_eventEmiter_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.showDescription());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.despacho)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.radicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.notificacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.proceso)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.demandante)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.demandado)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.descripcion)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.fechapublicacion)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("model", ctx_r18.actuacionSelected.imagen)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", true);
  }
}
function HistorialProcesosComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, HistorialProcesosComponent_ng_template_14_div_0_Template, 5, 25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, HistorialProcesosComponent_ng_template_14_ng_template_1_Template, 30, 19, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r6.showDescriptionData)("ngIfElse", _r17);
  }
}
class HistorialProcesosComponent {
  constructor(breadCrumService, historialService, session, spinner, message) {
    this.breadCrumService = breadCrumService;
    this.historialService = historialService;
    this.session = session;
    this.spinner = spinner;
    this.message = message;
    this.filter = new src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_1__.HistorialProcesosModel();
    this.generalRows = 30;
    this.totalItems = 0;
    this.listHistorico = new Array();
    this.listActuacion = new Array();
    this.itemSelected = new src_app_models_home_procesos_historialProcesos__WEBPACK_IMPORTED_MODULE_0__.HistorialModel();
    this.showModal = false;
    this.totalRows = 0;
    this.showDescriptionData = false;
    this.actuacionSelected = new src_app_services_home_reportes_historial_actuaci_n__WEBPACK_IMPORTED_MODULE_2__.HistorialActuacion();
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Reportes'
    }, {
      label: 'Historial de procesos'
    }]);
  }
  filterProceso(event) {
    console.log(event);
    this.spinner.show();
    this.filter = event;
    let ses = this.session.getStorage('user', 'json');
    this.filter.group_users = ses.data.group_users;
    this.filter.parent = ses.data.parent;
    this.filter.from = 0;
    this.filter.rows = this.generalRows;
    this.historialService.filterHistorial(this.filter).subscribe({
      next: res => {
        this.listHistorico = res.data;
        this.totalItems = res.count_rows;
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
        this.spinner.hide();
      }
    });
  }
  changePage(event) {
    this.spinner.show();
    this.filter = event;
    let ses = this.session.getStorage('user', 'json');
    this.filter.group_users = ses.data.group_users;
    this.filter.parent = ses.data.parent;
    this.filter.from = event.first;
    this.filter.rows = this.generalRows;
    this.historialService.filterHistorial(this.filter).subscribe({
      next: res => {
        this.listHistorico = res.data;
        this.totalItems = res.count_rows;
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
        this.spinner.hide();
      }
    });
  }
  consultarActuacion(event, page) {
    this.showDescriptionData = false;
    let ses = this.session.getStorage('user', 'json');
    this.itemSelected = event;
    if (event) {
      this.filter = new src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_1__.HistorialProcesosModel();
      this.filter.group_users = ses.data.group_users;
      this.filter.parent = ses.data.parent;
      this.filter.despacho = this.itemSelected.despacho;
      this.filter.radicacion = this.itemSelected.radicacion;
      this.filter.codigo_23 = this.itemSelected.codigo_23;
    }
    if (page) {
      this.filter.from = page.first;
    } else {
      this.filter.from = 0;
    }
    this.filter.rows = this.generalRows;
    this.historialService.getActuacion(this.filter).subscribe({
      next: res => {
        this.listActuacion = res.data;
        this.totalRows = res.count_rows;
        console.log(this.listActuacion);
      },
      error: error => {
        console.log(error);
      }
    });
    this.showModal = true;
  }
  downloadDoc(url) {
    if (url) {
      let finalUrl = url.substring(0);
      window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseDocs + '/autos/' + finalUrl);
    }
  }
  showDescription(event) {
    console.log(event);
    if (event) {
      this.actuacionSelected = event;
    }
    if (this.showDescriptionData) {
      this.showDescriptionData = false;
    } else {
      this.showDescriptionData = true;
    }
  }
}
HistorialProcesosComponent.ɵfac = function HistorialProcesosComponent_Factory(t) {
  return new (t || HistorialProcesosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_home_reportes_historial_procesos_service__WEBPACK_IMPORTED_MODULE_5__.HistorialProcesosService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_6__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_17__.MessageService));
};
HistorialProcesosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: HistorialProcesosComponent,
  selectors: [["app-historial-procesos"]],
  decls: 19,
  vars: 4,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["class", "grid p-fluit mt-2", 4, "ngIf"], ["tamanio", "90vw", 3, "maximizable", "visible", "closeModal"], ["pTemplate", "title"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color", "mt-3"], [1, "grid", "p-fluid"], [1, "col-12", "mt-2", 3, "itemsMenu"], [3, "showSuscriptores", "showRango", "eventFilter"], [1, "grid", "p-fluit", "mt-2"], ["nameActionsRight", "Consultar", "paginationPosition", "both", 3, "cols", "multiSelect", "data", "paginador", "filtroGeneral", "lazy", "fixStyleTable", "stripedTable", "rows", "totalRecords", "actionsRightShow", "onChangePage"], ["pTemplate", "actions-left"], ["messageTooltip", "Nota", "iconClass", "pi pi-search", "clase", "p-button-rounded p-button-primary p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["class", "grid p-2", 4, "ngIf", "ngIfElse"], ["showDecriptionForm", ""], [1, "grid", "p-2"], ["nameActionsRight", "Auto", "nameActionsLeft", "Detalle", "paginationPosition", "both", 3, "cols", "data", "totalRecords", "actionsRightShow", "actionsShow", "paginador", "lazy", "rows", "onChangePage"], ["pTemplate", "actions"], ["messageTooltip", "Consultar detalle", "iconClass", "pi pi-eye", "clase", "p-button-rounded p-button-primary p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["messageTooltip", "Autos", "clase", "p-button-rounded p-button-danger p-button-text", 3, "icon", "showTooltip", "iconClass", "eventEmiter"], [1, "col-12", "p-2"], [1, "col-6"], ["placeHolder", "Despacho", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Radicaci\u00F3n", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Notificaci\u00F3n", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Proceso", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["styleInput", "help-text", "placeholder", "Demandante", "heightTamanio", "100px", 3, "model", "disabled", "modelChange"], ["styleInput", "help-text", "placeholder", "Demandado", "heightTamanio", "100px", 3, "model", "disabled", "modelChange"], ["placeHolder", "Fecha publicaci\u00F3n", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["placeHolder", "Imagen", "styleInput", "help-text", 3, "model", "disabledInputText", "modelChange"], ["nameButton", "Retornar", "clase", "p-button-rounded p-button-outlined p-button-success", "iconClass", "pi pi-bell", 3, "icon", "eventEmiter"]],
  template: function HistorialProcesosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, HistorialProcesosComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HistorialProcesosComponent_ng_template_6_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 5)(8, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, HistorialProcesosComponent_ng_template_9_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HistorialProcesosComponent_ng_template_10_Template, 1, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, HistorialProcesosComponent_div_11_Template, 4, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "modal-component", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeModal", function HistorialProcesosComponent_Template_modal_component_closeModal_12_listener() {
        return ctx.showModal = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, HistorialProcesosComponent_ng_template_13_Template, 4, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, HistorialProcesosComponent_ng_template_14_Template, 3, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ngx-spinner", 9)(17, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listHistorico.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("maximizable", true)("visible", ctx.showModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_7__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_8__.ButtonComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__.SideMenuComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_10__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_11__.ModalComponentComponent, _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_12__.TextAreaComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_13__.InputTextComponentComponent, _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_14__.FiltersDinamicsComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9627:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/procesos-activos/procesos-activos.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosActivosComponent": () => (/* binding */ ProcesosActivosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/filterProcesos */ 1675);
/* harmony import */ var src_app_constans_token_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constans/token-const */ 3752);
/* harmony import */ var src_app_models_home_procesos_procesoActivo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/home/procesos/procesoActivo */ 6205);
/* harmony import */ var src_app_models_audiencias_audiencias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/audiencias/audiencias */ 2051);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_models_home_reports_filterGeneral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/home/reports/filterGeneral */ 5566);
/* harmony import */ var src_app_models_home_reports_informeProcesal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/home/reports/informeProcesal */ 4698);
/* harmony import */ var src_app_models_home_reports_multiData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/home/reports/multiData */ 9752);
/* harmony import */ var src_app_models_home_reports_dataInfoProcesal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/home/reports/dataInfoProcesal */ 288);
/* harmony import */ var src_app_models_home_utils_sendCaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/home/utils/sendCaptcha */ 5132);
/* harmony import */ var src_app_models_home_procesos_captchaSendData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/home/procesos/captchaSendData */ 8418);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_home_reportes_procesos_activos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/home/reportes/procesos-activos.service */ 6438);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/home/audiencia/audiencia.service */ 2096);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../components/date-picker/date-picker.component */ 8282);
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../components/text-area/text-area.component */ 7408);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_dropdown_component_dropdown_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../components/dropdown-component/dropdown-component.component */ 9839);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-recaptcha */ 9191);

































function ProcesosActivosComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
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
function ProcesosActivosComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 15)(1, "div", 1)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "app-side-menu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction2"](3, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](1, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](2, _c2)));
  }
}
function ProcesosActivosComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Ver mis procesos");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function ProcesosActivosComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_12_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r14.genericFilter.demandante_demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 18)(4, "input-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_12_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r16.genericFilter.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 1)(6, "div")(7, "app-button-component", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_12_Template_app_button_component_eventEmiter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r17.consultarProcesos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r3.genericFilter.demandante_demandado)("grupo", ctx_r3.fb)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r3.genericFilter.radicacion)("grupo", ctx_r3.fb)("placeHolderActive", false)("disabledInputText", false);
  }
}
function ProcesosActivosComponent_ng_template_16_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 17)(1, "div", 25)(2, "app-button-component", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_16_ng_template_6_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r21);
      const value_r19 = restoredCtx.elemento;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r20.programarProceso(value_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 25)(4, "app-button-component", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_16_ng_template_6_Template_app_button_component_eventEmiter_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r21);
      const value_r19 = restoredCtx.elemento;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r22.openInformeProcesal(value_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 25)(6, "app-button-component", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_16_ng_template_6_Template_app_button_component_eventEmiter_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r21);
      const value_r19 = restoredCtx.elemento;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r23.deleteItem(value_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true)("showTooltip", true);
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
    header: "Ciudad"
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
    field: "codigo_23",
    header: "Radicaci\u00F3n",
    esRadicacion: true
  };
};
const _c8 = function () {
  return {
    field: "proceso",
    header: "Tipo proceso"
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
    field: "fecha_registro",
    header: "Fecha de registro",
    isFecha: true
  };
};
const _c12 = function (a0, a1, a2, a3, a4, a5, a6, a7) {
  return [a0, a1, a2, a3, a4, a5, a6, a7];
};
function ProcesosActivosComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 0)(1, "div", 2)(2, "app-button-component", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_16_Template_app_button_component_eventEmiter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r24.downloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "app-tabla-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("onChangePage", function ProcesosActivosComponent_ng_template_16_Template_app_tabla_component_onChangePage_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r26.changePage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_16_ng_template_6_Template, 7, 6, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction8"](21, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](13, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](14, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](15, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](16, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](17, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](18, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](19, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](20, _c11)))("loading", ctx_r4.loadingTable)("data", ctx_r4.data)("paginador", true)("filtroGeneral", false)("totalRecords", ctx_r4.totalRecords)("lazy", true)("fixStyleTable", true)("stripedTable", true)("rows", 30)("actionsShow", true);
  }
}
function ProcesosActivosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Informe procesal");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "app-button-component", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_div_1_div_5_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      const iM_r40 = ctx_r44.index;
      const multidata_r39 = ctx_r44.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r43.deleteMultiDataObject(iM_r40, multidata_r39.id_cmp_informe_procesal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 47)(3, "input-text", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_div_1_Template_input_text_modelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r48);
      const multidata_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](multidata_r39.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_div_1_div_5_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const multidata_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", multidata_r39.value)("grupo", ctx_r41.formGroup.fbInfProcesal)("valid", ctx_r41.formValid.vistaForm)("disabledInputText", false)("requerido", cmpInfo_r28.require_cmp == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !multidata_r39.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_div_1_Template, 6, 6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const multidata_r39 = ctx.$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", multidata_r39.id_cmp_informe_procesal == cmpInfo_r28.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 43)(3, "app-button-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r54);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r52.createMultiDataObject(cmpInfo_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_div_6_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r35.infoProcesal.multiData);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 17)(1, "div", 1)(2, "input-text", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_8_ng_template_2_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r56);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r55.infoProcesal.data[cmpInfo_r28.name_cmp] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r37.infoProcesal.data[cmpInfo_r28.name_cmp])("grupo", ctx_r37.formGroup.fbInfProcesal)("valid", ctx_r37.formValid.vistaForm)("disabledInputText", false)("requerido", cmpInfo_r28.require_cmp == 1);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_8_div_1_Template, 7, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, ProcesosActivosComponent_ng_template_19_div_19_div_8_ng_template_2_Template, 3, 5, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](3);
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", cmpInfo_r28.multi_data == 1)("ngIfElse", _r36);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "app-button-component", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_div_1_div_5_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      const iM_r65 = ctx_r69.index;
      const multidata_r64 = ctx_r69.$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r68.deleteMultiDataObject(iM_r65, multidata_r64.id_cmp_informe_procesal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 47)(3, "app-text-area", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_div_1_Template_app_text_area_modelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r73);
      const multidata_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](multidata_r64.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_div_1_div_5_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const multidata_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", multidata_r64.value)("grupo", ctx_r66.formGroup.fbInfProcesal)("valid", ctx_r66.formValid.vistaForm)("requerido", cmpInfo_r28.require_cmp == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !multidata_r64.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_div_1_Template, 6, 5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const multidata_r64 = ctx.$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", multidata_r64.id_cmp_informe_procesal == cmpInfo_r28.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 43)(3, "app-button-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r79);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r77.createMultiDataObject(cmpInfo_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_div_6_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r60.infoProcesal.multiData);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 17)(1, "div", 1)(2, "app-text-area", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_9_ng_template_2_Template_app_text_area_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r81);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r80.infoProcesal.data[cmpInfo_r28.name_cmp] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r62.infoProcesal.data[cmpInfo_r28.name_cmp])("grupo", ctx_r62.formGroup.fbInfProcesal)("valid", ctx_r62.formValid.vistaForm)("requerido", cmpInfo_r28.require_cmp == 1);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_9_div_1_Template, 7, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, ProcesosActivosComponent_ng_template_19_div_19_div_9_ng_template_2_Template, 3, 4, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](3);
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", cmpInfo_r28.multi_data == 1)("ngIfElse", _r61);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "app-button-component", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_div_1_div_5_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r95);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      const iM_r90 = ctx_r94.index;
      const multidata_r89 = ctx_r94.$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r93.deleteMultiDataObject(iM_r90, multidata_r89.id_cmp_informe_procesal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 47)(3, "input-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_div_1_Template_input_text_modelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r98);
      const multidata_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](multidata_r89.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_div_1_div_5_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const multidata_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("valid", ctx_r91.formValid.vistaForm)("model", multidata_r89.value)("grupo", ctx_r91.formGroup.fbInfProcesal)("disabledInputText", false)("requerido", cmpInfo_r28.require_cmp == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !multidata_r89.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_div_1_Template, 6, 6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const multidata_r89 = ctx.$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", multidata_r89.id_cmp_informe_procesal == cmpInfo_r28.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 43)(3, "app-button-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r104);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r102.createMultiDataObject(cmpInfo_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_div_6_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r85.infoProcesal.multiData);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 17)(1, "div", 1)(2, "input-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_10_ng_template_2_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r106);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r105.infoProcesal.data[cmpInfo_r28.name_cmp] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("valid", ctx_r87.formValid.vistaForm)("model", ctx_r87.infoProcesal.data[cmpInfo_r28.name_cmp])("grupo", ctx_r87.formGroup.fbInfProcesal)("disabledInputText", false)("requerido", cmpInfo_r28.require_cmp == 1);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_10_div_1_Template, 7, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, ProcesosActivosComponent_ng_template_19_div_19_div_10_ng_template_2_Template, 3, 5, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](3);
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", cmpInfo_r28.multi_data == 1)("ngIfElse", _r86);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "app-button-component", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_div_1_div_5_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      const iM_r115 = ctx_r119.index;
      const multidata_r114 = ctx_r119.$implicit;
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r118.deleteMultiDataObject(iM_r115, multidata_r114.id_cmp_informe_procesal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 47)(3, "app-dropdown-component", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_div_1_Template_app_dropdown_component_modelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r123);
      const multidata_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](multidata_r114.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_div_1_div_5_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const multidata_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("options", ctx_r116.convertToList(cmpInfo_r28.value_cmp))("model", multidata_r114.value)("grupo", ctx_r116.formGroup.fbInfProcesal);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !multidata_r114.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_div_1_Template, 6, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const multidata_r114 = ctx.$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", multidata_r114.id_cmp_informe_procesal == cmpInfo_r28.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 43)(3, "app-button-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r129);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r127.createMultiDataObject(cmpInfo_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_div_6_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r110.infoProcesal.multiData);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 15)(1, "div", 1)(2, "app-dropdown-component", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_11_ng_template_2_Template_app_dropdown_component_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r131);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r130.infoProcesal.data[cmpInfo_r28.name_cmp] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("options", ctx_r112.convertToList(cmpInfo_r28.value_cmp))("model", ctx_r112.infoProcesal.data[cmpInfo_r28.name_cmp])("grupo", ctx_r112.formGroup.fbInfProcesal);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_11_div_1_Template, 7, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, ProcesosActivosComponent_ng_template_19_div_19_div_11_ng_template_2_Template, 3, 3, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](3);
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", cmpInfo_r28.multi_data == 1)("ngIfElse", _r111);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "app-button-component", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_div_1_div_6_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      const iM_r140 = ctx_r144.index;
      const multidata_r139 = ctx_r144.$implicit;
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r143.deleteMultiDataObject(iM_r140, multidata_r139.id_cmp_informe_procesal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "app-date-picker", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_div_1_Template_app_date_picker_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r148);
      const multidata_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](multidata_r139.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_div_1_div_6_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const multidata_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r141.infoProcesal.data[cmpInfo_r28.name_cmp], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("valid", ctx_r141.formValid.vistaForm)("model", multidata_r139.value)("grupo", ctx_r141.formGroup.fbInfProcesal)("showIcon", true)("buttonBar", true)("requerido", cmpInfo_r28.require_cmp == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !multidata_r139.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_div_1_Template, 7, 8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const multidata_r139 = ctx.$implicit;
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", multidata_r139.id_cmp_informe_procesal == cmpInfo_r28.id);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 43)(3, "app-button-component", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_Template_app_button_component_eventEmiter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r154);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r152.createMultiDataObject(cmpInfo_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_div_6_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r135.infoProcesal.multiData);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 17)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "app-date-picker", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_19_div_19_div_12_ng_template_2_Template_app_date_picker_modelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r156);
      const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r155.infoProcesal.data[cmpInfo_r28.name_cmp] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r137.infoProcesal.data[cmpInfo_r28.name_cmp], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("valid", ctx_r137.formValid.vistaForm)("model", ctx_r137.infoProcesal.data[cmpInfo_r28.name_cmp])("grupo", ctx_r137.formGroup.fbInfProcesal)("showIcon", true)("buttonBar", true)("requerido", cmpInfo_r28.require_cmp == 1);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, ProcesosActivosComponent_ng_template_19_div_19_div_12_div_1_Template, 7, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, ProcesosActivosComponent_ng_template_19_div_19_div_12_ng_template_2_Template, 4, 7, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](3);
    const cmpInfo_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", cmpInfo_r28.multi_data == 1)("ngIfElse", _r136);
  }
}
function ProcesosActivosComponent_ng_template_19_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 37)(5, "div", 0)(6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](7, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](8, ProcesosActivosComponent_ng_template_19_div_19_div_8_Template, 4, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, ProcesosActivosComponent_ng_template_19_div_19_div_9_Template, 4, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, ProcesosActivosComponent_ng_template_19_div_19_div_10_Template, 4, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, ProcesosActivosComponent_ng_template_19_div_19_div_11_Template, 4, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, ProcesosActivosComponent_ng_template_19_div_19_div_12_Template, 4, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const cmpInfo_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", cmpInfo_r28.name_label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngSwitch", cmpInfo_r28.type_cmp);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngSwitchCase", 5);
  }
}
function ProcesosActivosComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 29)(3, "div", 1)(4, "div", 0)(5, "div", 30)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, " Despacho: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, " Radicado: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "div", 30)(15, "app-button-component", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_19_Template_app_button_component_eventEmiter_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r161);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r160.downloadReportInfP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](16, "div", 33)(17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18, "FORMULARIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](19, ProcesosActivosComponent_ng_template_19_div_19_Template, 13, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r6.nameDespachoModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r6.radicadoModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r6.infoProcesal.cmpInfoProcesal);
  }
}
function ProcesosActivosComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "app-button-component", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_20_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r163);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r162.showModalInfo = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "app-button-component", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_20_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r163);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r164.sendDinamycForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function ProcesosActivosComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Eliminar registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function ProcesosActivosComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 62)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Esta seguro de eliminar este registro?");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 63)(6, "div", 1)(7, "div", 62)(8, "re-captcha", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("errored", function ProcesosActivosComponent_ng_template_23_Template_re_captcha_errored_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r166);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r165.expireCaptchat($event));
    })("resolved", function ProcesosActivosComponent_ng_template_23_Template_re_captcha_resolved_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r166);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r167.acceptedCaptcha($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("siteKey", ctx_r9.siteKey);
  }
}
function ProcesosActivosComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "app-button-component", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_24_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r169);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r168.deleteProcesoActivo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "app-button-component", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_24_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r169);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r170.showModalD = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function ProcesosActivosComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " PROGRAMAR AUDIENCIA / ALERTAR VENCIMIENTO DE TERMINO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function ProcesosActivosComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 30)(4, "input-text", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r171.selectedItem.name_ciudad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 30)(6, "input-text", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r173.updateProceso.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div", 0)(8, "div", 30)(9, "input-text", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_input_text_modelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r174.updateProceso.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "div", 30)(11, "input-text", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_input_text_modelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r175.updateProceso.proceso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "div", 0)(13, "div", 30)(14, "input-text", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_input_text_modelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r176.updateProceso.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "div", 30)(16, "input-text", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_input_text_modelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r177.updateProceso.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "div", 0)(18, "div", 1)(19, "app-text-area", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_app_text_area_modelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r178.updateProceso.descripcion_vence_terminos = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "div", 30)(21, "app-date-picker", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("modelChange", function ProcesosActivosComponent_ng_template_27_Template_app_date_picker_modelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r179.updateProceso.fecha_vence_terminos = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.selectedItem.name_ciudad)("grupo", ctx_r12.fbProgramar)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.despacho)("grupo", ctx_r12.fbProgramar)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.radicacion)("grupo", ctx_r12.fbProgramar)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.proceso)("grupo", ctx_r12.fbProgramar)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.demandante)("grupo", ctx_r12.fbProgramar)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.demandado)("grupo", ctx_r12.fbProgramar)("disabledInputText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.descripcion_vence_terminos)("grupo", ctx_r12.fbProgramar);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("model", ctx_r12.updateProceso.fecha_vence_terminos)("showIcon", true);
  }
}
function ProcesosActivosComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "app-button-component", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("eventEmiter", function ProcesosActivosComponent_ng_template_28_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r181);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r180.programarAudiencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
class ProcesosActivosComponent {
  constructor(breadCrumService, procesoActivoService, session, audienciaService, spinner, message) {
    this.breadCrumService = breadCrumService;
    this.procesoActivoService = procesoActivoService;
    this.session = session;
    this.audienciaService = audienciaService;
    this.spinner = spinner;
    this.message = message;
    this.data = new Array();
    this.startPage = {
      first: 0,
      rows: 30
    };
    this.genericFilter = new src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__.FilterProceso();
    this.totalRecords = 0;
    this.loadingTable = true;
    this.siteKey = '';
    this.showModalD = false;
    this.showModalInfo = false;
    this.selectedItem = new src_app_models_home_procesos_procesoActivo__WEBPACK_IMPORTED_MODULE_2__.ProcesoActivo();
    this.updateProceso = new src_app_models_audiencias_audiencias__WEBPACK_IMPORTED_MODULE_3__.Audiencias();
    this.showModalProgramar = false;
    this.filterProceso = new src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_0__.FilterProceso();
    this.urlFinal = '';
    this.infoProcesal = new src_app_models_home_reports_informeProcesal__WEBPACK_IMPORTED_MODULE_7__.InformeProcesal();
    this.nameDespachoModal = '';
    this.radicadoModal = '';
    this.formGroup = {};
    this.formValid = {
      vistaForm: false
    };
    this.sendCaptcha = new src_app_models_home_utils_sendCaptcha__WEBPACK_IMPORTED_MODULE_10__.SendCaptcha();
    this.formularioBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormBuilder();
    this.infoProcesal.cmpInfoProcesal = new Array();
    this.fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroup({});
    this.fbDelete = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroup({});
    this.fbProgramar = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroup({});
    this.formGroup.fbProgramar = this.formularioBuilder.group({});
    this.formGroup.fbInfProcesal = this.formularioBuilder.group({});
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Reportes'
    }, {
      label: 'Listado procesos activos'
    }]);
    this.siteKey = src_app_constans_token_const__WEBPACK_IMPORTED_MODULE_1__.Token.TOKEN_AUTHORIZATION.API_KEY;
    this.searchActivos(this.startPage);
  }
  consultarProcesos() {
    this.searchActivos(this.startPage);
  }
  searchActivos(page) {
    this.loadingTable = true;
    let ses = this.session.getStorage('user', 'json');
    this.genericFilter.from = page.first;
    this.genericFilter.group_users = ses.data.group_users;
    this.genericFilter.parent = ses.data.parent;
    this.genericFilter.rows = page.rows;
    this.genericFilter.demandante_demandado = this.genericFilter.demandante_demandado ? this.genericFilter.demandante_demandado : '';
    this.genericFilter.radicacion = this.genericFilter.radicacion ? this.genericFilter.radicacion : '';
    this.procesoActivoService.getListProcesoActivo(this.genericFilter).subscribe({
      next: res => {
        this.loadingTable = false;
        this.totalRecords = res.count_rows;
        this.data = res.data;
      },
      error: error => {
        this.loadingTable = false;
        console.log(error);
      }
    });
  }
  changePage(event) {
    this.searchActivos(event);
  }
  deleteItem(item) {
    this.showModalD = true;
    this.sendCaptcha.id = item.id_userope;
  }
  programarProceso(proceso) {
    this.selectedItem = proceso;
    let sesion = this.session.getStorage('user', 'json');
    this.updateProceso.demandante = proceso.demandante;
    this.updateProceso.demandado = proceso.demandado;
    this.updateProceso.username = sesion.data.username;
    this.updateProceso.despacho = proceso.despacho;
    this.updateProceso.radicacion = proceso.radicacion;
    this.updateProceso.username = sesion.data.username;
    this.updateProceso.ciudad = proceso.municipio;
    this.updateProceso.proceso = proceso.proceso;
    this.updateProceso.idplanilla = 0;
    this.showModalProgramar = true;
  }
  programarAudiencia() {
    this.spinner.show();
    this.audienciaService.createAudiencia(this.updateProceso).subscribe({
      next: res => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('success', `!Exito`, `${res.msg}`);
        this.message.add(message_model);
        this.showModalProgramar = false;
      },
      error: error => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `!Upss`, `${error.error.msg}`);
        this.message.add(message_model);
      }
    });
  }
  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');
    this.filterProceso.username = session.data.username;
    this.filterProceso.name_user = session.data.nombre;
    this.filterProceso.name_file = 'Reporte_listado_activos';
    this.filterProceso.group_users = session.data.group_users;
    this.filterProceso.parent = session.data.parent;
    this.filterProceso.demandante_demandado = '';
    this.filterProceso.radicacion = '';
    console.log(this.filterProceso);
    this.procesoActivoService.getReportActivos(this.filterProceso).subscribe({
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
            if (error != undefined) {
              let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Se ha presentado un error`, `No fue posible descargar el documento, estamos trabajando para resolver este error`);
              this.message.add(message_model);
            }
          });
        } else {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: error => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error ${error.error.status}`, `${error.error.msg}`);
        this.message.add(message_model);
        console.log(error);
      }
    });
  }
  downloadReportInfP() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');
    this.filterProceso.username = session.data.username;
    this.filterProceso.name_user = session.data.nombre;
    this.filterProceso.name_file = 'Reporte_Informe_procesal';
    this.filterProceso.group_users = session.data.group_users;
    this.filterProceso.parent = session.data.parent;
    this.filterProceso.radicacion = this.infoProcesal.radicado;
    this.filterProceso.despacho = this.infoProcesal.despacho;
    console.log(this.filterProceso);
    this.procesoActivoService.getReportInfoProcesal(this.filterProceso).subscribe({
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
            if (error != undefined) {
              let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Se ha presentado un error`, `No fue posible descargar el documento, estamos trabajando para resolver este error`);
              this.message.add(message_model);
            }
          });
        } else {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: error => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error ${error.error.status}`, `${error.error.msg}`);
        this.message.add(message_model);
        console.log(error);
      }
    });
  }
  openInformeProcesal(value) {
    this.spinner.show();
    this.showModalInfo = true;
    let filter = new src_app_models_home_reports_filterGeneral__WEBPACK_IMPORTED_MODULE_6__.FilterGeneral();
    filter.radicacion = value.radicacion;
    filter.despacho = value.despacho;
    this.nameDespachoModal = value.name_despacho;
    this.radicadoModal = value.radicacion;
    this.procesoActivoService.getStructureInfoProcesal(filter).subscribe({
      next: res => {
        this.infoProcesal = res;
        this.infoProcesal.despacho = value.despacho;
        this.infoProcesal.radicado = value.radicacion;
        if (this.infoProcesal.multiData?.length == 0) {
          this.infoProcesal.cmpInfoProcesal.forEach(element => {
            if (element.multi_data == 1) {
              let itemMultidata = new src_app_models_home_reports_multiData__WEBPACK_IMPORTED_MODULE_8__.MultiData();
              itemMultidata.id_cmp_informe_procesal = element.id;
              this.infoProcesal.multiData?.push(itemMultidata);
            }
          });
        }
        if (!this.infoProcesal.data) {
          this.infoProcesal.data = new src_app_models_home_reports_dataInfoProcesal__WEBPACK_IMPORTED_MODULE_9__.DataInfoProcesal();
        }
        console.log(this.infoProcesal);
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
        this.spinner.hide();
      }
    });
  }
  convertToList(value) {
    return value.split(';');
  }
  createMultiDataObject(cmp_informe_procesal) {
    let itemMultidata = new src_app_models_home_reports_multiData__WEBPACK_IMPORTED_MODULE_8__.MultiData();
    itemMultidata.id_cmp_informe_procesal = cmp_informe_procesal;
    this.infoProcesal.multiData?.push(itemMultidata);
  }
  deleteMultiDataObject(index, idCmp) {
    let isDelete = this.infoProcesal.multiData.filter(item => {
      return item.id_cmp_informe_procesal == idCmp;
    });
    if (isDelete.length > 1) {
      this.infoProcesal.multiData.splice(index, 1);
    }
  }
  sendDinamycForm() {
    if (this.validarFormulario()) {
      let getSession = this.session.getSession();
      this.infoProcesal.usuario = getSession.user;
      this.infoProcesal.multiData.forEach(item => {
        if (item.id_cmp_informe_procesal == 1) {
          item.value = moment__WEBPACK_IMPORTED_MODULE_12__(item.value).format('yyyy-MM-DD');
        }
      });
      this.procesoActivoService.insertInformeProcesal(this.infoProcesal).subscribe({
        next: res => {
          if (res.status == 200) {
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('success', `Proceso realizado exitosamente.`, `${res.msg}`);
            this.message.add(message_model);
          } else {
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error: se ha presentado un error `, `${res.msg}`);
            this.message.add(message_model);
          }
        },
        error: error => {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error: se ha presentado un error `, `${error.error.msg}`);
          this.message.add(message_model);
        }
      });
    }
  }
  validarFormulario(campoForm = 'vistaForm') {
    if (this.formGroup.fbInfProcesal.valid) {
      return true;
    } else {
      this.formValid[campoForm] = true;
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error: Completa los campos requeridos `, `El sistema validó que te faltan campos por completar, por favor intenta de nuevo.`);
      this.message.add(message_model);
      return false;
    }
  }
  expireCaptchat(event) {
    let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Token expirado `, `Tiempo minimo del token a expirado.`);
    this.message.add(message_model);
  }
  acceptedCaptcha(event) {
    this.sendCaptcha.captcha = event;
  }
  deleteProcesoActivo() {
    if (this.sendCaptcha.captcha) {
      let ses = this.session.getStorage('user', 'json');
      let sendData = new src_app_models_home_procesos_captchaSendData__WEBPACK_IMPORTED_MODULE_11__.CaptchaSendDataModel();
      sendData.captcha = this.sendCaptcha.captcha;
      sendData.id = this.sendCaptcha.id;
      sendData.group_users = ses.data.group_users;
      sendData.parent = ses.data.parent;
      sendData.name_user = ses.data.nombre;
      sendData.username = ses.data.username;
      this.procesoActivoService.deleteProcesoActivo(sendData).subscribe({
        next: res => {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('success', `Accion realizada correctamente: ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
          this.showModalD = false;
          window.location.reload();
        },
        error: error => {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error `, `${error.error.msg}`);
          this.message.add(message_model);
        }
      });
    } else {
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('warn', `Formulario incompleto.`, `Es necesario completar el formulario para continuar.`);
      this.message.add(message_model);
    }
  }
}
ProcesosActivosComponent.ɵfac = function ProcesosActivosComponent_Factory(t) {
  return new (t || ProcesosActivosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_services_home_reportes_procesos_activos_service__WEBPACK_IMPORTED_MODULE_14__.ProcesosActivosService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_15__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_services_home_audiencia_audiencia_service__WEBPACK_IMPORTED_MODULE_16__.AudienciaService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_28__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_29__.MessageService));
};
ProcesosActivosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
  type: ProcesosActivosComponent,
  selectors: [["app-procesos-activos"]],
  decls: 33,
  vars: 4,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["tamanio", "70vw", 3, "visible", "closeModal"], ["pTemplate", "title"], ["pTemplate", "footer"], [3, "visible", "closeModal"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color"], [1, "grid", "p-fluid"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "grid", "p-fluit"], [1, "col-12", "xl:col-6", "md:col-6"], ["placeHolder", "Demandante/Demandado", "styleInput", "help-text", 3, "model", "grupo", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Radicado", "styleInput", "help-text", 3, "model", "grupo", "placeHolderActive", "disabledInputText", "modelChange"], ["nameButton", "Consultar", 3, "eventEmiter"], ["nameButton", "Generar a excel reporte notificaciones", "messageTooltip", "Detalle", "iconClass", "pi pi-file-excel", "clase", "p-button-rounded p-button-success p-button-outlined", 3, "icon", "showTooltip", "eventEmiter"], ["nameActionsLeft", "acciones", 3, "cols", "loading", "data", "paginador", "filtroGeneral", "totalRecords", "lazy", "fixStyleTable", "stripedTable", "rows", "actionsShow", "onChangePage"], ["pTemplate", "actions"], [1, "col-4"], ["messageTooltip", "Programar", "iconClass", "pi pi-calendar-plus", "clase", "p-button-rounded p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["messageTooltip", "Inf procesal", "iconClass", "pi pi-pencil", "clase", "p-button-rounded p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["messageTooltip", "Eliminar registro", "iconClass", "pi pi-times", "clase", "p-button-rounded p-button-danger p-button-text", 3, "icon", "showTooltip", "eventEmiter"], [1, "grid", "p-5"], [1, "col-6"], [2, "color", "green"], [2, "color", "red"], [1, "col-12", "p-4"], ["class", "col-12 p-3", 4, "ngFor", "ngForOf"], [1, "col-12", "p-3"], [1, "grid", 2, "border-bottom", "solid 1px gray"], [1, "col-8"], [3, "ngSwitch"], ["class", "col-12", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngIf", "ngIfElse"], ["elseInputText", ""], [1, "col-12", 2, "text-align", "end"], ["iconClass", "pi pi-plus", "clase", "p-button-rounded mr-1", 3, "icon", "eventEmiter"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-11", "pl-4"], ["placeHolder", "Ingrese el campo requerido", "styleInput", "help-text", 3, "model", "grupo", "valid", "disabledInputText", "requerido", "modelChange"], [1, "col-1", 2, "padding-top", "25px"], ["iconClass", "pi pi-times", "clase", "p-button-rounded p-button-danger", 3, "icon", "eventEmiter"], ["elseInputTextLong", ""], ["heightTamanio", "35px", "placeholder", "Ingrese el registro requerido.", 3, "model", "grupo", "valid", "requerido", "modelChange"], ["elseInputNumber", ""], ["placeHolder", "Ingrese el registro requerido", "styleInput", "help-text", "tipo", "number", 3, "valid", "model", "grupo", "disabledInputText", "requerido", "modelChange"], ["elseMultiSelect", ""], ["selectLabel", "Seleccione un item", "name", "Seleccione un item", "placeholder", "Seleccione un item", 3, "options", "model", "grupo", "modelChange"], ["elseDatePicker", ""], ["nombre", "fechaDesde", "placeholder", "yyyy-mm-dd", "label", "Fecha audiencia / Vencimiento ", "format", "yy-mm-dd", 3, "valid", "model", "grupo", "showIcon", "buttonBar", "requerido", "modelChange"], [1, "col-12", "pl-4"], ["clase", "p-button-danger", "nameButton", "Cancelar", 3, "eventEmiter"], ["clase", "p-button-success", "nameButton", "Guardar", 3, "eventEmiter"], [1, "flex", "justify-content-center"], [1, "grid", "mt-2"], [3, "siteKey", "errored", "resolved"], ["nameButton", "Eliminar", "clase", "p-button-danger", 3, "eventEmiter"], ["nameButton", "Cancelar", 3, "eventEmiter"], ["placeHolder", "Ciudad", "styleInput", "help-text", 3, "model", "grupo", "disabledInputText", "modelChange"], ["placeHolder", "Despacho", "styleInput", "help-text", 3, "model", "grupo", "disabledInputText", "modelChange"], ["placeHolder", "Radicaci\u00F3n", "styleInput", "help-text", 3, "model", "grupo", "disabledInputText", "modelChange"], ["placeHolder", "Proceso", "styleInput", "help-text", 3, "model", "grupo", "disabledInputText", "modelChange"], ["placeHolder", "Demandante", "styleInput", "help-text", 3, "model", "grupo", "disabledInputText", "modelChange"], ["placeHolder", "Demandado", "styleInput", "help-text", 3, "model", "grupo", "disabledInputText", "modelChange"], ["placeholder", "Detalle Audiencia Vencimiento", 3, "model", "grupo", "modelChange"], ["placeholder", "dd-mm-yy", "label", "Fecha Audiencia / Vencimiento", 3, "model", "showIcon", "modelChange"], ["nameButton", "Programar", 3, "eventEmiter"]],
  template: function ProcesosActivosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, ProcesosActivosComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, ProcesosActivosComponent_ng_template_6_Template, 4, 6, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div", 5)(8, "div", 0)(9, "div", 1)(10, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, ProcesosActivosComponent_ng_template_11_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, ProcesosActivosComponent_ng_template_12_Template, 8, 8, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "div", 0)(14, "div", 1)(15, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](16, ProcesosActivosComponent_ng_template_16_Template, 7, 30, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "modal-component", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("closeModal", function ProcesosActivosComponent_Template_modal_component_closeModal_17_listener() {
        return ctx.showModalInfo = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](18, ProcesosActivosComponent_ng_template_18_Template, 2, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](19, ProcesosActivosComponent_ng_template_19_Template, 20, 5, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](20, ProcesosActivosComponent_ng_template_20_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](21, "modal-component", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("closeModal", function ProcesosActivosComponent_Template_modal_component_closeModal_21_listener() {
        return ctx.showModalD = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](22, ProcesosActivosComponent_ng_template_22_Template, 2, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](23, ProcesosActivosComponent_ng_template_23_Template, 9, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](24, ProcesosActivosComponent_ng_template_24_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](25, "modal-component", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("closeModal", function ProcesosActivosComponent_Template_modal_component_closeModal_25_listener() {
        return ctx.showModalProgramar = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](26, ProcesosActivosComponent_ng_template_26_Template, 2, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](27, ProcesosActivosComponent_ng_template_27_Template, 22, 22, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](28, ProcesosActivosComponent_ng_template_28_Template, 1, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](29, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](30, "ngx-spinner", 10)(31, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](32, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("visible", ctx.showModalInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("visible", ctx.showModalD);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("visible", ctx.showModalProgramar);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitchCase, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_17__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_29__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_18__.ButtonComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_19__.SideMenuComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_20__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_21__.ModalComponentComponent, _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_22__.DatePickerComponent, _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_23__.TextAreaComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_24__.InputTextComponentComponent, _components_dropdown_component_dropdown_component_component__WEBPACK_IMPORTED_MODULE_25__.DropdownComponentComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_31__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_28__.NgxSpinnerComponent, ng_recaptcha__WEBPACK_IMPORTED_MODULE_32__.RecaptchaComponent],
  styles: [".title-color[_ngcontent-%COMP%] {\n  color: #6d84a3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9yZXBvcnRlcy9wcm9jZXNvcy1hY3Rpdm9zL3Byb2Nlc29zLWFjdGl2b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtY29sb3Ige1xyXG4gICAgY29sb3I6ICM2ZDg0YTM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1639:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/procesos-generales/procesos-generales.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcesosGeneralesComponent": () => (/* binding */ ProcesosGeneralesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_models_home_reports_filterGeneral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/reports/filterGeneral */ 5566);
/* harmony import */ var src_app_models_home_procesos_updateProceso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/home/procesos/updateProceso */ 7552);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/home/procesos/filterProcesos */ 1675);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_home_reportes_procesos_generales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/home/reportes/procesos-generales.service */ 4704);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 9129);



















function ProcesosGeneralesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
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
function ProcesosGeneralesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14)(1, "div", 1)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "app-side-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](3, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c2)));
  }
}
function ProcesosGeneralesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Ver mis procesos");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ProcesosGeneralesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_12_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r8.filterGeneral.demandante_demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 17)(4, "input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_12_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r10.filterGeneral.radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 17)(6, "input-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_12_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.filterGeneral.etiqueta = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 1)(8, "div")(9, "app-button-component", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventEmiter", function ProcesosGeneralesComponent_ng_template_12_Template_app_button_component_eventEmiter_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r12.consultarProcesos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r3.filterGeneral.demandante_demandado)("grupo", ctx_r3.fb)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r3.filterGeneral.radicacion)("grupo", ctx_r3.fb)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r3.filterGeneral.etiqueta)("grupo", ctx_r3.fb)("placeHolderActive", false)("disabledInputText", false);
  }
}
function ProcesosGeneralesComponent_ng_template_16_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16)(1, "div", 1)(2, "app-button-component", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventEmiter", function ProcesosGeneralesComponent_ng_template_16_ng_template_6_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const rowData_r14 = restoredCtx.elemento;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.registroSeleccionado(rowData_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
const _c4 = function () {
  return {
    field: "name_ciudad",
    header: "Ciudad"
  };
};
const _c5 = function () {
  return {
    field: "etiqueta_suscriptor",
    header: "Etiqueta"
  };
};
const _c6 = function () {
  return {
    field: "nameDespacho",
    header: "Despacho"
  };
};
const _c7 = function () {
  return {
    field: "codigo_23",
    header: "Radicaci\u00F3n",
    esRadicacion: true
  };
};
const _c8 = function () {
  return {
    field: "proceso",
    header: "Tipo proceso"
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
    field: "fecha_registro",
    header: "Fecha",
    isFecha: true
  };
};
const _c12 = function (a0, a1, a2, a3, a4, a5, a6, a7) {
  return [a0, a1, a2, a3, a4, a5, a6, a7];
};
function ProcesosGeneralesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 2)(2, "app-button-component", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventEmiter", function ProcesosGeneralesComponent_ng_template_16_Template_app_button_component_eventEmiter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.downloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "app-tabla-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onChangePage", function ProcesosGeneralesComponent_ng_template_16_Template_app_tabla_component_onChangePage_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.changePage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ProcesosGeneralesComponent_ng_template_16_ng_template_6_Template, 3, 2, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r4.listProceso)("cols", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction8"](21, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](13, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](14, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](15, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](16, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](17, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](18, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](19, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](20, _c11)))("totalRecords", ctx_r4.totalRecords)("actionsShow", true)("paginador", true)("lazy", true)("fixStyleTable", true)("stripedTable", true)("rows", 30)("filtroGeneral", false)("loading", ctx_r4.loadingTable);
  }
}
function ProcesosGeneralesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Editar registro.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ProcesosGeneralesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "input-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_19_Template_input_text_modelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.itemSelected.demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 17)(4, "input-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_19_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.itemSelected.demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 17)(6, "input-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_19_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r23.itemSelected.etiqueta_suscriptor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 17)(8, "input-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("modelChange", function ProcesosGeneralesComponent_ng_template_19_Template_input_text_modelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.itemSelected.expediente_digital = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r6.itemSelected.demandante)("grupo", ctx_r6.fbUpdate)("requerido", true)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r6.itemSelected.demandado)("grupo", ctx_r6.fbUpdate)("requerido", true)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r6.itemSelected.etiqueta_suscriptor)("grupo", ctx_r6.fbUpdate)("requerido", true)("placeHolderActive", false)("disabledInputText", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("model", ctx_r6.itemSelected.expediente_digital)("grupo", ctx_r6.fbUpdate)("placeHolderActive", false)("disabledInputText", false);
  }
}
function ProcesosGeneralesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30)(1, "app-button-component", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventEmiter", function ProcesosGeneralesComponent_ng_template_20_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r25.actualizarProceso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-button-component", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventEmiter", function ProcesosGeneralesComponent_ng_template_20_Template_app_button_component_eventEmiter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.showModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
class ProcesosGeneralesComponent {
  constructor(breadCrumService, procesosGeneralesService, session, message, spinner) {
    this.breadCrumService = breadCrumService;
    this.procesosGeneralesService = procesosGeneralesService;
    this.session = session;
    this.message = message;
    this.spinner = spinner;
    this.formSearchProcess = {};
    this.filterGeneral = new src_app_models_home_reports_filterGeneral__WEBPACK_IMPORTED_MODULE_0__.FilterGeneral();
    this.listProceso = new Array();
    this.itemSelected = new src_app_models_home_procesos_updateProceso__WEBPACK_IMPORTED_MODULE_1__.UpdateProceso();
    this.showModal = false;
    this.totalRecords = 0;
    this.loadingTable = false;
    this.startPage = {
      first: 0,
      rows: 30
    };
    this.filterProceso = new src_app_models_home_procesos_filterProcesos__WEBPACK_IMPORTED_MODULE_3__.FilterProceso();
    this.urlFinal = '';
    this.fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({});
    this.fbUpdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({});
  }
  ngOnInit() {
    this.breadCrumService.setItems([{
      label: 'Reportes'
    }, {
      label: 'Listado procesos generales'
    }]);
    this.servicePage(this.startPage);
  }
  changePage(event) {
    this.servicePage(event);
  }
  consultarProcesos() {
    this.servicePage(this.startPage);
  }
  registroSeleccionado(event) {
    this.itemSelected = event;
    this.showModal = true;
  }
  servicePage(page) {
    this.loadingTable = true;
    let sessionUser = this.session.getStorage('user', 'json');
    this.filterGeneral.group_users = sessionUser.data.group_users;
    this.filterGeneral.parent = sessionUser.data.parent;
    this.filterGeneral.etiqueta = this.filterGeneral.etiqueta ? this.filterGeneral.etiqueta : '';
    this.filterGeneral.radicacion = this.filterGeneral.radicacion ? this.filterGeneral.radicacion : '';
    this.filterGeneral.demandante_demandado = this.filterGeneral.demandante_demandado ? this.filterGeneral.demandante_demandado : '';
    this.filterGeneral.from = page.first;
    this.filterGeneral.rows = page.rows;
    this.procesosGeneralesService.getListProcesos(this.filterGeneral).subscribe({
      next: res => {
        this.loadingTable = false;
        this.listProceso = res.data;
        this.totalRecords = res.count_rows;
        console.log(this.totalRecords);
      },
      error: error => {
        this.loadingTable = false;
        console.log(error);
      }
    });
  }
  actualizarProceso() {
    if (this.fbUpdate.status == 'VALID') {
      this.spinner.show();
      this.procesosGeneralesService.updateProceso(this.itemSelected).subscribe({
        next: res => {
          this.spinner.hide();
          if (res.status == 200) {
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_2__.MessageModel('success', `Exito!`, `${res.msg}`);
            this.message.add(message_model);
          } else {
            let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_2__.MessageModel('error', `Error ${res.status} `, `${res.msg}`);
            this.message.add(message_model);
          }
          this.showModal = false;
        },
        error: error => {
          console.log(error);
          this.showModal = false;
          this.spinner.hide();
        }
      });
    } else {
      let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_2__.MessageModel('error', `Formulario incompleto `, `Los campos Demandante y demandado son obligatorios`);
      this.message.add(message_model);
    }
  }
  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');
    this.filterProceso.username = session.data.username;
    this.filterProceso.name_user = session.data.nombre;
    this.filterProceso.name_file = 'Reporte_listado_general';
    this.filterProceso.group_users = session.data.group_users;
    this.filterProceso.parent = session.data.parent;
    this.filterProceso.demandante_demandado = '';
    this.filterProceso.radicacion = '';
    this.filterProceso.etiqueta = '';
    this.procesosGeneralesService.getReportListProcesos(this.filterProceso).subscribe({
      next: res => {
        if (res.status == 200) {
          let listUrl = res.url.split('/');
          this.urlFinal = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiBaseDocs + res.url;
          this.spinner.hide();
          fetch(this.urlFinal).then(response => response.blob()).then(blod => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blod);
            link.download = listUrl[2];
            link.click();
          }).catch(console.error).then(error => {
            if (error != undefined) {
              let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_2__.MessageModel('error', `Se ha presentado un error`, `No fue posible descargar el documento, estamos trabajando para resolver este error`);
              this.message.add(message_model);
            }
          });
        } else {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_2__.MessageModel('error', `Error ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
ProcesosGeneralesComponent.ɵfac = function ProcesosGeneralesComponent_Factory(t) {
  return new (t || ProcesosGeneralesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_home_reportes_procesos_generales_service__WEBPACK_IMPORTED_MODULE_6__.ProcesosGeneralesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_7__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerService));
};
ProcesosGeneralesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ProcesosGeneralesComponent,
  selectors: [["app-procesos-generales"]],
  decls: 25,
  vars: 2,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], [3, "visible", "closeModal"], ["pTemplate", "title"], ["pTemplate", "footer"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color"], [1, "grid", "p-fluid"], [1, "col-12", "mt-2", 3, "itemsMenu"], [1, "grid", "p-fluit"], [1, "col-12", "xl:col-6", "md:col-6"], ["placeHolder", "Demandante / Demandado", "styleInput", "help-text", 3, "model", "grupo", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Radicado", "styleInput", "help-text", 3, "model", "grupo", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Etiqueta", "styleInput", "help-text", 3, "model", "grupo", "placeHolderActive", "disabledInputText", "modelChange"], ["nameButton", "Consultar", 3, "eventEmiter"], ["nameButton", "Generar a excel reporte notificaciones", "messageTooltip", "Detalle", "iconClass", "pi pi-file-excel", "clase", "p-button-rounded p-button-success p-button-outlined", 3, "icon", "showTooltip", "eventEmiter"], ["nameActionsLeft", "Editar", "paginationPosition", "both", 3, "data", "cols", "totalRecords", "actionsShow", "paginador", "lazy", "fixStyleTable", "stripedTable", "rows", "filtroGeneral", "loading", "onChangePage"], ["pTemplate", "actions"], ["messageTooltip", "Eliminar registro", "iconClass", "pi pi-file-edit", "clase", "p-button-rounded p-button-text", 3, "icon", "showTooltip", "eventEmiter"], ["placeHolder", "Demandante", "styleInput", "help-text", 3, "model", "grupo", "requerido", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Demandado", "styleInput", "help-text", 3, "model", "grupo", "requerido", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Etiqueta", "styleInput", "help-text", 3, "model", "grupo", "requerido", "placeHolderActive", "disabledInputText", "modelChange"], ["placeHolder", "Expediente Digital (URL)", "styleInput", "help-text", 3, "model", "grupo", "placeHolderActive", "disabledInputText", "modelChange"], [2, "text-align", "end"], ["nameButton", "Editar", 3, "eventEmiter"], ["clase", "p-button-danger", "nameButton", "Cancelar", 3, "eventEmiter"]],
  template: function ProcesosGeneralesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ProcesosGeneralesComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ProcesosGeneralesComponent_ng_template_6_Template, 4, 6, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 5)(8, "div", 0)(9, "div", 1)(10, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ProcesosGeneralesComponent_ng_template_11_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ProcesosGeneralesComponent_ng_template_12_Template, 10, 12, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 0)(14, "div", 1)(15, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ProcesosGeneralesComponent_ng_template_16_Template, 7, 30, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "modal-component", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeModal", function ProcesosGeneralesComponent_Template_modal_component_closeModal_17_listener() {
        return ctx.showModal = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ProcesosGeneralesComponent_ng_template_18_Template, 2, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ProcesosGeneralesComponent_ng_template_19_Template, 9, 19, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, ProcesosGeneralesComponent_ng_template_20_Template, 3, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ngx-spinner", 9)(23, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", ctx.showModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_8__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_9__.ButtonComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__.SideMenuComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_11__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_12__.ModalComponentComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_13__.InputTextComponentComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent],
  styles: [".title-color[_ngcontent-%COMP%] {\n  color: #6d84a3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvdmlyZWQvaG9tZS9yZXBvcnRlcy9wcm9jZXNvcy1nZW5lcmFsZXMvcHJvY2Vzb3MtZ2VuZXJhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjNmQ4NGEzO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4625:
/*!*************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/reportes-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportesRoutingModule": () => (/* binding */ ReportesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _procesos_generales_procesos_generales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procesos-generales/procesos-generales.component */ 1639);
/* harmony import */ var _procesos_activos_procesos_activos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procesos-activos/procesos-activos.component */ 9627);
/* harmony import */ var _eliminar_procesos_eliminar_procesos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eliminar-procesos/eliminar-procesos.component */ 9539);
/* harmony import */ var _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitudes/solicitudes.component */ 1622);
/* harmony import */ var _consulta_procesal_consulta_procesal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta-procesal/consulta-procesal.component */ 9625);
/* harmony import */ var _historial_procesos_historial_procesos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-procesos/historial-procesos.component */ 7919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: 'procesos_generales',
  component: _procesos_generales_procesos_generales_component__WEBPACK_IMPORTED_MODULE_0__.ProcesosGeneralesComponent
}, {
  path: 'procesos_activos',
  component: _procesos_activos_procesos_activos_component__WEBPACK_IMPORTED_MODULE_1__.ProcesosActivosComponent
}, {
  path: 'eliminar_procesos',
  component: _eliminar_procesos_eliminar_procesos_component__WEBPACK_IMPORTED_MODULE_2__.EliminarProcesosComponent
}, {
  path: 'historial_procesos',
  component: _historial_procesos_historial_procesos_component__WEBPACK_IMPORTED_MODULE_5__.HistorialProcesosComponent
}, {
  path: 'mis_solicitudes',
  component: _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_3__.SolicitudesComponent
}, {
  path: 'consulta_procesal',
  component: _consulta_procesal_consulta_procesal_component__WEBPACK_IMPORTED_MODULE_4__.ConsultaProcesalComponent
}];
class ReportesRoutingModule {}
ReportesRoutingModule.ɵfac = function ReportesRoutingModule_Factory(t) {
  return new (t || ReportesRoutingModule)();
};
ReportesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ReportesRoutingModule
});
ReportesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ReportesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 1989:
/*!********************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/reportes.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportesComponent": () => (/* binding */ ReportesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ReportesComponent {}
ReportesComponent.ɵfac = function ReportesComponent_Factory(t) {
  return new (t || ReportesComponent)();
};
ReportesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ReportesComponent,
  selectors: [["app-reportes"]],
  decls: 1,
  vars: 0,
  template: function ReportesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1446:
/*!*****************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/reportes.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportesModule": () => (/* binding */ ReportesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportes-routing.module */ 4625);
/* harmony import */ var _reportes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportes.component */ 1989);
/* harmony import */ var _procesos_generales_procesos_generales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./procesos-generales/procesos-generales.component */ 1639);
/* harmony import */ var _procesos_activos_procesos_activos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./procesos-activos/procesos-activos.component */ 9627);
/* harmony import */ var _eliminar_procesos_eliminar_procesos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eliminar-procesos/eliminar-procesos.component */ 9539);
/* harmony import */ var _historial_procesos_historial_procesos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-procesos/historial-procesos.component */ 7919);
/* harmony import */ var _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitudes/solicitudes.component */ 1622);
/* harmony import */ var _consulta_procesal_consulta_procesal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consulta-procesal/consulta-procesal.component */ 9625);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_utils_despachos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils/despachos.service */ 614);
/* harmony import */ var src_app_services_utils_corporaciones_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utils/corporaciones.service */ 3980);
/* harmony import */ var src_app_services_utils_municipios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utils/municipios.service */ 3389);
/* harmony import */ var src_app_services_utils_departamentos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/utils/departamentos.service */ 4643);
/* harmony import */ var src_app_services_home_reportes_procesos_generales_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/home/reportes/procesos-generales.service */ 4704);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_home_reportes_procesos_activos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/home/reportes/procesos-activos.service */ 6438);
/* harmony import */ var src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/date-picker/date-picker.module */ 3228);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-recaptcha */ 9191);
/* harmony import */ var src_app_services_home_reportes_eliminar_procesos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/home/reportes/eliminar-procesos.service */ 2509);
/* harmony import */ var src_app_services_home_reportes_historial_procesos_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/home/reportes/historial-procesos.service */ 1934);
/* harmony import */ var src_app_services_home_reportes_solicitudes_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/home/reportes/solicitudes.service */ 9067);
/* harmony import */ var src_app_services_home_reportes_impulso_procesal_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/home/reportes/impulso-procesal.service */ 9024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);




























class ReportesModule {}
ReportesModule.ɵfac = function ReportesModule_Factory(t) {
  return new (t || ReportesModule)();
};
ReportesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: ReportesModule
});
ReportesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  providers: [src_app_services_utils_departamentos_service__WEBPACK_IMPORTED_MODULE_12__.DepartamentosService, src_app_services_utils_municipios_service__WEBPACK_IMPORTED_MODULE_11__.MunicipiosService, src_app_services_utils_corporaciones_service__WEBPACK_IMPORTED_MODULE_10__.CorporacionesService, src_app_services_utils_despachos_service__WEBPACK_IMPORTED_MODULE_9__.DespachosService, src_app_services_home_reportes_procesos_generales_service__WEBPACK_IMPORTED_MODULE_13__.ProcesosGeneralesService, primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService, src_app_services_home_reportes_procesos_activos_service__WEBPACK_IMPORTED_MODULE_14__.ProcesosActivosService, src_app_services_home_reportes_eliminar_procesos_service__WEBPACK_IMPORTED_MODULE_16__.EliminarProcesosService, src_app_services_home_reportes_historial_procesos_service__WEBPACK_IMPORTED_MODULE_17__.HistorialProcesosService, src_app_services_home_reportes_solicitudes_service__WEBPACK_IMPORTED_MODULE_18__.SolicitudesService, src_app_services_home_reportes_impulso_procesal_service__WEBPACK_IMPORTED_MODULE_19__.ImpulsoProcesalService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ModalComponentModule, src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_15__.DatePickerModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TextAreaModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.DropdownComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.FiltersDinamicsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_25__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__.RecaptchaFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](ReportesModule, {
    declarations: [_reportes_component__WEBPACK_IMPORTED_MODULE_1__.ReportesComponent, _procesos_generales_procesos_generales_component__WEBPACK_IMPORTED_MODULE_2__.ProcesosGeneralesComponent, _procesos_activos_procesos_activos_component__WEBPACK_IMPORTED_MODULE_3__.ProcesosActivosComponent, _eliminar_procesos_eliminar_procesos_component__WEBPACK_IMPORTED_MODULE_4__.EliminarProcesosComponent, _historial_procesos_historial_procesos_component__WEBPACK_IMPORTED_MODULE_5__.HistorialProcesosComponent, _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_6__.SolicitudesComponent, _consulta_procesal_consulta_procesal_component__WEBPACK_IMPORTED_MODULE_7__.ConsultaProcesalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.CardComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ButtonComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.SideMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TablaComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.ModalComponentModule, src_app_components_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_15__.DatePickerModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.TextAreaModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.InputTextComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.DropdownComponentModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__.FiltersDinamicsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_25__.ToastModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__.RecaptchaFormsModule]
  });
})();

/***/ }),

/***/ 1622:
/*!***********************************************************************************!*\
  !*** ./src/app/views/provired/home/reportes/solicitudes/solicitudes.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesComponent": () => (/* binding */ SolicitudesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_models_home_procesos_FilterSolicitudes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/home/procesos/FilterSolicitudes */ 9862);
/* harmony import */ var src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/home/procesos/historialProcesosFilter */ 5172);
/* harmony import */ var src_app_models_home_reports_solicitudes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/home/reports/solicitudes */ 7069);
/* harmony import */ var src_app_models_home_reports_updateSolicitud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/home/reports/updateSolicitud */ 7820);
/* harmony import */ var src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/login/utils/messageModel */ 3825);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/app.breadcrumb.service */ 3894);
/* harmony import */ var src_app_services_home_reportes_solicitudes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/home/reportes/solicitudes.service */ 9067);
/* harmony import */ var src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils/session-storage.service */ 9721);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/card-component/card-component.component */ 1747);
/* harmony import */ var _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/button-component/button-component.component */ 9385);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/side-menu/side-menu.component */ 3335);
/* harmony import */ var _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/tabla-component/tabla-component.component */ 3249);
/* harmony import */ var _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/modal-component/modal-component.component */ 8341);
/* harmony import */ var _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/input-text-component/input-text-component.component */ 4021);
/* harmony import */ var _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/filters-dinamics/filters-dinamics.component */ 8586);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ 9129);






















function SolicitudesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
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
function SolicitudesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 15)(1, "div", 1)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-side-menu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("itemsMenu", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](1, _c1)));
  }
}
function SolicitudesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Mis solicitudes");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}
function SolicitudesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-filters-dinamics", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventFilter", function SolicitudesComponent_ng_template_10_Template_app_filters_dinamics_eventFilter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r8.consultarSolicitudes($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showRadicacion", false)("showRango", false)("userID", ctx_r3.userIDSession);
  }
}
function SolicitudesComponent_div_11_ng_template_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-button-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function SolicitudesComponent_div_11_ng_template_3_ng_template_6_Template_app_button_component_eventEmiter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const rowData_r12 = restoredCtx.elemento;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r13.showEditItem(rowData_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", true)("showTooltip", true);
  }
}
const _c3 = function () {
  return {
    field: "sp_tipo",
    header: "Tipo",
    tipoEX: true
  };
};
const _c4 = function () {
  return {
    field: "depto",
    header: "Departamento"
  };
};
const _c5 = function () {
  return {
    field: "mun",
    header: "Ciudad"
  };
};
const _c6 = function () {
  return {
    field: "sp_id_despacho",
    header: "Despacho"
  };
};
const _c7 = function () {
  return {
    field: "sp_radicacion",
    header: "Radicado"
  };
};
const _c8 = function () {
  return {
    field: "sp_rad_23",
    header: "Radicado (23)"
  };
};
const _c9 = function () {
  return {
    field: "sp_demandante",
    header: "Demandante"
  };
};
const _c10 = function () {
  return {
    field: "sp_demandado",
    header: "Demandado"
  };
};
const _c11 = function () {
  return {
    field: "sp_descripcion",
    header: "Descripci\u00F3n"
  };
};
const _c12 = function () {
  return {
    field: "sp_fecha_ingreso",
    header: "Fecha Ingreso",
    isFecha: true
  };
};
const _c13 = function (a2) {
  return {
    field: "nameSuscriptor",
    header: "Suscriptor",
    show: a2
  };
};
const _c14 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
};
function SolicitudesComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 2)(2, "app-button-component", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function SolicitudesComponent_div_11_ng_template_3_Template_app_button_component_eventEmiter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r15.downloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 20)(4, "div", 1)(5, "app-tabla-component", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, SolicitudesComponent_div_11_ng_template_3_ng_template_6_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("icon", true)("showTooltip", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunctionV"](19, _c14, [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](7, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](8, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](9, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](10, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](11, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](12, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](13, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](14, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](15, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](16, _c12), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](17, _c13, ctx_r10.isParent ? false : true)]))("data", ctx_r10.listSolicitudes)("actionsShow", true)("totalRecords", ctx_r10.totalItems)("showTotalRecords", true);
  }
}
function SolicitudesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 1)(2, "app-card-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, SolicitudesComponent_div_11_ng_template_3_Template, 7, 31, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}
function SolicitudesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Editar registro proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function SolicitudesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 24)(3, "div", 25)(4, "input-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r17.itemSelected.depto = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 25)(6, "input-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r19.itemSelected.sp_radicacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "input-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.itemSelected.mun = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 25)(11, "input-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r21.itemSelected.sp_rad_23 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 24)(13, "div", 29)(14, "input-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.itemSelected.despacho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 24)(16, "div", 29)(17, "input-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r23.itemSelected.sp_demandante = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 24)(19, "div", 29)(20, "input-text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("modelChange", function SolicitudesComponent_ng_template_14_Template_input_text_modelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r24.itemSelected.sp_demandado = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.depto)("disabledInputText", true)("placeHolderActive", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.sp_radicacion)("disabledInputText", false)("placeHolderActive", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.mun)("disabledInputText", true)("placeHolderActive", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.sp_rad_23)("disabledInputText", false)("placeHolderActive", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.despacho)("disabledInputText", true)("placeHolderActive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.sp_demandante)("disabledInputText", true)("placeHolderActive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("model", ctx_r6.itemSelected.sp_demandado)("disabledInputText", true)("placeHolderActive", true);
  }
}
function SolicitudesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-button-component", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function SolicitudesComponent_ng_template_15_Template_app_button_component_eventEmiter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r25.actualizarSolicitud());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "app-button-component", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("eventEmiter", function SolicitudesComponent_ng_template_15_Template_app_button_component_eventEmiter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.showModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
class SolicitudesComponent {
  constructor(breadCrumService, solicitudesService, session, spinner, message) {
    this.breadCrumService = breadCrumService;
    this.solicitudesService = solicitudesService;
    this.session = session;
    this.spinner = spinner;
    this.message = message;
    this.fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({});
    this.listSolicitudes = Array();
    this.filterProcesos = new src_app_models_home_procesos_historialProcesosFilter__WEBPACK_IMPORTED_MODULE_1__.HistorialProcesosModel();
    this.userIDSession = 0;
    this.showModal = false;
    this.itemSelected = new src_app_models_home_reports_solicitudes__WEBPACK_IMPORTED_MODULE_2__.SolicitudesModel();
    this.filterSolicitudes = new src_app_models_home_procesos_FilterSolicitudes__WEBPACK_IMPORTED_MODULE_0__.FilterSolicitudes();
    this.urlFinal = '';
    this.isParent = false;
    this.totalItems = 0;
    this.breadCrumService.setItems([{
      label: 'Reportes'
    }, {
      label: 'Mis solicitudes'
    }]);
    let ses = this.session.getStorage('user', 'json');
    this.userIDSession = ses.user;
  }
  consultarSolicitudes(event) {
    this.spinner.show();
    this.filterProcesos = event;
    let ses = this.session.getStorage('user', 'json');
    this.filterProcesos.group_users = ses.data.group_users;
    this.filterProcesos.parent = ses.data.parent;
    this.solicitudesService.getListSolicitudes(this.filterProcesos).subscribe({
      next: res => {
        this.spinner.hide();
        this.isParent = res.isParent;
        this.listSolicitudes = res.data;
        this.totalItems = res.count_rows;
        console.log(this.listSolicitudes);
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  showEditItem(event) {
    this.itemSelected = event;
    this.showModal = true;
  }
  actualizarSolicitud() {
    this.spinner.show();
    let update = new src_app_models_home_reports_updateSolicitud__WEBPACK_IMPORTED_MODULE_3__.UpdateSolicitud();
    update.sp_id_proceso = this.itemSelected.sp_id_proceso;
    update.sp_radicacion = this.itemSelected.sp_radicacion.toString();
    update.sp_rad_23 = this.itemSelected.sp_rad_23;
    this.solicitudesService.updateSolicitud(update).subscribe({
      next: res => {
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('success', `Proceso exitoso!`, `${res.msg}`);
        this.message.add(message_model);
        this.spinner.hide();
        this.showModal = false;
      },
      error: error => {
        this.spinner.hide();
        let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Se ha presentado un error!`, `${error.error.msg}`);
        this.message.add(message_model);
      }
    });
  }
  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');
    this.filterSolicitudes.username = session.data.username;
    this.filterSolicitudes.name_user = session.data.nombre;
    this.filterSolicitudes.name_file = 'Mis_procesos';
    this.filterSolicitudes.group_users = session.data.group_users;
    this.filterSolicitudes.parent = session.data.parent;
    this.filterSolicitudes.depto = this.filterProcesos.depto;
    this.filterSolicitudes.municipio = this.filterProcesos.municipio;
    this.filterSolicitudes.corporacion = this.filterProcesos.corporacion;
    this.filterSolicitudes.despacho = this.filterProcesos.despacho;
    this.filterSolicitudes.userChild = this.filterProcesos.userChild;
    this.solicitudesService.getReportListProcesos(this.filterSolicitudes).subscribe({
      next: res => {
        if (res.status == 200) {
          let listUrl = res.url.split('/');
          this.urlFinal = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseDocs + res.url;
          this.spinner.hide();
          fetch(this.urlFinal).then(response => {
            return response.blob();
          }).then(blod => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blod);
            link.download = listUrl[2];
            link.click();
          }).catch(console.error).then(error => {
            if (error != undefined) {
              let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Se ha presentado un error`, `No fue posible descargar el documento, estamos trabajando para resolver este error`);
              this.message.add(message_model);
            }
          });
        } else {
          let message_model = new src_app_models_login_utils_messageModel__WEBPACK_IMPORTED_MODULE_4__.MessageModel('error', `Error ${res.status}`, `${res.msg}`);
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
SolicitudesComponent.ɵfac = function SolicitudesComponent_Factory(t) {
  return new (t || SolicitudesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_utils_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_home_reportes_solicitudes_service__WEBPACK_IMPORTED_MODULE_7__.SolicitudesService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_utils_session_storage_service__WEBPACK_IMPORTED_MODULE_8__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_19__.MessageService));
};
SolicitudesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: SolicitudesComponent,
  selectors: [["app-solicitudes"]],
  decls: 20,
  vars: 3,
  consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "col-9"], ["class", "grid p-fluit mt-2", 4, "ngIf"], [3, "visible", "closeModal"], ["pTemplate", "title"], ["pTemplate", "footer"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"], [1, "flex", "flex-column-reverse"], [1, "flex", "align-items-center", "justify-content-center", "mt-2"], [1, "title-color", "mt-3"], [1, "grid", "p-fluit"], [1, "col-12", "mt-2", 3, "itemsMenu"], [3, "showRadicacion", "showRango", "userID", "eventFilter"], [1, "grid", "p-fluit", "mt-2"], ["nameButton", "Generar a excel reporte mis solicitudes", "messageTooltip", "Detalle", "iconClass", "pi pi-file-excel", "clase", "p-button-rounded p-button-success p-button-outlined", 3, "icon", "showTooltip", "eventEmiter"], [1, "grid", "p-fluid", "p-2"], ["nameActionsLeft", "Editar", 3, "cols", "data", "actionsShow", "totalRecords", "showTotalRecords"], ["pTemplate", "actions"], ["messageTooltip", "Editar", "iconClass", "pi pi-file-edit", "clase", "p-button-rounded p-button-text", 3, "icon", "showTooltip", "eventEmiter"], [1, "grid", "p-fluid"], [1, "col-6", "p-2"], ["placeHolder", "Departamento", "styleInput", "help-text", 3, "model", "disabledInputText", "placeHolderActive", "modelChange"], ["placeHolder", "Radicado", "styleInput", "help-text", "tipo", "number", 3, "model", "disabledInputText", "placeHolderActive", "modelChange"], ["placeHolder", "Radicado 23 digitos", "styleInput", "help-text", 3, "model", "disabledInputText", "placeHolderActive", "modelChange"], [1, "col-6"], ["placeHolder", "Despacho", "styleInput", "help-text", 3, "model", "disabledInputText", "placeHolderActive", "modelChange"], ["placeHolder", "Demandante", "styleInput", "help-text", 3, "model", "disabledInputText", "placeHolderActive", "modelChange"], ["placeHolder", "Demandado", "styleInput", "help-text", 3, "model", "disabledInputText", "placeHolderActive", "modelChange"], ["clase", "p-button-success", "nameButton", "Editar", 3, "eventEmiter"], ["nameButton", "Cancelar", 3, "eventEmiter"]],
  template: function SolicitudesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, SolicitudesComponent_ng_template_5_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, SolicitudesComponent_ng_template_6_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 5)(8, "app-card-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, SolicitudesComponent_ng_template_9_Template, 4, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, SolicitudesComponent_ng_template_10_Template, 1, 3, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, SolicitudesComponent_div_11_Template, 4, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "modal-component", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeModal", function SolicitudesComponent_Template_modal_component_closeModal_12_listener() {
        return ctx.showModal = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, SolicitudesComponent_ng_template_13_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, SolicitudesComponent_ng_template_14_Template, 21, 21, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, SolicitudesComponent_ng_template_15_Template, 2, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "ngx-spinner", 10)(18, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.listSolicitudes.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", ctx.showModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("fullScreen", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _components_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_9__.CardComponentComponent, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, _components_button_component_button_component_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponentComponent, _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_11__.SideMenuComponent, _components_tabla_component_tabla_component_component__WEBPACK_IMPORTED_MODULE_12__.TablaComponentComponent, _components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_13__.ModalComponentComponent, _components_input_text_component_input_text_component_component__WEBPACK_IMPORTED_MODULE_14__.InputTextComponentComponent, _components_filters_dinamics_filters_dinamics_component__WEBPACK_IMPORTED_MODULE_15__.FiltersDinamicsComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_21__.Toast, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_views_provired_home_reportes_reportes_module_ts.js.map