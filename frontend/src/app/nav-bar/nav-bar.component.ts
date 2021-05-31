import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  esconder = true;
  login = false;
  config = false;
  nome = "Vitoria";
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onClickSearch(): void {
    this.esconder = !this.esconder;
  }

  onClickHide(): void {
    this.config = !this.config;
  }

}
