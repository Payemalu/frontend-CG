export class LiquidoPenetrante {
    _id?: number;
    fechaConstruccionStart: Date;
    fechaConstruccionEnd: Date;
    numeroReporte: string;
    sistema: string;
    presionOperacion: string;
    temperaturaOperacion: string;
    claveAreaUnitaria: string;
    kilometroInicial: string;
    kilometroDestino: string;
    descripcionObra: string;
    nombreLineaTramo: string;
    localizacionCoordenadas: number;
    localizacionKilometraje: string;
    desActividadesInspeccion: string;
    diametro: number;
    espesorNominal: number;
    especificacion: string;
    zonaInspeccionada: string;
    tipoMaterial: string;
    dimensiones: string;
    descripcionPieza: string;
    temperaturaPrueba: number;
    acabadoSuperficial: string;
    iluminacion: string;
    materialAbsorbente: string;
    codigoAplicable: string;
    parte: number;
    seccion: string;
    procedimiento: string;
    tecnicaMetodo: string;
    aplicacion: string;
    visible: boolean;
    fluorescente: boolean;
    tiempoPenetracion: string;
    marcaPenetrante: string;
    numLotePenetrante: string;
    tiempoSecado: string;
    marcaRemovedor: string;
    numLoteRemovedor: string;
    tiempoRevelado: string;
    marcaRevelador: string;
    numLoteMarca: string;
    tipoGrupoPenetracion: string;
    tipoPenetrante: string;
    tipoRevelador: string;
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
        fechaConstruccionStart: Date,
        fechaConstruccionEnd: Date,
        numeroReporte: string,
        sistema: string,
        presionOperacion: string,
        temperaturaOperacion: string,
        claveAreaUnitaria: string,
        kilometroInicial: string,
        kilometroDestino: string,
        descripcionObra: string,
        nombreLineaTramo: string,
        localizacionCoordenadas: number,
        localizacionKilometraje: string,
        desActividadesInspeccion: string,
        diametro: number,
        espesorNominal: number,
        especificacion: string,
        zonaInspeccionada: string,
        tipoMaterial: string,
        dimensiones: string,
        descripcionPieza: string,
        temperaturaPrueba: number,
        acabadoSuperficial: string,
        iluminacion: string,
        materialAbsorbente: string,
        codigoAplicable: string,
        parte: number,
        seccion: string,
        procedimiento: string,
        tecnicaMetodo: string,
        aplicacion: string,
        visible: boolean,
        fluorescente: boolean,
        tiempoPenetracion: string,
        marcaPenetrante: string,
        numLotePenetrante: string,
        tiempoSecado: string,
        marcaRemovedor: string,
        numLoteRemovedor: string,
        tiempoRevelado: string,
        marcaRevelador: string,
        numLoteMarca: string,
        tipoGrupoPenetracion: string,
        tipoPenetrante: string,
        tipoRevelador: string,
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
        this.fechaConstruccionStart = fechaConstruccionStart;
        this.fechaConstruccionEnd = fechaConstruccionEnd;
        this.numeroReporte = numeroReporte;
        this.sistema = sistema;
        this.presionOperacion = presionOperacion;
        this.temperaturaOperacion = temperaturaOperacion;
        this.claveAreaUnitaria = claveAreaUnitaria;
        this.kilometroInicial = kilometroInicial;
        this.kilometroDestino = kilometroDestino;
        this.descripcionObra = descripcionObra;
        this.nombreLineaTramo = nombreLineaTramo;
        this.localizacionCoordenadas = localizacionCoordenadas;
        this.localizacionKilometraje = localizacionKilometraje;
        this.desActividadesInspeccion = desActividadesInspeccion;
        this.diametro = diametro;
        this.espesorNominal = espesorNominal;
        this.especificacion = especificacion;
        this.zonaInspeccionada = zonaInspeccionada;
        this.tipoMaterial = tipoMaterial;
        this.dimensiones = dimensiones;
        this.descripcionPieza = descripcionPieza;
        this.temperaturaPrueba = temperaturaPrueba;
        this.acabadoSuperficial = acabadoSuperficial;
        this.iluminacion = iluminacion;
        this.materialAbsorbente = materialAbsorbente;
        this.codigoAplicable = codigoAplicable;
        this.parte = parte;
        this.seccion = seccion;
        this.procedimiento = procedimiento;
        this.tecnicaMetodo = tecnicaMetodo;
        this.aplicacion = aplicacion;
        this.visible = visible;
        this.fluorescente = fluorescente;
        this.tiempoPenetracion = tiempoPenetracion;
        this.marcaPenetrante = marcaPenetrante;
        this.numLotePenetrante = numLotePenetrante;
        this.tiempoSecado = tiempoSecado;
        this.marcaRemovedor = marcaRemovedor;
        this.numLoteRemovedor = numLoteRemovedor;
        this.tiempoRevelado = tiempoRevelado;
        this.marcaRevelador = marcaRevelador;
        this.numLoteMarca = numLoteMarca;
        this.tipoGrupoPenetracion = tipoGrupoPenetracion;
        this.tipoPenetrante = tipoPenetrante;
        this.tipoRevelador = tipoRevelador;
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