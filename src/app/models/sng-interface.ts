export interface SngI {
    id: number;
    ducto: number;
    subsistema1: string;
    subsistema2: string;
    tramo1: string;
    tramo2: string;

    // constructor( id: number, ducto: number, subsistema1: string, subsistema2: string, tramo1: string, tramo2: string ) {
    //     this.id = id;
    //     this.ducto = ducto;
    //     this.subsistema1 = subsistema1;
    //     this.subsistema2 = subsistema2;
    //     this.tramo1 = tramo1;
    //     this.tramo2 = tramo2;
    // }
}

export interface CveAuI {
    id: number;
    sngId: number;
    area_unitaria: string;
    cve_au: string;
    km_inicial_ddv: string;
    km_destino_ddv: string;
}