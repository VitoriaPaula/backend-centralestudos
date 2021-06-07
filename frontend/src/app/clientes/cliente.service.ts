import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from './cliente.module';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {
    private cliente: Cliente;
    private clienteSubject = new Subject<{ courses: Cliente }>();

    //URLbase: string = "35.238.193.110:3333/";
    URLbase: string = "http://localhost:3333/";

    constructor(private httpClient: HttpClient, private router: Router, private snackbar: MatSnackBar) { }

    adicionarCliente(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.post<Cliente>(
            this.URLbase + "usuario", cliente
        ).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e, "Usuário já existente!"))
        )
    }

    //Mandar DS_EMAIL e PASS, 
    loginCliente(email: string, password: string): Observable<Cliente> {
        const data = { "DS_EMAIL": email, "PASS": password };
        return this.httpClient.post<Cliente>(
            this.URLbase + "login", data)
            .pipe(map(obj => obj),
                catchError(e => this.errorHandler(e, "Login Inválido")))
    }

    errorHandler(e: any, msg: string): Observable<any> {
        this.showMessage(msg, true)
        return EMPTY
    }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackbar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }
}