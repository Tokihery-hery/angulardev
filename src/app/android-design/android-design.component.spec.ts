import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidDesignComponent } from './android-design.component';

describe('AndroidDesignComponent', () => {
  let component: AndroidDesignComponent;
  let fixture: ComponentFixture<AndroidDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
