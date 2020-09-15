import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionalComponent } from './internacional.component';

describe('InternacionalComponent', () => {
  let component: InternacionalComponent;
  let fixture: ComponentFixture<InternacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
