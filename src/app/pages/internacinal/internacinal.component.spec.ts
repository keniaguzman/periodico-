import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacinalComponent } from './internacinal.component';

describe('InternacinalComponent', () => {
  let component: InternacinalComponent;
  let fixture: ComponentFixture<InternacinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternacinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
