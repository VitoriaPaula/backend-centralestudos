import { Newsletter } from './newsletter.module';
import { CourserService } from './../courses/courses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public estaCarregando: boolean = false;
  categorias: FormGroup
  newsletter: Newsletter;
  listaCategorias: Array<string> = [];

  constructor(fb: FormBuilder, public courseService: CourserService) {
    this.categorias = fb.group({
      backend: false,
      frontend: false,
      azure: false,
      other: false
    });
  }

  ngOnInit(): void {
  }

  selecionaCategoria(): void {
    this.estaCarregando = true;
    console.log(this.categorias.value)

    this.listaCategorias = [];

    if (this.categorias.value.backend) {
      this.listaCategorias.push("Backend");
    }
    if (this.categorias.value.frontend) {
      this.listaCategorias.push("Frontend");
    }
    if (this.categorias.value.azure) {
      this.listaCategorias.push("Azure");
    }
    // if (this.categorias.value.backend) {
    //   this.listaCategorias.push("Backend");
    // }
    

    console.log(this.listaCategorias);
    this.newsletter = {
      CD_USUARIO: window.localStorage.getItem("CD_USUARIO"),
      LS_CATEGORIAS: this.listaCategorias
    }
    this.courseService.atualizaNewsletter(this.newsletter)
      .subscribe(() => {
        this.courseService.showMessage("Newsletter atualizada com sucesso!", false)
      })
    this.estaCarregando = false;
  }
}
