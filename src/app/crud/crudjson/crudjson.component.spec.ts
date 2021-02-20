import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudjsonComponent } from './crudjson.component';

describe('CrudjsonComponent', () => {
  let component: CrudjsonComponent;
  let fixture: ComponentFixture<CrudjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
