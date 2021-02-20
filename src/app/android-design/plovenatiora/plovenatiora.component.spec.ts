import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlovenatioraComponent } from './plovenatiora.component';

describe('PlovenatioraComponent', () => {
  let component: PlovenatioraComponent;
  let fixture: ComponentFixture<PlovenatioraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlovenatioraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlovenatioraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
