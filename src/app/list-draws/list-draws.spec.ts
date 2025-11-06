import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDraws } from './list-draws';

describe('ListDraws', () => {
  let component: ListDraws;
  let fixture: ComponentFixture<ListDraws>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDraws]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDraws);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
