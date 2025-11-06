import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDessin } from './zone-dessin';

describe('ZoneDessin', () => {
  let component: ZoneDessin;
  let fixture: ComponentFixture<ZoneDessin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneDessin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDessin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
