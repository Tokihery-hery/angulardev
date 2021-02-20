import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickinicComponent } from './pickinic.component';

describe('PickinicComponent', () => {
  let component: PickinicComponent;
  let fixture: ComponentFixture<PickinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
