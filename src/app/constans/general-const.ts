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
  ];
}
