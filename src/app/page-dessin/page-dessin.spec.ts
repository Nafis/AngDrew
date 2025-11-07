import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDessin } from './page-dessin';

describe('PageDessin', () => {
  let component: PageDessin;
  let fixture: ComponentFixture<PageDessin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDessin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDessin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
