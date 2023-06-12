export interface SngI {
    id: number;
    ducto: number;
    subsistema1: string;
    subsistema2: string;
    tramo1: string;
    tramo2: string;
}

export interface CveAuI {
    id: number;
    sngId: number;
    area_unitaria: string;
    cve_au: string;
    km_inicial_ddv: string;
    km_destino_ddv: string;
}