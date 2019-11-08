export interface Gestion {
    visitaId: number;
    
    contactoId?: number;
    ​​​nombre: string;
    ​telefono: string;
    cargo: string;
    email: string;
    estamento: string;

    ​​​evalCredito: number;
    evalSil: number;
    evalServicio: number;
    evalPcom: number;
    evalAsfam: number;
    ​​​evalGlobal: number;
    
    comentarios: string;
    
    alerta: boolean;
    detalleAlerta?: string;
}