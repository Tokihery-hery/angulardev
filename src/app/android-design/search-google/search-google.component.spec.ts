import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGoogleComponent } from './search-google.component';

describe('SearchGoogleComponent', () => {
  let component: SearchGoogleComponent;
  let fixture: ComponentFixture<SearchGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
