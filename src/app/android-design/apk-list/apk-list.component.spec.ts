import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkListComponent } from './apk-list.component';

describe('ApkListComponent', () => {
  let component: ApkListComponent;
  let fixture: ComponentFixture<ApkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
