import { Courses } from './courses.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourserService {
  private courses: Courses[] = [];
  private listaCoursesAtualizada = new Subject<{ courses: Courses[], maxClientes: number }>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCourses(pagesize: number, page: number): void {
    const parametros = `?pagesize=${pagesize}&page=${page}`;
    this.httpClient
      .get<{
        mensagem: string, courses: any, maxClientes:
        number
      }>('http://localhost:3333/cursos' + parametros)
      .pipe(
        map((dados) => {
          return {
            courses: dados.courses.map((course:any) => {
              return {
                CD_CURSO: course.CD_CURSO,
                NM_CURSO: course.NM_CURSO,
                URL_CURSO: course.URL_CURSO,  
                DS_CURSO: course.DS_CURSO,
                DS_DURACAO: course.DS_DURACAO,
                DS_IDIOMA: course.DS_IDIOMA,
                DS_CATEGORIA: course.DS_CATEGORIA,
                DS_SITE: course.DS_SITE,
                DS_LINGUAGEM: course.DS_LINGUAGEM
              };
            }),
            maxClientes: dados.maxClientes
          }
        })
      )
      .subscribe((dados) => {
        this.courses = dados.courses;
        this.listaCoursesAtualizada.next({
          courses: [...this.courses],
          maxClientes: dados.maxClientes
        });
      });
  }

}