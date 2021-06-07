export interface Cliente {
    CD_USUARIO: string;
    NM_USUARIO: string;
    DS_EMAIL: string;
    DS_CARGO: string;
    DT_NASCIMENTO: Date;
    CD_PERMISSAO: number;
    PASS: string;
    URL_IMAGEM?: string;
}
