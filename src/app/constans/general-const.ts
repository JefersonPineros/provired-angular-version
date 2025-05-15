export class GeneralConst {
  public static GENERAL = {
    DATE_LANGUAJE: {
      dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agostos',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'ABr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
    },
  };

  public static RANGO = [
    {
      key: '1',
      value: '1 y 30 Dias',
    },
    {
      key: '2',
      value: '31 y 60 Dias',
    },
    {
      key: '3',
      value: 'Mayor a 61 Dias',
    },
    {
      key: '4',
      value: 'Sin actuaciones',
    },
    {
      key: '5',
      value: 'Todos',
    },
  ];

  public static CONTROLLERS_METHODS = [
    {
      id: 0,
      controller: 'User',
      method: 'getUser',
    },
    {
      id: 1,
      controller: 'Audiencias',
      method: 'getVencimientos',
    },
    {
      id: 2,
      controller: 'Audiencias',
      method: 'getAudiencias',
    },
    {
      id: 3,
      controller: 'Audiencias',
      method: 'getAudienciasId',
    },
    {
      id: 4,
      controller: 'Audiencias',
      method: 'updateAudiencias',
    },
    {
      id: 5,
      controller: 'Audiencias',
      method: 'deleteAudiencias',
    },
    {
      id: 6,
      controller: 'Audiencias',
      method: 'insertAudiencias',
    },
    {
      id: 7,
      controller: 'Audiencias',
      method: 'exportExcel',
    },
    {
      id: 8,
      controller: 'genericos/Departamento',
      method: 'getData',
    },
    {
      id: 9,
      controller: 'genericos/Municipio',
      method: 'getData',
    },
    {
      id: 10,
      controller: 'genericos/Corporacion',
      method: 'getData',
    },
    {
      id: 11,
      controller: 'genericos/Corporacion',
      method: 'getDataIdMun',
    },
    {
      id: 12,
      controller: 'genericos/Municipio',
      method: 'getDataIdDepto',
    },
    {
      id: 13,
      controller: 'genericos/Despacho',
      method: 'getData',
    },
    {
      id: 14,
      controller: 'genericos/Despacho',
      method: 'getDataIdCorp',
    },
    {
      id: 15,
      controller: 'reportes/ListadoProcesosGenerales',
      method: 'getData',
    },

    {
      id: 16,
      controller: 'reportes/ListadoProcesosGenerales',
      method: 'updateData',
    },
    {
      id: 17,
      controller: 'reportes/ListadoProcesosGenerales',
      method: 'exportExcel',
    },

    {
      id: 18,
      controller: 'reportes/ListadoProcesosActivos',
      method: 'getData',
    },
    {
      id: 19,
      controller: 'reportes/Masivos',
      method: 'getData',
    },
    {
      id: 20,
      controller: 'reportes/Masivos',
      method: 'deleteAudiencias',
    },
    {
      id: 21,
      controller: 'reportes/Masivos',
      method: 'transferirData',
    },
    {
      id: 22,
      controller: 'User',
      method: 'getChildParents',
    },
    {
      id: 23,
      controller: 'reportes/HistorialProcesos',
      method: 'getData',
    },
    {
      id: 24,
      controller: 'reportes/HistorialProcesos',
      method: 'getActuacion',
    },
    {
      id: 25,
      controller: 'reportes/MisSolicitudes',
      method: 'getData',
    },
    {
      id: 26,
      controller: 'reportes/MisSolicitudes',
      method: 'updateData',
    },
    {
      id: 27,
      controller: 'reportes/MisSolicitudes',
      method: 'exportExcel',
    },
    {
      id: 28,
      controller: 'reportes/ImpulsoProcesal',
      method: 'getData',
    },
    {
      id: 29,
      controller: 'reportes/ImpulsoProcesal',
      method: 'exportExcel',
    },
    {
      id: 30,
      controller: 'ReporteNotificaciones',
      method: 'getData',
    },
    {
      id: 31,
      controller: 'ReporteNotificaciones',
      method: 'exportExcel',
    },
    {
      id: 32,
      controller: 'reportes/EmailDespachos',
      method: 'getData',
    },
    {
      id: 33,
      controller: 'procesos/NewProceso',
      method: 'insertData',
    },
    {
      id: 34,
      controller: 'User',
      method: 'getTerminos',
    },
    {
      id: 35,
      controller: 'reportes/ListadoProcesosActivos',
      method: 'getDataInformeProcesal',
    },
    {
      id: 36,
      controller: 'reportes/ListadoProcesosActivos',
      method: 'insertInformeProcesal',
    },
    {
      id: 37,
      controller: 'reportes/ListadoProcesosActivos',
      method: 'exportExcelInformeProcesal',
    },
    {
      id: 38,
      controller: 'reportes/ListadoProcesosActivos',
      method: 'exportExcel',
    },
    {
      id: 39,
      controller: 'reportes/ListadoProcesosActivos',
      method: 'deleteData',
    },
    {
      id: 40,
      controller: 'User',
      method: 'getTerminos',
    },
    {
      id: 41,
      controller: 'User',
      method: 'updateTerminos',
    },
  ];
}
