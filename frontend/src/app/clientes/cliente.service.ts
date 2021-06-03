import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Cliente } from "../clientes/cliente.module";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {

    constructor(private httpClient: HttpClient, private router: Router) { }

    adicionarCliente(NM_USUARIO: string, DS_EMAIL: string, DS_CARGO: string, DT_NASCIMENTO: Date, PASS: string) {
        const dadosCliente = new FormData();
        dadosCliente.append('NM_USUARIO', NM_USUARIO);
        dadosCliente.append('DS_EMAIL', DS_EMAIL);
        dadosCliente.append('DS_CARGO', DS_CARGO);
        dadosCliente.append('DT_NASCIMENTO', DT_NASCIMENTO.toDateString());
        dadosCliente.append('PASS', PASS);

        return this.httpClient.post<Cliente>(
            'http://localhost:3333/usuario',
            dadosCliente
        ).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }

    errorHandler(e: any): any {
        console.log(e);
        return EMPTY
    }

}