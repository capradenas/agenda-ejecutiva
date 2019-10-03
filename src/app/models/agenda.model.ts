import Visita from './visita.model';

export default interface Agenda {
    
    id: number;
    idAnexoEmpresa: number;
    fechaPrimeraVisita: Date;
    periocidad: number;
    comentarios?: string;
    rutEjecutivo: string;
    codigoSucursal: number;
    visitas?: Visita[];
}