import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  esconder = true;
  displayedColumns = ['Linguagens', 'Categoria', 'Sites'];

  constructor() { }

  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.esconder = !this.esconder;
  }

}
