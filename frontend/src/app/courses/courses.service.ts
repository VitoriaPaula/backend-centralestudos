import { Cliente } from './../clientes/cliente.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Newsletter } from './../newsletter/newsletter.module';
import { Courses } from './courses.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, catchError } from 'rxjs/operators';
import { Subject, Observable, Subscription, EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourserService {
  private courses: Courses[] = [];
  private listaCoursesAtualizada = new Subject<{ courses: Courses[] }>();

  //baseUrl: string = "35.238.193.110:3333/";
  baseUrl: string = "http://localhost:3333/" //Local

  constructor(private httpClient: HttpClient, private router: Router, private snackbar: MatSnackBar) { }

  getCourses(): Subscription {
    //const parametros = `?pagesize=${pagesize}&page=${page}`;
    return this.httpClient
      .get<Courses[]>(this.baseUrl + 'cursos')// + parametros)
      .pipe(
        map((dados) => {
          return {
            courses: dados
          }
        }))
      .subscribe((dados) => {
        this.courses = dados.courses;
        this.listaCoursesAtualizada.next({
          courses: [...this.courses]
        });
        console.log(this.listaCoursesAtualizada)
      });
  }
  getListaDeCursosAtualizadaObservable() {
    return this.listaCoursesAtualizada.asObservable();
  }
  getCursosFiltrados(linguagem: string, categoria: string, site: string): Subscription {
    const data = { "CATEGORIA": categoria, "SITE": site, "LINGUAGEM": linguagem };
    // const params = encodeURIComponent(JSON.stringify(data));
    // const url = `${this.baseUrl}cursos/filtro?data=${params}`
    // console.log("Chegou no cursos service    " + url)
    return this.httpClient
      .post<Courses[]>(this.baseUrl + "cursos/filtro", data)
      .pipe(
        map((dados) => {
          return {
            courses: dados
          }
        }))
      .subscribe((dados) => {
        this.courses = dados.courses;
        this.listaCoursesAtualizada.next({
          courses: [...this.courses]
        });
        console.log(this.listaCoursesAtualizada)
      });
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  atualizaNewsletter(newsletter: Newsletter) {
    return this.httpClient
      .post(this.baseUrl + 'usuarioCurso', newsletter)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e, "Não foi possível atualizar newsletter!"))
      )
  }

  errorHandler(e: any, msg: string): Observable<any> {
    this.showMessage(msg, true)
    return EMPTY
  }
}