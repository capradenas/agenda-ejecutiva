export default interface FormAgendaModel {
    anexoEmpresa: number;
    fechaPrimeraCita: Date;
    periocidad: number;
    comentarios: string;
    citas: Date[];
}