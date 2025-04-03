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
      controller: 'User',
      method: 'getUser',
    },
    {
      controller: 'Audiencias',
      method: 'getVencimientos',
    },
    {
      controller: 'Audiencias',
      method: 'getAudiencias',
    },
    {
      controller: 'Audiencias',
      method: 'getAudienciasId',
    },
    {
      controller: 'Audiencias',
      method: 'updateAudiencias',
    },
    {
      controller: 'Audiencias',
      method: 'deleteAudiencias',
    },
    {
      controller: 'Audiencias',
      method: 'insertAudiencias',
    },
    {
      controller: 'Audiencias',
      method: 'exportExcel',
    },
  ];
}
