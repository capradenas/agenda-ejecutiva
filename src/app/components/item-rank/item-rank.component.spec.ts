import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRankComponent } from './item-rank.component';

describe('ItemRankComponent', () => {
  let component: ItemRankComponent;
  let fixture: ComponentFixture<ItemRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
