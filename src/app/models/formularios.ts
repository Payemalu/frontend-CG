export class Formulario {
    id: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    imagen: string;
    enlace: string;

    constructor( id: number, titulo: string, subtitulo: string, descripcion: string, imagen: string, enlace: string ) {
        this.id = id;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.enlace = enlace;
    }
}