export class UserSuscriptor {
  constructor(
    public cedula_nit?: string,
    public nombre?: string,
    public direccion_of?: string,
    public telefono_of?: string,
    public direccion_re?: string,
    public telefono_re?: string,
    public celular?: string,
    public email?: string,
    public tarjeta_prof?: string,
    public recuperacion_cartera?: string,
    public derecho_corporativo?: string,
    public derecho_civil?: string,
    public derecho_mercantil?: string,
    public derecho_constitucional?: string,
    public derecho_laboral?: string,
    public derecho_penal?: string,
    public derecho_fiscal?: string,
    public derecho_migratorio?: string,
    public prop_intelectual?: string,
    public derecho_internacional?: string,
    public derecho_ambiental?: string,
    public derecho_familia?: string,
    public derecho_admin?: string,
    public otros?: string,
    public otros_texto?: string,
    public dir_especialistas?: string,
    public estado?: string,
    public fecha_crea?: Date,
    public fecha_modi?: Date,
    public fecha_acepta?: Date,
    public fecha_vence?: Date,
    public tipo_cliente?: string,
    public infodespachos?: string,
    public misprocesosauto?: string,
    public avisosderemate?: string,
    public historialprocesos?: string,
    public misprocesosalerta?: string,
    public misprocesos?: string,
    public misprocesospremium?: string,
    public duracionsuscripcion?: number,
    public fecha_renova?: Date,
    public username?: string,
    public valor?: number,
    public informe_procesal?: string,
  ) { }
}
