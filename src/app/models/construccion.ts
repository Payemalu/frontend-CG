export class Construccion {
    _id?: number;
    clave: string;
    area_unitaria: string;
    nombre_tramo: string;
    tramo: number;
    km_inicial_ddv: string;
    km_destino_ddv: string;
    origen_coordenadas: string;
    destino_coordenadas: string;
    fecha_construccion: string;
    metodo_recubrimiento: string;
    tipo_suelo: string;
    material_relleno: string;
    proteccion_catodica: string;
    tipo_recubrimiento: string;

    constructor(
        clave: string,
        area_unitaria: string,
        nombre_tramo: string,
        tramo: number,
        km_inicial_ddv: string,
        km_destino_ddv: string,
        origen_coordenadas: string,
        destino_coordenadas: string,
        fecha_construccion: string,
        metodo_recubrimiento: string,
        tipo_suelo: string,
        material_relleno: string,
        proteccion_catodica: string,
        tipo_recubrimiento: string,
    )
    {
        this.clave = clave;
        this.area_unitaria = area_unitaria;
        this.nombre_tramo = nombre_tramo;
        this.tramo = tramo;
        this.km_inicial_ddv = km_inicial_ddv;
        this.km_destino_ddv = km_destino_ddv;
        this.origen_coordenadas = origen_coordenadas;
        this.destino_coordenadas = destino_coordenadas;
        this.fecha_construccion = fecha_construccion;
        this.metodo_recubrimiento = metodo_recubrimiento;
        this.tipo_suelo = tipo_suelo;
        this.material_relleno = material_relleno;
        this.proteccion_catodica = proteccion_catodica;
        this.tipo_recubrimiento = tipo_recubrimiento;
    }
}