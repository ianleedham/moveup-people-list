import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonLocationComponent } from './person-location.component';

describe('PersonLocationComponent', () => {
  let component: PersonLocationComponent;
  let fixture: ComponentFixture<PersonLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
