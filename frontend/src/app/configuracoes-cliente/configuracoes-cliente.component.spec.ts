import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesClienteComponent } from './configuracoes-cliente.component';

describe('ConfiguracoesClienteComponent', () => {
  let component: ConfiguracoesClienteComponent;
  let fixture: ComponentFixture<ConfiguracoesClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracoesClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracoesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
