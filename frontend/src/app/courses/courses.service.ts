import { CategoriaNewsletter } from './../newsletter/categoria-newsletter.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Newsletter } from './../newsletter/newsletter.module';
import { Courses } from './courses.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, catchError } from 'rxjs/operators';
import { Subject, Observable, Subscription, EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourserService {
  private courses: Courses[] = [];
  private categorias: CategoriaNewsletter[] = [];
  private listaCoursesAtualizada = new Subject<{ courses: Courses[] }>();
  private listaCategoriasAtualizada = new Subject<{ categorias: CategoriaNewsletter[] }>();

  //baseUrl: string = "http://34.122.223.67:3333/";
  baseUrl: string = "http://localhost:3333/" //Local

  constructor(private httpClient: HttpClient, private router: Router, private snackbar: MatSnackBar) { }

  getCourses(): Subscription {
    return this.httpClient
      .get<Courses[]>(this.baseUrl + 'cursos')
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
      });
  }
  getListaDeCursosAtualizadaObservable() {
    return this.listaCoursesAtualizada.asObservable();
  }

  getListaDeCategoriaCursosAtualizadaObservable() {
    return this.listaCategoriasAtualizada.asObservable();
  }

  getCursosFiltrados(linguagem: string, categoria: string, site: string): Subscription {
    const data = { "CATEGORIA": categoria, "SITE": site, "LINGUAGEM": linguagem };
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

  getCategoriasNewsletter(CD_USUARIO: string): Subscription{
    const dados = {"CD_USUARIO": CD_USUARIO};
    return this.httpClient
      .post<CategoriaNewsletter[]>(this.baseUrl + "usuarioCurso/filtro", dados)
      .pipe(
        map((dados) => {
          return {
            categorias: dados
          }
        }))
        .subscribe((dados) => {
        this.categorias = dados.categorias;
        this.listaCategoriasAtualizada.next({
          categorias: [...this.categorias]
        });
      });
  }
}