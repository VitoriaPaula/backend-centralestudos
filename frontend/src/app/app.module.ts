import { RegisterComponent } from './clientes/register/register.component';
import { ClienteAlterarComponent } from './clientes/configuracoes-cliente/cliente-alterar/cliente-alterar.component';
import { LoginComponent } from './clientes/login/login.component';
import { CourserService } from './courses/courses.service';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { CoursesComponent } from './courses/courses.component';
import { ConfiguracoesClienteComponent } from './clientes/configuracoes-cliente/configuracoes-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CoursesComponent,
    LoginComponent,
    ConfiguracoesClienteComponent,
    ClienteAlterarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatTableModule,
    AppRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ],
  providers: [CourserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
