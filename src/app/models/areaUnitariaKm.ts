export class KilometrajeI {
  _id?: number;
  area_unitaria: string;
  clave: string;
  kilometro_destino: string;
  kilometro_inicial: string;
  km_destino_ddv: string;
  km_inicial_ddv: string;
  nombre_tramo: string;
  tramo: string;

  constructor(
    area_unitaria: string, 
    clave: string,
    kilometro_destino: string,
    kilometro_inicial: string,
    km_destino_ddv: string,
    km_inicial_ddv: string,
    nombre_tramo: string,
    tramo: string
  )
  {
    this.area_unitaria = area_unitaria;
    this.clave = clave;
    this.kilometro_destino = kilometro_destino;
    this.kilometro_inicial = kilometro_inicial;
    this.km_destino_ddv = km_destino_ddv;
    this.km_inicial_ddv = km_inicial_ddv;
    this.nombre_tramo = nombre_tramo;
    this.tramo = tramo;
  }
}
