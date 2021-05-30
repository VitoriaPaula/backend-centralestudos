import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAlterarComponent } from './cliente-alterar.component';

describe('ClienteAlterarComponent', () => {
  let component: ClienteAlterarComponent;
  let fixture: ComponentFixture<ClienteAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
