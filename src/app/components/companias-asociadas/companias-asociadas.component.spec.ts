import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasAsociadasComponent } from './companias-asociadas.component';

describe('CompaniasAsociadasComponent', () => {
  let component: CompaniasAsociadasComponent;
  let fixture: ComponentFixture<CompaniasAsociadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniasAsociadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniasAsociadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
