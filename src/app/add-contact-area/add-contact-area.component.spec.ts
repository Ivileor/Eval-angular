import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactAreaComponent } from './add-contact-area.component';

describe('AddContactAreaComponent', () => {
  let component: AddContactAreaComponent;
  let fixture: ComponentFixture<AddContactAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
