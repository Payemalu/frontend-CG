export class Ducto {
    _id?: number;
    FID: number;
    CVE: string;
    SIST: string;
    CVE_DUC: string;
    DUCTO: string;
    CVE_TRM: string;
    TRAMO: string;
    CVE_SEG: number;
    SEGMENTO: string;
    CVE_AU: string;
    AREA_UNI: string;
    LONG: number;
    KM_INI: string;
    KM_DEST: string;
    DN: number;
    ESP: number;
    E_MATERIAL: string;
    PRESION: number;
    TEMP: number;
    FECHA_CONS: string;

    constructor(
        FID: number,
        CVE: string,
        SIST: string,
        CVE_DUC: string,
        DUCTO: string,
        CVE_TRM: string,
        TRAMO: string,
        CVE_SEG: number,
        SEGMENTO: string,
        CVE_AU: string,
        AREA_UNI: string,
        LONG: number,
        KM_INI: string,
        KM_DEST: string,
        DN: number,
        ESP: number,
        E_MATERIAL: string,
        PRESION: number,
        TEMP: number,
        FECHA_CONS: string
    )
    {
        this.FID = FID;
        this.CVE = CVE;
        this.SIST = SIST;
        this.CVE_DUC = CVE_DUC;
        this.DUCTO = DUCTO;
        this.CVE_TRM = CVE_TRM;
        this.TRAMO = TRAMO;
        this.CVE_SEG = CVE_SEG;
        this.SEGMENTO = SEGMENTO;
        this.CVE_AU = CVE_AU;
        this.AREA_UNI = AREA_UNI;
        this.LONG = LONG;
        this.KM_INI = KM_INI;
        this.KM_DEST = KM_DEST;
        this.DN = DN;
        this.ESP = ESP;
        this.E_MATERIAL = E_MATERIAL;
        this.PRESION = PRESION;
        this.TEMP = TEMP;
        this.FECHA_CONS = FECHA_CONS 
    }
}