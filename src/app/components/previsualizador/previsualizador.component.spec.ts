import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisualizadorComponent } from './previsualizador.component';

describe('PrevisualizadorComponent', () => {
  let component: PrevisualizadorComponent;
  let fixture: ComponentFixture<PrevisualizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisualizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
