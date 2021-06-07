import { ClienteService } from './clientes/cliente.service';
import { RegisterComponent } from './register/register.component';
import { ClienteAlterarComponent } from './clientes/configuracoes-cliente/cliente-alterar/cliente-alterar.component';
import { LoginComponent } from './login/login.component';
import { CourserService } from './courses/courses.service';
import { AppRoutingModule } from './routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CoursesComponent } from './courses/courses.component';
import { ConfiguracoesClienteComponent } from './clientes/configuracoes-cliente/configuracoes-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CoursesComponent,
    ConfiguracoesClienteComponent,
    ClienteAlterarComponent,
    RegisterComponent
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
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [CourserService,
    ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
