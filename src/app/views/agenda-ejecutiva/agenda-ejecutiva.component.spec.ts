import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEjecutivaComponent } from './agenda-ejecutiva.component';

describe('AgendaEjecutivaComponent', () => {
  let component: AgendaEjecutivaComponent;
  let fixture: ComponentFixture<AgendaEjecutivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaEjecutivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaEjecutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
