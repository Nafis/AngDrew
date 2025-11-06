import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZWorkspace } from './z-workspace';

describe('ZWorkspace', () => {
  let component: ZWorkspace;
  let fixture: ComponentFixture<ZWorkspace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZWorkspace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZWorkspace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
