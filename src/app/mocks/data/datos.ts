import { Formulario } from "src/app/models/formularios";

export const formularios: Formulario[] = [
    {
        id: 1, 
        titulo: 'Reporte de Inspección',
        subtitulo: 'Líquidos Penetrantes',
        descripcion: 'Formulario con campos de Líquidos Penetrantes',
        imagen: 'port_01.jpg',
        enlace: '/formularios'
    },
    {
        id: 2,
        titulo: 'Identificación',
        subtitulo: 'Diseño',
        descripcion: 'Formulario con campos de Diseño',
        imagen: 'port_02.jpg',
        enlace: '/diseno'
    },
    {
        id: 3,
        titulo: 'Identificación',
        subtitulo: 'Construcción',
        descripcion: 'Formulario con campos de Construcción',
        imagen: 'port_03.jpg',
        enlace: '/construccion'
    },
];