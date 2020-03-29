import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTagComponent } from './item-tag.component';

describe('ItemTagComponent', () => {
  let component: ItemTagComponent;
  let fixture: ComponentFixture<ItemTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
