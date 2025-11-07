import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDessinInformation } from './page-dessin-information';

describe('PageDessinInformation', () => {
  let component: PageDessinInformation;
  let fixture: ComponentFixture<PageDessinInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDessinInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDessinInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
