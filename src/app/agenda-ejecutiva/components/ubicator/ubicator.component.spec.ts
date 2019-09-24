import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicatorComponent } from './ubicator.component';

describe('UbicatorComponent', () => {
  let component: UbicatorComponent;
  let fixture: ComponentFixture<UbicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
