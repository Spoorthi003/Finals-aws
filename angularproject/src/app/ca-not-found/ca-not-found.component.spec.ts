import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaNotFoundComponent } from './ca-not-found.component';

xdescribe('CaNotFoundComponent', () => {
  let component: CaNotFoundComponent;
  let fixture: ComponentFixture<CaNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
