import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnupComponent } from './segnup.component';

describe('SegnupComponent', () => {
  let component: SegnupComponent;
  let fixture: ComponentFixture<SegnupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
