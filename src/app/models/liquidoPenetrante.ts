export class LiquidoPenetrante {
    _id?: number;
    fecha_inicio: string;
    fecha_final: string;
    numero_reporte: string;
    sistema: string;
    presion_operacion: string;
    temperatura_operacion: string;
    area_unitaria: string;
    kilometro_inicial: string;
    kilometro_destino: string;
    descripcion_obra: string;
    nombre_linea_tramo: string;
    localizacion_coordenadas: number;
    localizacion_kilometraje: string;
    des_actividades_inspeccion: string;
    diametro: number;
    espesor_nominal: number;
    especificacion: string;
    zona_inspeccionada: string;
    tipo_material: string;
    dimensiones: string;
    descripcion_pieza: string;
    temperatura_prueba: number;
    acabado_superficial: string;
    iluminacion: string;
    material_absorbente: string;
    codigo_aplicable: string;
    parte: number;
    seccion: string;
    procedimiento: string;
    tecnica_metodo: string;
    aplicacion: string;
    visible: boolean;
    fluorescente: boolean;
    tiempo_penetracion: string;
    marca_penetrante: string;
    num_lote_penetrante: string;
    tiempo_secado: string;
    marca_removedor: string;
    num_lote_removedor: string;
    tiempo_revelado: string;
    marca_revelador: string;
    num_lote_marca: string;
    tipo_grupo_penetracion: string;
    tipo_penetrante: string;
    tipo_revelador: string;
    referencia: string;
    elemento: string;
    descripcion: string;
    identificacion: string;
    tbl_identificacion: string;
    tbl_elemento_a: string;
    tbl_elemento_b: string;
    tbl_evaluacion: number;
    tbl_evaluacion_longitud: number;
    tbl_tipo_defecto: string;
    tbl_dimension_defecto: string;
    tbl_observaciones: string;
    tbl_resultado_dictamen: boolean;
    resultado: number;
    observaciones: string;

    constructor(
        fecha_inicio: string,
        fecha_final: string,
        numero_reporte: string,
        sistema: string,
        presion_operacion: string,
        temperatura_operacion: string,
        area_unitaria: string,
        kilometro_inicial: string,
        kilometro_destino: string,
        descripcion_obra: string,
        nombre_linea_tramo: string,
        localizacion_coordenadas: number,
        localizacion_kilometraje: string,
        des_actividades_inspeccion: string,
        diametro: number,
        espesor_nominal: number,
        especificacion: string,
        zona_inspeccionada: string,
        tipo_material: string,
        dimensiones: string,
        descripcion_pieza: string,
        temperatura_prueba: number,
        acabado_superficial: string,
        iluminacion: string,
        material_absorbente: string,
        codigo_aplicable: string,
        parte: number,
        seccion: string,
        procedimiento: string,
        tecnica_metodo: string,
        aplicacion: string,
        visible: boolean,
        fluorescente: boolean,
        tiempo_penetracion: string,
        marca_penetrante: string,
        num_lote_penetrante: string,
        tiempo_secado: string,
        marca_removedor: string,
        num_lote_removedor: string,
        tiempo_revelado: string,
        marca_revelador: string,
        num_lote_marca: string,
        tipo_grupo_penetracion: string,
        tipo_penetrante: string,
        tipo_revelador: string,
        referencia: string,
        elemento: string,
        descripcion: string,
        identificacion: string,
        tbl_identificacion: string,
        tbl_elemento_a: string,
        tbl_elemento_b: string,
        tbl_evaluacion: number,
        tbl_evaluacion_longitud: number,
        tbl_tipo_defecto: string,
        tbl_dimension_defecto: string,
        tbl_observaciones: string,
        tbl_resultado_dictamen: boolean,
        resultado: number,
        observaciones: string,
    )
    {
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.numero_reporte = numero_reporte;
        this.sistema = sistema;
        this.presion_operacion = presion_operacion;
        this.temperatura_operacion = temperatura_operacion;
        this.area_unitaria = area_unitaria;
        this.kilometro_inicial = kilometro_inicial;
        this.kilometro_destino = kilometro_destino;
        this.descripcion_obra = descripcion_obra;
        this.nombre_linea_tramo = nombre_linea_tramo;
        this.localizacion_coordenadas = localizacion_coordenadas;
        this.localizacion_kilometraje = localizacion_kilometraje;
        this.des_actividades_inspeccion = des_actividades_inspeccion;
        this.diametro = diametro;
        this.espesor_nominal = espesor_nominal;
        this.especificacion = especificacion;
        this.zona_inspeccionada = zona_inspeccionada;
        this.tipo_material = tipo_material;
        this.dimensiones = dimensiones;
        this.descripcion_pieza = descripcion_pieza;
        this.temperatura_prueba = temperatura_prueba;
        this.acabado_superficial = acabado_superficial;
        this.iluminacion = iluminacion;
        this.material_absorbente = material_absorbente;
        this.codigo_aplicable = codigo_aplicable;
        this.parte = parte;
        this.seccion = seccion;
        this.procedimiento = procedimiento;
        this.tecnica_metodo = tecnica_metodo;
        this.aplicacion = aplicacion;
        this.visible = visible;
        this.fluorescente = fluorescente;
        this.tiempo_penetracion = tiempo_penetracion;
        this.marca_penetrante = marca_penetrante;
        this.num_lote_penetrante = num_lote_penetrante;
        this.tiempo_secado = tiempo_secado;
        this.marca_removedor = marca_removedor;
        this.num_lote_removedor = num_lote_removedor;
        this.tiempo_revelado = tiempo_revelado;
        this.marca_revelador = marca_revelador;
        this.num_lote_marca = num_lote_marca;
        this.tipo_grupo_penetracion = tipo_grupo_penetracion;
        this.tipo_penetrante = tipo_penetrante;
        this.tipo_revelador = tipo_revelador;
        this.referencia = referencia;
        this.elemento = elemento;
        this.descripcion = descripcion;
        this.identificacion = identificacion;
        this.tbl_identificacion = tbl_identificacion;
        this.tbl_elemento_a = tbl_elemento_a;
        this.tbl_elemento_b = tbl_elemento_b;
        this.tbl_evaluacion = tbl_evaluacion;
        this.tbl_evaluacion_longitud = tbl_evaluacion_longitud;
        this.tbl_tipo_defecto = tbl_tipo_defecto;
        this.tbl_dimension_defecto = tbl_dimension_defecto;
        this.tbl_observaciones = tbl_observaciones;
        this.tbl_resultado_dictamen = tbl_resultado_dictamen;
        this.resultado = resultado;
        this.observaciones = observaciones; 
    }
}