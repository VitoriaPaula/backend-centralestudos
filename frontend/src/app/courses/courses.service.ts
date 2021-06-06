import { Courses } from './courses.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourserService {
  private courses: Courses[] = [];
  private listaCoursesAtualizada = new Subject<{ courses: Courses[] }>();

  //baseUrl: string = "35.238.193.110:3333/";
  baseUrl: string = "http://localhost:3333/" //Local

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCourses(): Observable<Courses[]> {
    //const parametros = `?pagesize=${pagesize}&page=${page}`;
    return this.httpClient
      .get<Courses[]>(this.baseUrl + 'cursos')// + parametros)
      .pipe(
        map((dados) => {
          this.courses = dados
          this.listaCoursesAtualizada.next({
            courses: [...this.courses]})
          return dados
        }));
  }

  getListaDeCursosAtualizadaObservable() {
    return this.listaCoursesAtualizada.asObservable();
  }

  getCursosFiltrados(linguagem: string, categoria: string, site: string): Observable<Courses[]> {
    const data = { "DS_CATEGORIA": categoria, "DS_SITE": site, "DS_LINGUAGEM": linguagem };
    const params = new HttpParams().set("requestData", encodeURIComponent(JSON.stringify(data)));
    console.log("Chegou no cursos service")
    return this.httpClient
      .get<Courses[]>(this.baseUrl + "cursos/filtro", { params: params })
      .pipe(
        map((dados) => {
          this.courses = dados;
          this.listaCoursesAtualizada.next({
            courses: [...this.courses]})
          return dados
        })
      );
  }
}