import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudmysqlComponent } from './crudmysql.component';

describe('CrudmysqlComponent', () => {
  let component: CrudmysqlComponent;
  let fixture: ComponentFixture<CrudmysqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudmysqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
