import { CourserService } from './courses.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  totalDeClientes: number = 0;
  totalDeClientesPorPagina: number = 2;
  opcoesTotalDeClientesPorPagina = [2, 5, 10];
  paginaAtual: number = 1; //definir

  constructor(public courseService: CourserService) { }

  ngOnInit(): void {
    this.courseService.getCourses(this.totalDeClientesPorPagina, this.paginaAtual);
  }

  onPaginaAlterada(dadosPagina: PageEvent) {
    //console.log (dadosPagina);
    this.paginaAtual = dadosPagina.pageIndex + 1; //no paginator a contagem começa de 0
    this.totalDeClientesPorPagina = dadosPagina.pageSize;
    this.courseService.getCourses(this.totalDeClientesPorPagina, this.paginaAtual);
  }
}
