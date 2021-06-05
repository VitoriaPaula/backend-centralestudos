import { Courses } from './courses.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourserService {
  private courses: Courses[] = [];
  private listaCoursesAtualizada = new Subject<{ courses: Courses[]}>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCourses(): Observable<Courses[]> {
    //const parametros = `?pagesize=${pagesize}&page=${page}`;
    return this.httpClient
      .get<Courses[]>('http://localhost:3333/cursos')// + parametros)
      .pipe(
        map((dados) => dados));
  }

  getListaDeCursosAtualizadaObservable() {
    return this.listaCoursesAtualizada.asObservable();
  }
}