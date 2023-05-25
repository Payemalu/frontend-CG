export class AreaUnitariaKm {
    _id?: number;

    tramo: number;
    nombre_tramo: string;
    cve_au: number;
    km_inicial: string;
    km_final: string;
    km_inicial_ddv: string;
    km_final_ddv: string;
    cve: string;
    area_unitaria: string;
    
    constructor(
        tramo: number,
        nombre_tramo: string,
        cve_au: number,
        km_inicial: string,
        km_final: string,
        km_inicial_ddv: string,
        km_final_ddv: string,
        cve: string,
        area_unitaria: string
    )
    {
        this.tramo = tramo;
        this.nombre_tramo = nombre_tramo;
        this.cve_au = cve_au;
        this.km_inicial = km_inicial;
        this.km_final = km_final;
        this.km_inicial_ddv = km_inicial_ddv;
        this.km_final_ddv = km_final_ddv;
        this.cve = cve;
        this.area_unitaria = area_unitaria;
    }
}