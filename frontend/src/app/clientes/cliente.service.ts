import { Cliente } from './cliente.module';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {

    //URLbase: string = "35.238.193.110:3333/";
    URLbase: string = "http://localhost:3333/";

    constructor(private httpClient: HttpClient, private router: Router) { }

    adicionarCliente(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.post<Cliente>(
            this.URLbase + "usuario", cliente
        ).pipe(
            map(obj => obj)
        )
    }

    loginCliente(email: string, password: string): Observable<Cliente> {
        const data = { "DS_EMAIL": email, "PASS": password };
        const params = new HttpParams().set("requestData", encodeURIComponent(JSON.stringify(data)));
        return this.httpClient.get<Cliente>(
            this.URLbase + "login", { params: params })
            .pipe(
                map(obj => obj)
            )
    }
}