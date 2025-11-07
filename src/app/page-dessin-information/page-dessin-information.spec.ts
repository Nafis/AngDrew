import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDessinInformation } from './page-dessin-information';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('PageDessinInformation', () => {
  let component: PageDessinInformation;
  let fixture: ComponentFixture<PageDessinInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDessinInformation],
      imports: [
          MatGridListModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule]
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
