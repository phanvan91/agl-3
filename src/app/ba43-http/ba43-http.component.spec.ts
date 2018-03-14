import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ba43HttpComponent } from './ba43-http.component';

describe('Ba43HttpComponent', () => {
  let component: Ba43HttpComponent;
  let fixture: ComponentFixture<Ba43HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ba43HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ba43HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
