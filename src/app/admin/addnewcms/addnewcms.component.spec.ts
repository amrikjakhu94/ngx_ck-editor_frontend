import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcmsComponent } from './addnewcms.component';

describe('AddnewcmsComponent', () => {
  let component: AddnewcmsComponent;
  let fixture: ComponentFixture<AddnewcmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
