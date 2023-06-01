export class Diseno {
    _id?: number;
    nombre_propio: string;
    origen_km: string;
    destino_km: string;
    origen_coordenadas: string;
    destino_coordenadas: string;
    longitud: number;
    diametro_mm: number;
    diametro_inch: number;
    espesor_pared_mm: number;
    espesor_pared_inch: number;
    especificacion_material: string;
    temperatura_diseno_c: number;
    temperatura_diseno_f: number;
    fecha_fabricacion: string;
    resistencia_traccion: number;
    elemento_maximo_c: string;
    limite_elastico: number;
    fecha_construccion: string;
    metodo_recubrimiento: string;
    tipo_suelo: string;
    material_relleno: string;
    proteccion_catodica: string;
    tipo_recubrimiento: string;

    constructor(
        nombre_propio: string,
        origen_km: string,
        destino_km: string,
        origen_coordenadas: string,
        destino_coordenadas: string,
        longitud: number,
        diametro_mm: number,
        diametro_inch: number,
        espesor_pared_mm: number,
        espesor_pared_inch: number,
        especificacion_material: string,
        temperatura_diseno_c: number,
        temperatura_diseno_f: number,
        fecha_fabricacion: string,
        resistencia_traccion: number,
        elemento_maximo_c: string,
        limite_elastico: number,
        fecha_construccion: string,
        metodo_recubrimiento: string,
        tipo_suelo: string,
        material_relleno: string,
        proteccion_catodica: string,
        tipo_recubrimiento: string,
    )
    {
        this.nombre_propio = nombre_propio;
        this.origen_km = origen_km;
        this.destino_km = destino_km;
        this.origen_coordenadas = origen_coordenadas;
        this.destino_coordenadas = destino_coordenadas;
        this.longitud = longitud;
        this.diametro_mm = diametro_mm;
        this.diametro_inch = diametro_inch;
        this.espesor_pared_mm = espesor_pared_mm;
        this.espesor_pared_inch = espesor_pared_inch;
        this.especificacion_material = especificacion_material;
        this.temperatura_diseno_c = temperatura_diseno_c;
        this.temperatura_diseno_f = temperatura_diseno_f;
        this.fecha_fabricacion = fecha_fabricacion;
        this.resistencia_traccion = resistencia_traccion;
        this.elemento_maximo_c = elemento_maximo_c;
        this.limite_elastico = limite_elastico;
        this.fecha_construccion = fecha_construccion;
        this.metodo_recubrimiento = metodo_recubrimiento;
        this.tipo_suelo = tipo_suelo;
        this.material_relleno = material_relleno;
        this.proteccion_catodica = proteccion_catodica;
        this.tipo_recubrimiento = tipo_recubrimiento;
    }
}